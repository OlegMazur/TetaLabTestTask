import React, { useState } from 'react';
import Calendar from './Calendar/Calendar';
import styles from'./App.module.scss';
import LoginPage from './LoginPage/LoginPage';
//const {user}= {user: {name:'Oleg', email:'mazuroleg75@gmail.com' }};
const user=false;
function App() {
  const [isAuth,setIsAuth]=useState(false)
  
  return (
    <div className={styles.App}>
      <main>
        {isAuth
        ?<Calendar />
        :<LoginPage user={user}/>}
       
      </main>
    </div>
  );
}

export default App;