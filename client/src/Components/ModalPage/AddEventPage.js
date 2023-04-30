import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import styles from './AddEventPage.module.scss'
function AddEventPage({ 
    onSubmitNewEventData,
    todayDate,
    selectedDate,
    newEventCategory,
    setNewEventCategory,
    newEventDescription,
    setNewEventDescription,
    newEventHahdler, addEventError, setIsModalVisible, eventsCategory }) {
    const [newEventDate, setNewEventDate] = useState(null);
    const [isVisibleCategoryMenu, setIsVisibleCategoryMenu] = useState(false);
    console.log(newEventDate)
    const categoryArr = [...Object.values(eventsCategory)]
    return (
        <div className={styles.modalWrapper}>
            <div className={styles.modalWindow}>

                <div className={styles.inputBlock}>
                    <div className={styles.title}>
                        Add Event
                    </div>
                    <div className={styles.inputs}>
                        <div className={styles.categoryBtnBlock} onClick={() => setIsVisibleCategoryMenu(prev => !prev)} >
                            {newEventCategory}
                            <input type='button'
                                value='Change event category'
                            />

                            {isVisibleCategoryMenu &&
                                <div className={styles.categoryMenu}>
                                    {categoryArr.map((item, index) => <div
                                        key={index}
                                        onClick={((event) => setNewEventCategory(event.target.innerText))}
                                        className={styles.categoryMenuItem}> {item} </div>)}
                                </div>
                            }
                        </div>
                        <div className={styles.inputDateWrapper}>
                            <div>
                                {/* <input type='text' value={selectedDate} /> */}
                                {selectedDate}
                            </div>
                            <div className={styles.inputDateBlock}>
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                    size={'xl'}
                                    className={styles.faCalendar} />
                                <input type='date' id='date' name='date'
                                value={todayDate}
                                    onChange={newEventHahdler} />
                            </div>
                        </div>
                        {addEventError && <div className={styles.message}>{addEventError}</div>}
                        <div>
                            <input
                            value={newEventDescription}
                                onChange={(e) => setNewEventDescription(e.target.value)}
                                placeholder='Description' 
                                />
                        </div>
                    </div>
                </div>
                <div className={styles.btnBlock}>
                    <button
                        className={styles.btnCancel}
                        onClick={() => setIsModalVisible(prev => !prev)}>Cancel</button>
                    <button 
                    className={styles.btnSave}
                     onClick={onSubmitNewEventData}
                     >Save</button>
                </div>
            </div>
        </div>
    )
}

export default AddEventPage