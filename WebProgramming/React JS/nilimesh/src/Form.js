import React from 'react'
import Login from './Component/Login';
import Ragistration from './Component/Ragistration';
const Form = () => {
    const isloggin=true;
    if(isloggin){
        return <Login />
    }
    else{
        return <Ragistration />
    }
}

export default Form
