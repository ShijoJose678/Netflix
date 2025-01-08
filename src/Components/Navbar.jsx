import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../Slices/UserSlice'



function Navbar() {
  const user = useSelector((state)=>state.userInfo.users)
  const dispatch = useDispatch()
 
function logout(){
  dispatch(removeUser())
}
  return (
    <div className='navbar'>
      
        <div>
        <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" />
        </div>
        <div className='list'>
          <ul className='ullist'>
          
          {user && <>
            <Link className='lilist' to='/'>Home </Link>
            <Link className='lilist' to='/movies'>Movies</Link>
            <Link className='lilist' to='/new&popular'>New & Popular </Link>
            <Link className='lilist' to='/mylistmovies'>My List </Link>
            <Link className='lilist' to='/browsebylanguages'>Browse By Language </Link>
            </>}
         
          </ul>
        </div>
        <div>
        <ul className="endullist">
           
            {!user && (
              <Link className='lilist' to='/login'></Link>
            )}
            
           
           {user && (
             <li onClick={logout}  className='lilist' to='/logout'>LogOut</li>
           )}
            
          
          </ul>
        </div>
        <div>
        <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="avatar img" />
        </div>
        
     
        
      
    </div>
  )
}

export default Navbar
