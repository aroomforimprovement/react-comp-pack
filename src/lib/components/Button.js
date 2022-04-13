import React from 'react';

export const Button = ({btnText}) => {
    return(
        <button onClick={() => {console.log("It worked!")}}>
            {btnText}
        </button>
    )
}
