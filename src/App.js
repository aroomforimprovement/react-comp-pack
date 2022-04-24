
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
        const ts = [...toasts];
        ts.push({
            id: toasts.length, 
            message: `This id system is unsustainable: ${toasts.length}`
        });
        setToasts(ts);
    }

    const handleRemove = () => {
        let ts = [...toasts];
        ts.pop();
        setToasts(ts);
        console.log(toasts);
    }

    return(
        <div>
            <Button btnText={'Add toast'} onClick={handleAdd}/>
            <Button btnText={'Remove toast'} type={'alter'} onClick={handleRemove}/>
            <ToastRack toasts={toasts} />
        </div>
    );
    
}

export default App;