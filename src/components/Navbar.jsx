import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar' >
        <span className='logo' >C.H.A.T</span>
        <div className="user">
            <img src="https://avatars.githubusercontent.com/u/84324090?v=4" alt="" />
            <span>Sahil</span>
            <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar