import React, { useState } from 'react';
import UserInput from './component/User/UserInput';
import List from './component/List/List';
import './App.css';

function App() {
  const [user, setUser] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUser((prevState) => {
      const updatedUser = [...prevState];
      updatedUser.unshift({ name: userName, age: userAge, id: Math.random().toString() });
      return updatedUser;
    });
  };

  console.log(user);

  return (
    <>
      <section>
        <UserInput addUser={addUserHandler} />
      </section>
      <section>
        <List userList={user} />
      </section>
    </>
  );
}

export default App;
