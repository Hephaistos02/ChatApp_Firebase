import React from 'react'

const Search = () => {
  return (
    <div className='serach' >
         <div  style={{padding: '10px'}} className="searchForm">
            <input style={{backgroundColor:"transparent",border:'none',color:'white',outline:'none' }} type="text" placeholder='find a user' />
         </div>
         <div className="userChat">
            <img src="https://avatars.githubusercontent.com/u/84324090?v=4" alt="" />
         
         <div className="userChatInfo">
            <span>Sahil</span>
         </div>
         </div>
    </div>
  )
}

export default Search