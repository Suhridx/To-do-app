import React from 'react'
import { Navbar } from './components/Navbar'
import Tasks from './Tasks'
import './App.css'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <>
      <div className="home-cont">
        <Sidebar />
        <div className='right-cont'>
          <Navbar />
          <Tasks />
        </div>
      </div>
      <footer>
      © Celebal Internship Project || Made by Suhrid Chandra Das || June 2023
      </footer>
    </>
  )
}

export default App