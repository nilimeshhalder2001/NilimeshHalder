import React from 'react'
import './style.css';

const Login = () => {
  return (
    <div>
      <p className="para">Login Page</p>
      <form>
      <label>UserName :</label>
      <input type='email' size="20"></input>
      <label>Password :</label>
      <input type='Password' size="20"></input>
      <button className='btn'>Login</button>
      </form>
    </div>
  )
}

export default Login
