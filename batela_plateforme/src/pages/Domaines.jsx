import React from 'react'
import NavBar from './NavBar';
import HeroDomains from './HeroDomains';
import AllDomains from './AllDomains';
import Footer from './Footer';


export default function Domaines() {
  return (
    <div className=' w-full'>
      <NavBar/>
      <HeroDomains/>
      <AllDomains/>
      <Footer/>
      
    </div>
  )
}
