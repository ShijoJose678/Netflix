import React from 'react'
import './Login.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUsers } from '../Slices/UserSlice'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

function eventHandle(e){
   e.preventDefault()
    dispatch(setUsers({
        username:'shijoj1207@gmail.com',
        password:'gtyyytw554@'
    }))
    navigate('/')
}


  return (
    <div className="top">
    <div className='register'>
      <h1>Welcome back!! <br />
      Joining Netflix is easy.</h1>
      <p>Enter Your Username and Password to login</p>
      <form >
        <label >Username</label>
        <input type="email" />
        <label >Password</label>
        <input type="password" />
        <button onClick={eventHandle} className='log'>Log In</button>
      </form>
    </div>
    </div>
  )
}

export default Login
