import React, { useContext, useState } from 'react'
import './form.css'
import { Todo } from '../context/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'

export const Form = (props) => {
  const { dispatch } = useContext(Todo)
  const [data, setData] = useState({
    imp: false,
    complete: false
  })
  return (
    <div className="popup" onClick={(e) => e.target.className === "popup" ? props.onClose(false) : ""}>
      <div className="popup-content">
        <div className='form'>
          <h1>{props.type} a Task</h1>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' placeholder='e.g My first task' value={data.id} maxLength={25} onChange={(e) => setData({ ...data, id: e.target.value })} />
          <label htmlFor="date">Date</label>
          <input type="date" id='date' onChange={(e) => setData({ ...data, date: e.target.value })} />
          <label htmlFor="desc">Description (Optional)</label>
          <input type="text" id='desc' onChange={(e) => setData({ ...data, desc: e.target.value })} />
          <div style={{ paddingTop: "10px" }}>
            <FontAwesomeIcon icon={data.imp ? solidStar : regStar} id="imp" onClick={(e) => setData({ ...data, imp: !data.imp })} />
            <label htmlFor="imp" style={{ paddingLeft: "6px" }} onClick={(e) => setData({ ...data, imp: !data.imp })}>Important</label>
          </div>
          <button onClick={() => {
            if (!data.id) {
              alert("Enter Title")
            }
            else if(!data.date)
              alert("Please enter date")
            else{
              dispatch({ type: "ADD", payload: data })
              props.onClose(false)
            }
          }}>Add a Task</button>
        </div>
      </div>
    </div>
  )
}
