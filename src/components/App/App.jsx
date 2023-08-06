import { useState } from 'react'
import './App.css'
import LandingPage from '../LandingPage/LandingPage'
import { Route, BrowserRouter, Routes,} from 'react-router-dom'
import HomePage from '../HomePage/HomePage'

function App () {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/home" element = {<HomePage/>}/>
      <Route path = "/" element = {<LandingPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
