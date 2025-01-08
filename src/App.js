import React from 'react'
import Home from './Pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Movies from './Pages/Movies'
import New from './Pages/New'
import MyList from './Pages/MyList'
import Languages from './Pages/Languages'
import Navbar from './Components/Navbar'
import Login from './Pages/Login'

import ProtectedRoutes from './Components/ProtectedRoutes'





function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/new&popular' element={<New/>}/>
      <Route path='/mylistmovies' element={<MyList/>}/>
      <Route path='/browsebylanguages' element={<Languages/>}/>
      
      </Route>

      
      
    </Routes>
     
     
      

    </BrowserRouter>
  )
}

export default App

