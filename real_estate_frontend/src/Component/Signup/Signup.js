import React from 'react';
import "../Signup/Signup.css"
import { Link } from "react-router-dom";

export default function Signup(){
    return (
        <>
        <form>
        <div className='main'>
      <section className='logo'>
        {/* <img  id="log" src={require("../../Images/logo.jpg")} alt='logo'/> */}
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
                <button id="bt">Sign Up</button>
            </div>
          </div>
          <Link to="/"><a href="Signin.js" >Sign in</a></Link> 
          </form>
        </>
    )
}