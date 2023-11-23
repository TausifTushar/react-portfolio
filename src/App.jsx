// import { useState } from 'react'

import './App.css'
import Navbar from './Components/Navbar/Navbar'
// import { Outlet } from 'react-router-dom'
import Cover from './Components/Cover/Cover'
import AboutMe from './Components/AboutMe/AboutMe'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'
import ContactUs from './ContactUs/ContactUs'
import { Outlet } from 'react-router-dom'

function App() {


  return (
    <>
   
      <Navbar></Navbar>
      {/* <Outlet></Outlet> */}
      <Cover></Cover>
      <AboutMe></AboutMe>
      <Services></Services>
      <Projects></Projects>
      <ContactUs></ContactUs>
    </>
  )
}

export default App
