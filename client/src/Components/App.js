import React, { useEffect, useState } from 'react';
import Calendar from './Calendar/Calendar';
import LoginPage from './LoginPage/LoginPage';
import AddEventPage from './ModalPage/AddEventPage';
import moment from 'moment/moment';

import styles from './App.module.scss';

const eventsCategory = {
  SPORT: 'sports',
  FAMILY: 'family',
  WORK: 'work',
  STUDY: 'study',
  RELAX: 'relax'
}
const events = [
  { id: 0, category: 'sports', description: 'Yoga in park', date: '2023-03-28T00:00:00+03:00' },
  { id: 1, category: 'sports', description: 'Yoga in park', date: '2023-04-28T00:00:00+03:00' },
  { id: 2, category: 'family', description: 'Dinner with family', date: '2023-04-18T00:00:00+03:00' },
  { id: 3, category: 'work', description: 'Meeting with teem', date: '2023-04-13T00:00:00+03:00' },
  { id: 4, category: 'study', description: 'All day conference dddddd ddddd', date: '2023-04-11T00:00:00+03:00' },
  { id: 5, category: 'relax', description: 'Birthday party', date: '2023-04-07T00:00:00+03:00' },
  { id: 6, category: 'study', description: 'Marketing events', date: '2023-03-22T00:00:00+02:00' },
]

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(moment())
  const [date, setDate] = useState(moment());
  const [addEventError, setAddEventError] = useState('');
  const [newEventData, setNewEventData] = useState(events);
  const [newEventDescription, setNewEventDescription] = useState('');
  const [newEventCategory, setNewEventCategory] = useState('');
  const [loginData, setLoginData] = useState({ login: '', password: '' })

  const loginHandler = (event) => {
    setLoginData((prev) => {
      const prevData = { ...prev }
      prevData[event.target.name] = event.target.value
      return prevData
    })
  }
  const newEventHahdler = (event) => {
    if (moment(event.target.value) < date) {
      setAddEventError('Дата повинна бути в майбутньому')
    }
    if (moment(event.target.value) > date) {
      setAddEventError('');
      setSelectedDate(prev => prev = moment(event.target.value));
    }
  }
  const onSubmitNewEventData = () => {
    const id = events.length;

    const eventData = {
      id,
      category: newEventCategory,
      description: newEventDescription,
      date: selectedDate.format()
    }
    setNewEventData(prev => [...prev, eventData])
    setIsModalVisible(prev => !prev);
    setNewEventDescription('');
    setNewEventCategory('');
  }

  const loginSubmit = () => {
    fetch('http://localhost:5000/api/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(loginData)
    }).then(response => {
      if (response.status !== 200) {
        throw new Error('authorization error')
      }
      return response.json()
    }).then(data => {
      setToken(data)
    })
      .catch(alert)
  }

  useEffect(() => {
    if (token) {
      setIsAuth(true)
    }
  }, [token])
  
  return (
    <div className={styles.App}>
      <main>
        {isAuth
          ? <Calendar
            events={newEventData}
            selectedDate={selectedDate}
            date={date}
            setSelectedDate={setSelectedDate}
            setIsModalVisible={setIsModalVisible} />
          : <LoginPage
            loginHandler={loginHandler}
            loginData={loginData}
            loginSubmit={loginSubmit}
          />
        }
        {isModalVisible && <AddEventPage
          newEventCategory={newEventCategory}
          newEventHahdler={newEventHahdler}
          addEventError={addEventError}
          setIsModalVisible={setIsModalVisible}
          setNewEventCategory={setNewEventCategory}
          selectedDate={moment(selectedDate).format('DD.MM.YYYY')}
          todayDate={moment(date).format('DDMMYYYY')}
          eventsCategory={eventsCategory}
          newEventDescription={newEventDescription}
          setNewEventDescription={setNewEventDescription}
          onSubmitNewEventData={onSubmitNewEventData}
        />
        }

      </main>
    </div>
  );
}

export default App;