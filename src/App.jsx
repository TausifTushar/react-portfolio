import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Cover from './Components/Cover/Cover'
import AboutMe from './Components/AboutMe/AboutMe'
import Services from './Components/Services/Services'
import Projects from './Components/Projects/Projects'

function App() {


  return (
    <>
   
      <Navbar></Navbar>
      <Cover></Cover>
      <AboutMe></AboutMe>
      <Services></Services>
      <Projects></Projects>
    </>
  )
}

export default App
