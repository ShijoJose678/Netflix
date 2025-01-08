import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoutes() {
 const user = useSelector((state)=>state.userInfo.users)

 if(!user){
    return <Navigate to='/login'/>
 }



  return <Outlet/>
}

export default ProtectedRoutes
