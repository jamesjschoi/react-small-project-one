import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from './UserInput.module.css';

function UserInput(props) {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');

    const onChangeNameHandler = (e) => {
        setUserName(e.target.value);
    };

    const onChangePassHandler = (e) => {
        setUserPass(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        props.addUser(userName, userPass);
    };

    return (
        <form className={`${styles['form-container']}`} onSubmit={onSubmitHandler}>
            <div>
                <label>Username</label>
                <input type="text" onChange={onChangeNameHandler} />
                <label>Age(Years)</label>
                <input type="number" min='0' max='120' step='1' onChange={onChangePassHandler} />
            </div>
            <Button type='submit'>Add new user!</Button>
        </form>
    );
}

export default UserInput;