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

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(moment())
  const [date, setDate] = useState(moment());
  const [addEventError, setAddEventError] = useState('');
  const [newEventData, setNewEventData] = useState({});
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
    fetch('http://localhost:5000/api/events/event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        category: newEventCategory,
        description: newEventDescription,
        date: selectedDate
      })
    }).then(response => {
      if (response.status !== 200) {
        throw new Error('event was not created')
      }
      return response.json()
    }).then(() => {
      getEvents()
      setNewEventDescription('')
    })
      .catch(alert)
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
  
  function getEvents() {
    fetch('http://localhost:5000/api/events/')
      .then(res => res.json())
      .then(data => setNewEventData(prev => data))
  }
  useEffect(() => {
    if (token) {
      setIsAuth(true)
    }
  }, [token])
  useEffect(() => {
    getEvents()
  }, [])
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