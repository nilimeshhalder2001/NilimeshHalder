import React from 'react'
import './style.css';
const Ragistration = () => {
  return (
    <div>
        <div>
      <p className="para">Regrstration Page</p>
      <form>
      <label>Name :</label>
      <input type='text' size="20"></input>
      <label>Mobile :</label>
      <input type='number' size="20"></input>
      <label>Email :</label>
      <input type='email' size="20" required></input>
      <button className='btn'>Register</button>
      </form>
    </div>
    </div>
  )
}

export default Ragistration;
