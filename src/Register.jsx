import React,{ useState } from 'react';

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
        <div className="auth-form-container">
            <form onSubmit={handelSubmit}>
                <label htmlFor="name">full Name</label>
                <input value={name} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Full Name" id="name" name="name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={password} onChange={(e)=> setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch("login")} >Already have an accout? Login here</button>
            </div>
        </>
    )
}