import React, { useContext } from 'react'
import { CreateTask } from './CreateTask'
import './sidebar.css'
import { LinearProgress } from '@mui/material'
import { Todo } from '../context/TodoContext'

const Sidebar = () => {
  const { state } = useContext(Todo)
  const length = state.length
  const completed = state.filter((item) => item.complete).length
  const impcomp= state.filter((item) => item.imp && item.complete).length
  const important = state.filter((item) => item.imp).length
  return (
    <div className='sidebar'>
      <h2 style={{ fontFamily: "'Rubik', sans-serif", fontSize: "20x", paddingBottom: "30px" }}>To Do List</h2>
      <div>
        <span>All Tasks </span>
        <span>{completed}/{state.length}</span>
      </div>
      <LinearProgress
        variant='determinate'
        value={(completed / length) * 100}
        color='inherit'
        style={{
          width: "90%",
          height: "6px",
          borderRadius: "5px",
          marginBottom: "50px"
        }} />
      <div>
        <span>Important Tasks </span>
        <span>{impcomp}/{important}</span>
      </div>
      <LinearProgress
        variant='determinate'
        value={(impcomp / important) * 100}
        color='inherit'
        style={{
          width: "90%",
          height: "6px",
          borderRadius: "5px",
          marginBottom: "50px"
        }} />
      <CreateTask />
    </div>
  )
}

export default Sidebar