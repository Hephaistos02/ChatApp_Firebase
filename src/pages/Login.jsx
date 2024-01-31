import React from 'react'
import Add from "../image/image.png"

const Login = () => {
  return (
    <div className='formContainer'>
      <div className="formWrapper">
        <div className="formHeader">
          <div className="logo">C.H.A.T</div>
          <div className="title"><h2>Login</h2></div>
          <form action="">
            
            <input type="email" name="" id="" placeholder='Enter your email' />
            <input type="password" name="" id="" placeholder='Enter your password' />

            
      
          

           
            <button>Login</button>
          </form>
          <div className="formFooter">
            <p>You don't have an account? Register</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login