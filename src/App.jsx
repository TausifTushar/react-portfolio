import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Cover from './Components/Cover/Cover'
import AboutMe from './Components/AboutMe/AboutMe'

function App() {


  return (
    <>
   
      <Navbar></Navbar>
      <Cover></Cover>
      <AboutMe></AboutMe>
    </>
  )
}

export default App
