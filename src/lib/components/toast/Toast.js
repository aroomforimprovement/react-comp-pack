import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from '../../core/store';
import { Actions } from '../../core/types';
import './toast.scss';

const ToastSlice = ({t}) => {
    
    return(
        <div className={`toast-slice `}>
            {t.message}
        </div>
    )
}

export const ToastRack = () => {
    
    const [toastState, toastDispatch] = useStore();

    const toastComps = [...toastState.toasts].map((t, i) => 
        <ToastSlice key={i} t={t}/>).reverse();

    return(
        <div className={`toast-rack`}>
            {toastComps}
        </div>
    )
}

export const useToastRack = () => {
    
    const [toastState, toastDispatch] = useStore();

    const fire = (params) => {
        params = params ? params : {};
        const toast = {
            id: params.toastId ? params.toastId : uuidv4(),
            message: params.message ? params.message : 'Things are happening',
        }
        toastDispatch({
            type: Actions.ADD_TOAST,
            data: toast
        });
        return toast.id;
    }

    const dismiss = (id) => {
        toastDispatch({
            type: Actions.REMOVE_TOAST, 
            data: {id: id}
        });
    }

    return {
        "fire": (params) => fire(params),
        "dismiss": (id) => dismiss(id),
        "toasts": {...toastState.toasts}
    }

}

