import React from 'react';
import styles from './UserInput.module.css';

function UserInput() {
    return (
        <form className={`${styles['form-container']}`}>
            <div>
                <label>Username</label>
                <input type="text" />
                <label>Age(Years)</label>
                <input type="number" min='0' max='120' step='1' />
            </div>
            <button type='submit'></button>
        </form>
    );
}

export default UserInput;