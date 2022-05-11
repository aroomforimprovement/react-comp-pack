
import React from "react";
import { Button, ToastRack, useToastRack } from './lib';

const App = () => {
    const toast = useToastRack();
    const handleAdd = (pos) => {
        const id = toast.fire({
            message: `Hi, I am ${pos}`,
            position: pos ? pos : 'top-left'
        });
        console.log(id);
    }

    const handleRemove = () => {
        toast.dismiss(toast?.toasts[0]?.id);
        console.dir(toast?.toasts);
    }

    return(
        <div>
            <Button btnText={'Top right'} onClick={() => handleAdd('top-right')}/>
            <Button btnText={'Bottom left'} onClick={() => handleAdd('bottom-left')}/>
            <Button btnText={'Remove toast'} type={'alter'} onClick={handleRemove}/>
            <ToastRack />
        </div>
    );
    
}

export default App;