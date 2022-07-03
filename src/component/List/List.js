import React from 'react';
import styles from './List.module.css';

function List(props) {
    return (
        <div>
            <ul className={styles['user-list']}>
                {props.userList.map((user) => {
                    return <li className={styles['user-item']} key={user.id}>{user.name} ({user.age} years old)</li>;
                })}
            </ul>
        </div>
    );
}

export default List;