import React, { useState } from 'react';
import moment from 'moment/moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from './Calendar.module.scss'
import { faChevronDown, faChevronLeft, faChevronRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
const IconSize = {
  LARGE: 'lg',
  XLARGE: 'xl'
};
const Constant = {
  PlUS: '+',
  MINUS: '-'
};
const eventsCategory = {
  SPORT: 'sports',
  FAMILY: 'family',
  WORK: 'work',
  STUDY: 'study',
  RELAX: 'relax'
}
const events = [
  { id: 1, category: 'sports', description: 'Yoga in park', date: '2023-04-28T00:00:00+03:00' },
  { id: 2, category: 'family', description: 'Dinner with family', date: '2023-04-18T00:00:00+03:00' },
  { id: 3, category: 'work', description: 'Meeting with teem', date: '2023-04-13T00:00:00+03:00' },
  { id: 4, category: 'study', description: 'All day conference dddddd ddddd', date: '2023-04-11T00:00:00+03:00' },
  { id: 5, category: 'relax', description: 'Birthday party', date: '2023-04-07T00:00:00+03:00' },
  { id: 6, category: 'study', description: 'Marketing events', date: '2023-03-22T00:00:00+02:00' },
]
const filterEvents = (arr, date) => {
  const actualMonth = date.format('YYYYMM');
  return arr.filter((item) => moment(item.date).format('YYYYMM') === actualMonth)
}
function Calendar() {
  //moment.updateLocale('en', { week: { dow: 1 } });
  const [selectedDate, setSelectedDate] = useState(moment())
  const [date, setDate] = useState(moment());
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const startDay = selectedDate.clone().startOf('month').startOf('week');
  let day = startDay.clone();
  const filterEventsArr = filterEvents(events, selectedDate);
  const daysArray = [...new Array(42)].map((itemDay) => {
    const dayObj = {}
    const actualDay = day.format('DD');
    const findedEvent = filterEventsArr.find(item => moment(item.date).format('DD') === actualDay)
    if (findedEvent) (
      dayObj.event = findedEvent
    )
    dayObj.date = day.add(1, 'day').clone()
    return dayObj
  });
  const weekDaysArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const monthHandler = ( string) => {
    if (string === Constant.PlUS) {
      setSelectedDate((prev) => prev.clone().add(1, 'month'));
    }
    if (string === Constant.MINUS) {
      setSelectedDate((prev) => {
        const prevMonth = prev.clone().subtract(1, 'month').format('YYYYMMDD')
        return moment(prevMonth)
      });
    };
  }
  const monthMenuHandler=(event)=>{
    setSelectedDate(prev=>prev.clone().month(event.target.innerText))
  }
  const selectedDateHandler = (day) => {
    setSelectedDate(day)
  }
  const monthMenuTogle = () => {
    setIsMenuVisible(prev => !prev)
  }
  const monthArr = [...new Array(12)].map((item, index) => moment().month(index).format('MMMM'));
  const isToday = () => Boolean(date.format('YYYYMMDD') === selectedDate.format('YYYYMMDD'))
  
  return (
    <div className={styles.calendar}>
      <header className={styles.header}>
        <div className={styles.todayDate}>
          {isToday() && 'Today, '}
          {selectedDate.format('DD MM YYYY')}
        </div>
        <nav className={styles.navbar}>
          <div className={styles.yearBlock}>
            <button className={styles.yearBtn} onClick={() => monthHandler(Constant.MINUS)}>
              <FontAwesomeIcon
                icon={faChevronLeft}
              />
            </button>
            <div className={styles.yearTitle}>{selectedDate.format('MMMM,YYYY')}</div>
            <button className={styles.yearBtn} onClick={() => monthHandler(Constant.PlUS)}>
              <FontAwesomeIcon
                icon={faChevronRight}
              />
            </button>
          </div>
          <div className={styles.monthBlock}>
            <div className={styles.monthWrapper}>
              <div className={styles.monthTitle}>Month</div>
              <button className={styles.monthBtn} onClick={monthMenuTogle}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                />
              </button>
              {isMenuVisible && (
                <div className={styles.monthMenuWrapper}>
                  {monthArr.map((item, index) => (
                    <div key={index} 
                    className={styles.monthMenuItem}
                    onClick={monthMenuHandler}>{item} </div>))}
                </div>
              )}
              </div>
          </div>
          <button className={styles.eventBlock}>
            <div className={styles.eventIcon}>
              <FontAwesomeIcon
                icon={faPlus}
                size={IconSize.XLARGE}
                className={styles.faPlus}
              />
            </div>
            <div className={styles.eventTitle}>Add Event</div>
          </button>
        </nav>
      </header>
      <div className={styles.weekDays}>
        {weekDaysArr.map(((day, index) => (
          <div key={index}
            className={styles.weekDay}
          >{day}</div>
        )))}
      </div>
      <div className={styles.daysGrid}>{daysArray.map(({ date: day, event }) => (
        <div key={day.format('DDMMYYYY')}
          className={styles.dayItem}
          onClick={() => selectedDateHandler(day)} >
          <div className={clsx(
            day.format('MMD') === selectedDate.format('MMD') && styles.selectedDay,
            day.format('MMD') === date.format('MMD') && styles.dayNumberToday,
            styles.dayNumber)}>
            <div>{day.format('D')}</div>
          </div>
          <div className={clsx(styles.event,
            event?.category === eventsCategory.WORK && styles.blueEvent,
            event?.category === eventsCategory.FAMILY && styles.redEvent,
            event?.category === eventsCategory.SPORT && styles.purpleEvent,
            event?.category === eventsCategory.STUDY && styles.greenEvent,
            event?.category === eventsCategory.RELAX && styles.yellowEvent)}>
            <div>{event?.description}</div>
          </div>
        </div>
      ))
      }</div >
    </div >
  );
}

export default Calendar;  