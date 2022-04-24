import React from 'react';
import './button.scss';

export const Button = ({btnText, onClick, type}) => {
    return (
        <button 
            className={`butt shade ${type}`} 
            onClick={onClick}
        >
            {btnText}
        </button>
    )
}
