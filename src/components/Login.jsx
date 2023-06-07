import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navLinkStyle = ({ isActive }) => {
    return {
      color: isActive ? "gold" : "white",
    };
  };
     return (
    <div className='loginMainContainer'>
      <div className='loginSubContainer'>
        <NavLink to={"/"} style={navLinkStyle}><button className='logButton'>Login</button></NavLink>
         <NavLink to={"/SignUp"} style={navLinkStyle}><button className='logButton'>Sign Up</button></NavLink>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>LOGIN TO YOUR ACCOUNT </div>
      <div className='loginInputContainer'>
        {/* <label className='inputContent' htmlFor='email'>
          Email Id or Mobile Number
        </label> */}
        <input
          className='name'
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
          className='name'
          type='password'
          placeholder='Enter Your Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='loginbtn'>
        LOGIN
      </button>
      <hr style={{ margin: '1rem 2rem ' }} />
      <div style={{ textAlign: 'center' }}>
        Not a member? Sign Up Forgot Password?
      </div>
      <div className='closeIcon'  style={{paddingTop:"2px"}}>X</div>
    </div>
  );
}

export default Login;
