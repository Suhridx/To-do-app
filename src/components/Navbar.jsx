import React from 'react'
import { CreateTask } from './CreateTask'

import "./navbar.css"

export const Navbar = () => {

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  return (
    <div className='flex-nav'>
        <input type='search'></input>
        <div> { formattedDate} </div>
        <CreateTask/>
    </div>
  )
}
