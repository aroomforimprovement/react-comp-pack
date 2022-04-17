import React from 'react';
import './button.scss';

export const Button = ({btnText, type}) => {
    return (
        <button 
            className={`butt shade ${type}`} 
            onClick={() => {
                console.log(`It worked! (${
                    type 
                    ? type 
                    : 'standard'})`
                )}}
        >
            {btnText}
        </button>
    )
}
