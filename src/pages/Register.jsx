import React from 'react'
import Add from "../image/image.png"

const Register = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <div className="formHeader">
          <div className="logo">C.H.A.T</div>
          <div className="title"><h2>Register</h2></div>
          <form action="">
            <input type="text" name="" id="" placeholder='Enter display name' />
            <input type="email" name="" id="" placeholder='Enter your email' />
            <input type="password" name="" id="" placeholder='Enter your password' />
            <input style={{display:"none"}} type="file" name="" id="avatarUpload"  />
            <div>
            <label htmlFor="avatarUpload">
              <img src={Add}alt="" />
              <span>Add an Avatar</span>
            </label>
            </div>

           
            <button>Sign Up</button>
          </form>
          <div className="formFooter">
            <p>You already have an account? Login</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register