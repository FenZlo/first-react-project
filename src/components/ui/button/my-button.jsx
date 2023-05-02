import React from 'react';
import classes from './my-button.module.css'

const MyButton = ({children, type, ...props}) => {
    return (
        <button {...props} className={type === 'icon' ? classes.iconBtn : classes.myBtn}>
            {children}
            
        </button>
    )
}

export default MyButton;