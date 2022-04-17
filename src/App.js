
import React from "react";
import { MyButton } from './lib';

const App = () => {

    return(
        <div>
            <MyButton btnText={'Demo button'}/>
            <MyButton btnText={'Alternate button'} type={'alter'}/>
        </div>
    );
    
}

export default App;