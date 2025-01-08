import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Banner/Banner'
import Rowpost from '../Rowpost/Rowpost'
import { action, comedy, document, horror, orginals, romance } from '../Urls'



function Home() {
  return (
    <div>
     
     <Navbar/>
     <Banner/>
     <Rowpost url={orginals} title='Netflix Orginals'/>
      <Rowpost url={action} title='Action Movies' isSmall/>
      <Rowpost url={horror} title='Horror Movies' isSmall/>
      <Rowpost url={comedy} title='Comedy Movies' isSmall/>
      <Rowpost url={romance} title='Romance Movies' isSmall/>
      <Rowpost url={document} title='Documentary' isSmall/>
      
    </div>
  )
}

export default Home
