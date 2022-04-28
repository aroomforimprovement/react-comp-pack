
import React from "react";
import { Button, ToastRack, useToastRack } from './lib';

const App = () => {
    const toast = useToastRack();
    const handleAdd = () => {
        const id = toast.fire({message: "Hi. I am toast"});
        console.log(id);
    }

    const handleRemove = () => {
        toast.dismiss(toast?.toasts[0]?.id);
        console.dir(toast?.toasts);
    }

    return(
        <div>
            <Button btnText={'Add toast'} onClick={handleAdd}/>
            <Button btnText={'Remove toast'} type={'alter'} onClick={handleRemove}/>
            <ToastRack />
        </div>
    );
    
}

export default App;