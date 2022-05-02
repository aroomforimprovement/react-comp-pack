import { useState , useEffect } from 'react';
import { Actions } from './types';


const reducer = (state, action) => {
    switch(action.type){
        case Actions.ADD_TOAST:{
            const toasts = [...state.toasts];
            toasts.push(action.data);
            return({...state, toasts: toasts});
        }
        case Actions.REMOVE_TOAST:{
            let toasts = [...state.toasts];
            toasts = toasts.filter((e) => {
                return e.id !== action.data.id;
            });
            return({...state, toasts: toasts});
        }
        default:
            return(state);
    }
}

const toastListeners = [];
let globalToastState = {toasts: []};

export const useStore = () => {
    const setState = useState(globalToastState)[1];
    useEffect(() => {
        toastListeners.push(setState);
        return() => {
            const index = toastListeners.indexOf(setState);
            if(index > -1){
                toastListeners.splice(index, 1);
            }
        }
    },[setState]);

    const dispatch = (action) => {
        globalToastState = reducer(globalToastState, action);
        for(const listener of toastListeners){
            listener(globalToastState);
        }
        return globalToastState;
    }
    return [globalToastState, dispatch];
}
