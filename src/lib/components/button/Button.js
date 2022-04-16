import React from 'react';
import './button.css';

export const Button = ({btnText}) => {
    return (
        <button 
            className='butt shade' 
            onClick={() => {console.log("It worked!")}}
        >
            {btnText}
        </button>
    )
}
