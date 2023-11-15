import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import viewLoading from './PAGES/viewLoading'
import homePage from './MyComponents/homePage'
import jezen from './PAGES/jezen'
import benawad from './PAGES/benawad'
import django from './PAGES/django'
import viewCommit from './PAGES/viewCommit'




function App() {

  return (
    
      <div>

       <Routes>
        <Route path='/' element={homePage()}/>
        <Route path='/viewLoading' element={viewLoading()}/>
        <Route path='/django' element={django()}/>
        <Route path='/jezen' element={jezen()}/>
        <Route path='/benawad' element={benawad()}/>
        <Route path="/viewCommit" element={viewCommit()}/>
       </Routes> 
       
      </div>
    
  )
}

export default App
