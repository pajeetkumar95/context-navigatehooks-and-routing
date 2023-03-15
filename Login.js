import React from 'react'
import {useState} from 'react'

function Login() {

  const [username,setUserName] = useState('')
  const [userpassword,setUserPassword]  = useState('')

  function handleclick(e){
    e.preventDefault()
    const datastored = JSON.parse(localStorage.getItem('userdetails'))

  }

  return (

    <div className='inputholder'>
      <form onSubmit={handleclick}>
        <input type='text' placeholder='Enter Your Name' value={username} onChange={(e)=>{setUserName(e.target.value)}}>
        </input><br></br>
        <input type='password' placeholder='Enter Your Password' value={userpassword} onChange={(e)=>{setUserPassword(e.target.value)}}>
        </input><br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login