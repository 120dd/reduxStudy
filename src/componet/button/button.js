import React from 'react';
import styles from  './button.module.css';

const Button = ({ btnName, onClick }) => {
    return(
        <button className={styles.button} onClick={onClick} >{btnName}</button>
    )
};

export default Button;