import React, { useState } from 'react';

export const Button = ({btnText}) => {
    const [state, setState] = useState(0);
    const butt = {
        padding: '12px',
        backgroundColor: 'rgb(240, 240, 240)',
        border: '1px solid rgb(180, 180, 180)',
        color: 'rgb(80, 80, 80)',
        borderRadius: '0.5vh',
        cursor: 'pointer',
    }

    const buttHover = {
        transform: 'scale(1.02)'
    }

    const buttActive = {
        transform: 'scale(1)'
    }

    const shade = {
        boxShadow: '1px 1px 3px',
    }
    const shadeHover = {
        boxShadow: '2px 2px 5px'
    }
    const shadeActive = {
        boxShadow: '0px 0px'
    }
    
    return(
        <button
            onMouseEnter={() => setState(1)}
            onMouseLeave={() => setState(0)}
            onMouseDown={() => setState(2)}
            style={{...butt, ...(shade), 
                ...(state === 1) ? buttHover : (state === 2) ? buttActive : null,
                ...(state === 1) ? shadeHover : (state === 2) ? shadeActive : null}} 
            onClick={() => {console.log("It worked!")}}>
                {btnText}
        </button>
    )

}
