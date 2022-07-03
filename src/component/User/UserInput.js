import React, { useState } from 'react';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import styles from './UserInput.module.css';

function UserInput(props) {
    const [userName, setUserName] = useState('');
    const [userPass, setUserPass] = useState('');
    const [error, setError] = useState();

    const onChangeNameHandler = (e) => {
        setUserName(e.target.value);
    };

    const onChangePassHandler = (e) => {
        setUserPass(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (userName.trim().length === 0 || userPass.trim().length === 0) {
            setError({
                title: "Error Message (undefined username OR age)",
                message: "Please type in username and password."
            });
            return;
        }

        if (+userPass <= 0) {
            setError({
                title: "Error Message (Age)",
                message: "Please type more than 1 years of age."
            });
            return;
        }
        props.addUser(userName, userPass);
        setUserName('');
        setUserPass('');
    };

    const errorHandler = () => {
        setError(null);
    };

    return (
        <>
            {error && <Modal errorTitle={error.title} errorMessage={error.message} onError={errorHandler} />}
            <form className={`${styles['form-container']}`} onSubmit={onSubmitHandler}>
                <div>
                    <label>Username</label>
                    <input value={userName} type="text" onChange={onChangeNameHandler} />
                    <label>Age(Years)</label>
                    <input value={userPass} type="number" max='120' step='1' onChange={onChangePassHandler} />
                </div>
                <Button type='submit'>Add new user!</Button>
            </form>
        </>
    );
}

export default UserInput;