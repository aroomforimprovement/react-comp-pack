
import React, { useState } from "react";
import { Button, ToastRack } from './lib';

const dummyToasts = [
    {
        id: 0,
        message: "The first toast"
    },
    {
        id: 1,
        message: "The second toast"
    },
    {
        id: 2,
        message: "The third toast"
    }
];

const App = () => {

    const [toasts, setToasts] = useState([]);

    const handleAdd = () => {
        setToasts([...toasts], {
            id: toasts.length, 
            message: `This id system is unsustainable: ${toasts.length}`});
    }

    const handleRemove = () => {
        const ts = [...toasts];
        ts.pop(0);
    }

    return(
        <div>
            <Button btnText={'Demo button'} onClick={handleAdd}/>
            <Button btnText={'Alternate button'} type={'alter'} onClick={handleRemove}/>
            <ToastRack toasts={toasts} />
        </div>
    );
    
}

export default App;