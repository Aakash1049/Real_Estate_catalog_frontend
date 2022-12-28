import React, { useState } from "react";
import {  Link } from "react-router-dom";
import "../Signin/Signin.css"



export default function Signin()
{

  const [Email,setEmail] = useState("")
  const [Pasword,SetPassword] = useState("")
    return (
        <>
        <form>
        <div className='main'>
      <section className='logo'>
        {/* <img  id="log" src={require("../../Images/logo.jpg")} alt='logo'/> */}
       <h1>Logo</h1>
        </section> 
        <h2>Enter your credentials to access your account</h2> 

        <div className='email'>
            <input id="em" type="email"  placeholder='User Id' name='email' onChange={(e)=>(e.target.value)}/>
            </div>  
            <div className='pwd'>
            <input  id="pw" type="password"  placeholder="password"  name='password' onChange={(e)=>(e.target.value)}/>
            </div> 
          
            <div className='btn'>
               <button id="bt">Sign in</button>
            </div>
            <Link to="/Signup" ><a href="Signup.js" >Sign Up</a></Link>
          </div>
         <h3>Don’t have an account?<Link to="/Signup" ><a href="Signup.js" >Sign Up</a></Link></h3>
         </form>
        </>
    )
}