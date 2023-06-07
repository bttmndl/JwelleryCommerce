import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
const SignUp = (handleCloseClick) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navLinkStyle = ({ isActive }) => {
      return {
        color: isActive ? "gold" : "white",
      };
    };
       return (
      <div className='signupContainer'>
        <div className='loginSubContainer'>
        <NavLink to={"/"} style={navLinkStyle}><button className='logButton'>Login</button></NavLink>
         <NavLink to={"/SignUp"} style={navLinkStyle}><button className='logButton'>Sign Up</button></NavLink>
        </div>
  
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>CREATE YOUR ACCOUNT </div>
        <div className='loginInputContainer'>
          {/* <label className='inputContent' htmlFor='email'>
            Email Id or Mobile Number
          </label> */}
           <input
            className='signname'
            type='text'
            placeholder='Enter Your Name'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            className='signname'
            type='text'
            placeholder='Email Id or Mobile Number'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          {/* <label className='inputContent' htmlFor='password'>
            Password
          </label> */}
          
          <input
            className='signname'
            type='password'
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='loginbtn'>
          Sign Up
        </button>
        <hr style={{ margin: '1rem 2rem ' }} />
        <div style={{ textAlign: 'center' }}>
          Already member? Login
        </div>
        <div className='closeIcon' onClick={handleCloseClick} style={{paddingTop:"2px"}}>X</div>
      </div>
  )
}

export default SignUp
