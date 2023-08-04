import React, { useContext, useState } from 'react'
import SingleTask from './singletask/SingleTask'
import { Todo } from './context/TodoContext'

const Tasks = () => {
  const { state } = useContext(Todo)
  const [sortBy, setSortBy] = useState()
  if (sortBy === "date")
    state.sort((a, b) => new Date(a.date) - new Date(b.date));
  else if (sortBy === "completed")
    state.sort((a, b) => {
      if (a.complete === b.complete) {
        return 0
      } else if (a.complete) {
        return -1
      } else {
        return 1
      }
    })
  else if(sortBy==="incomplete")
    state.sort((a, b) => {
      if (a.complete === b.complete) {
        return 0
      } else if (a.complete) {
        return 1
      } else {
        return -1
      }
    })
    else if(sortBy==="important")
    state.sort((a, b) => {
      if (a.imp === b.imp) {
        return 0
      } else if (a.imp) {
        return -1
      } else {
        return 1
      }
    })
  
  return (
    <div className='container'>
      <p>All Tasks ({state.length} tasks)
        <label htmlFor='sort-by'>Sort By</label>
        <select id="sort-by" onChange={(e) => setSortBy(e.target.value)}>
          <option value="completed">Completed First</option>
          <option value="important">Important First</option>
          <option value="incomplete">Incomplete First</option>
          <option value="date">Date</option>
        </select>
      </p>
      {state.map((item, index) => {

        return <SingleTask data={item} key={index} />
      })}

    </div>
  )
}

export default Tasks