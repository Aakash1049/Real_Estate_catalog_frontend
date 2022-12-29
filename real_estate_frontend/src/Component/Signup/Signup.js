import React, { useEffect, useState } from 'react';
import "../Signup/Signup.css"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const SignUpHandler = (e) => {
        e.preventDefault()
        console.log(email, password, confirmPassword)
        fetch("/signUp", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email, password, confirmpassword: confirmPassword
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                    alert(data.message)
                    navigate("/")
                }
            })
    }

    return (
        <>
            <form>
                <div className='main'>
                    <section className='logo'>
                        <h1>Logo</h1>
                    </section>
                    <h2>Create  New Account</h2>

        <div className='email'>
            <input id="em" type="email"  placeholder='Mail Id' name='email'/>
            </div>  
            <div className='pwd'>
            <input  id="pw" type="password"  placeholder="password"  name='password'/>
            </div> 
            <div className=' con-pwd'>
            <input  id="con-pw" type="password"  placeholder=" Confirm password"  name=' confirm password'/>
            </div> 
          
            <div className='btn'>
                <button id="bt" onClick={SignUpHandler}>Sign Up</button>
            </div>
          </div>
          <Link to="/"><a href="Signin.js" >Sign in</a></Link> 
          </form>
        </>
    )
}