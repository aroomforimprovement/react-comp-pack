
import React from "react";
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

    return(
        <div>
            <Button btnText={'Demo button'}/>
            <Button btnText={'Alternate button'} type={'alter'}/>
            <ToastRack toasts={dummyToasts} />
        </div>
    );
    
}

export default App;