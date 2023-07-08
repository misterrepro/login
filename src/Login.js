import React, { useEffect, useState } from 'react';
import {auth, provider} from './config';
import {signInWithPopup} from "firebase/auth";
import Home from './Home'


const Login = () => {
    const [value, setValue] = useState('');
    const handleClick = (e) => {
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }

    useEffect(() => {
        setValue(localStorage.getItem("email"))
    }, [])


    return (
        <div>
            <button onClick={handleClick}>SignIn With Google</button>
        </div>
    );
}
 
export default Login;