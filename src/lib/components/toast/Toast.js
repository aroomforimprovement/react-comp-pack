import React from 'react';
import './toast.scss';

const ToastSlice = ({t}) => {
    
    return(
        <div className={`toast-slice `}>
            {t.message}
        </div>
    )
}

export const ToastRack = ({toasts}) => {

    const toastComps = toasts.map((t, i) => 
        <ToastSlice key={i} t={t}/>).reverse();

    return(
        <div className={`toast-rack`}>
            {toastComps}
        </div>
    )
}