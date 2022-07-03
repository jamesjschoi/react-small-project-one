import React, { useState } from 'react';
import UserInput from './component/User/UserInput';
import List from './component/List/List';
import styles from './App.module.css';

function App() {
  const [user, setUser] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUser((prevState) => {
      const updatedUser = [...prevState];
      updatedUser.unshift({ name: userName, age: userAge, id: Math.random().toString() });
      return updatedUser;
    });
  };

  return (
    <>
      <section className={styles.section}>
        <UserInput addUser={addUserHandler} />
      </section>
      <section>
        <List userList={user} />
      </section>
    </>
  );
}

export default App;
