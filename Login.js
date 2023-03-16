import { Password } from '@mui/icons-material'
import React from 'react'
import {useState} from 'react'

function Login() {

  const [username,setUserName] = useState('')
  const [userpassword,setUserPassword]  = useState('')

  function handleclick(e){
    e.preventDefault()
    const datastored = JSON.parse(localStorage.getItem('userdetails'))
    console.log(datastored)
    if(datastored.userdetails ===username && datastored.userdetails === userpassword)
    {alert('user Sucessfully Add')}
    else{
      alert('error')
    }

  }

  return (

    <div className='inputholder'>
      <form onSubmit={handleclick}>
        <input type='name' placeholder='Enter Your Name' value={username} onChange={(e)=>{setUserName(e.target.value)}}>
        </input><br></br>
        <input type='password' placeholder='Enter Your Password' value={userpassword} onChange={(e)=>{setUserPassword(e.target.value)}}>
        </input><br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login