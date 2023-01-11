import React, { useState } from "react"
import './Login.css'

export const Login = (props) => {

    const [email,setEmail] = useState('')
    const [password,setPass] = useState('')

    const handelSubmit = (e) =>{ // it his handling submit now our whole page is not refreshing only the button part
        e.preventDefault();
        console.log(email)
    }

    return (
        <>
        <div id="login-form-wrap">
            <h2>LogIn</h2>
            <form onSubmit={handelSubmit} id="login-form">
                <p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /><i class="validation"></i>
                </p>
                <p>
                <input value={password} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" /><i class="validation"><span></span><span></span></i>
                </p>
                <p>
                <input type="submit" id="login" value="Login"></input>
                </p>
            </form>
            <div id="create-account-wrap">
                <button id="click-button" onClick={() => props.onFormSwitch("register")}><p>Don't have an accout? Register</p></button>
            </div>
        </div>
        </>
    )
}