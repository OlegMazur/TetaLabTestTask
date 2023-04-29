import React from 'react';
import Calendar from './Calendar/Calendar';
import styles from'./App.module.scss';

function App() {
  // const getScreen = path => {
  //   switch (path) {
  //     case AppRoute.LOGIN: {
  //       return <LoginForm onLogin={handleLogin} />;
  //     }
  //     case AppRoute.REGISTRATION: {
  //       return <RegistrationForm onRegister={handleRegister} />;
  //     }
  //     default: {
  //       return null;
  //     }
  //   }
  // };
  return (
    <div className={styles.App}>
      <main>
        <Calendar />
      </main>
    </div>
  );
}

export default App;