import React, { useContext } from 'react'
import SingleTask from './singletask/SingleTask'
import { Todo } from './context/TodoContext'

const Tasks = () => {
  const {state}= useContext(Todo)
  return (
    <div className='container'>
      <p>All Tasks ({state.length} tasks)</p>
      {state.map((item,index)=>{

        return <SingleTask data={item} key={index}/>
      })}     
      
    </div>
  )
}

export default Tasks