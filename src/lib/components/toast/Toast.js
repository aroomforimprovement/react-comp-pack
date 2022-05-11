import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from '../../core/store';
import { Actions, POSITIONS } from '../../core/types';
import './toast.scss';

const ToastSlice = ({t}) => {
    
    return(
        <div className={`toast-slice `}>
            {t.message}
        </div>
    )
}

export const ToastSlots = ({toasts}) => {
    const [pos, setPos] = useState();

    useEffect(() => {
        setPos(toasts && toasts[0] && toasts[0].position 
            ? toasts[0].position  : 'top-center');
    },[toasts])

    const toastComps = toasts?.reverse().map((t) => {
        return(
            <ToastSlice
                key={t.id}
                t={t} />
        )
    })

    return <div className={`toast-slots ${pos}`}>{toastComps}</div>
}

export const ToastRack = () => {
    
    const [toastState, toastDispatch] = useStore();

    const positions = POSITIONS.map((pos, i) => {
        return [...toastState.toasts].filter((toast) => {
            if(toast.position === pos){
                return true;
            }
        })
    })

    const slots = positions.map((pos, i) => {
        return(
            <ToastSlots
                key={i}
                toasts={pos} />
        )
    })

    return(
        <div className={`toast-rack`}>
            {slots ? slots : 'Nothing'}
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
            position: params.position ? params.position : 'top-center'
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

