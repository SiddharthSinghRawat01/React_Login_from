import React,{ useState } from 'react';
import './Register.css'

export const Register = (props) => {

    const [email,setEmail] = useState('')
    const [password,setPass] = useState('')
    const [name,setName] = useState('')

    const handelSubmit = (e) =>{ // it is handling submit, now our whole page is not refreshing only the button part
        e.preventDefault();
        console.log(email)
    }

    return (
        <>
        <div id="login-form-wrap">
        <h2>Register</h2>
            <form onSubmit={handelSubmit} id="login-form">
                <p>
                <input value={name} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Full Name" id="name" name="name" /><i class="validation"></i>    
                </p>
                <p>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" /><i class="validation"></i>
                </p>
                <p>
                <input value={password} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" /><i class="validation"><span></span><span></span></i>
                </p>
                <input type="submit" id='signup' value="Signup"></input>
            </form>
            <div id="create-account-wrap">
                <button id="click-button" onClick={() => props.onFormSwitch("login")} ><p>Already have an accout? Login here</p></button>
            </div>
        </div>
        </>
    )
}