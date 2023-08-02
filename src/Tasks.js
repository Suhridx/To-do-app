import React, { useContext } from 'react'
import SingleTask from './singletask/SingleTask'
import { Todo } from './context/TodoContext'

const Tasks = () => {
  const { state } = useContext(Todo)
  return (
    <div className='container'>
      <p>All Tasks ({state.length} tasks)
      <label htmlFor='sort-by'>Sort By</label>
        <select id="sort-by">
          <option value="volvo">Completed</option>
          <option value="saab">Important</option>
          <option value="fiat">Date</option>
        </select>
      </p>
      {state.map((item, index) => {

        return <SingleTask data={item} key={index} />
      })}

    </div>
  )
}

export default Tasks