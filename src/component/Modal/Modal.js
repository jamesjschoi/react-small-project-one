import React from 'react';
import styles from './Modal.module.css';
import Button from '../Button/Button';

function Modal(props) {
    return (
        <div className={styles.overlay} onClick={props.onError}>
            <div className={styles.modal}>
                <div className={styles['modal-title']}>{props.errorTitle}</div>
                <div className={styles['modal-message']}>{props.errorMessage}</div>
                <div className={styles['modal-button']}>
                    <Button onClick={props.onError}>Okay</Button>
                </div>
            </div>
        </div>
    );
}

export default Modal;