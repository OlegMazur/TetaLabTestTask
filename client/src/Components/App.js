import React, { useState } from 'react';
import Calendar from './Calendar/Calendar';
import styles from './App.module.scss';
import LoginPage from './LoginPage/LoginPage';
import AddEventPage from './ModalPage/AddEventPage';
import moment from 'moment/moment';
//const {user}= {user: {name:'Oleg', email:'mazuroleg75@gmail.com' }};
const user = false;
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
  const [isAuth, setIsAuth] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedDate, setSelectedDate] = useState(moment())
  const [date, setDate] = useState(moment());
  const [addEventError, setAddEventError] = useState('');
  const [newEventData, setNewEventData] = useState(events);
  const [newEventDescription, setNewEventDescription] = useState('');
  const [newEventCategory, setNewEventCategory] = useState('');
  const newEventHahdler = (event) => {
    if (moment(event.target.value) < date) {
      setAddEventError('Дата повинна бути в майбутньому')
      console.log('error')
    }
    if (moment(event.target.value) > date) {
      setAddEventError('');
      setSelectedDate(prev => prev = moment(event.target.value));
      console.log('error')
    }
  }
  const onSubmitNewEventData = () => {
    const id=events.length;

    const eventData = { 
            id,
            category:newEventCategory,
            description:newEventDescription,
            date:selectedDate.format()
         }
         setNewEventData(prev=>[...prev, eventData])
    // events.push(eventData)
    console.log(newEventData)
  }
  console.log(newEventDescription)
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
          : <LoginPage user={user} />
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