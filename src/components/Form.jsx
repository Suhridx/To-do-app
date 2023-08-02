import React, { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { v4 as uuid } from 'uuid';
import './form.css'
import { Todo } from '../context/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as regStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'

export const Form = (props) => {
  const uid=uuid()
  console.log(uid)
  console.log('ON FORM')
  console.log(props.value)
  
  const { dispatch } = useContext(Todo)
  const [data, setData] = useState(()=>{
    if(props.value)
    return {...props.value}
    else
    return {id:uid,title:'',date:'',desc:'',imp:false,complete:false}
  })

  

  console.log(data)
  if(!props.show)
   return null

  return createPortal(
    <div className="popup" onClick={(e) => e.target.className === "popup" ? props.onClose(false) : ""}>
      <div className="popup-content">
        <div className='form'>
          <h1>{props.type} a Task</h1>
          <label htmlFor="title">Title</label>
          <input type="text" id='title' placeholder='e.g My first task' value={data.title} maxLength={25} onChange={(e) => setData({ ...data, title: e.target.value })} />
          <label htmlFor="date">Date</label>
          <input type="date" id='date' value={data.date} onChange={(e) => setData({ ...data, date: e.target.value })} />
          <label htmlFor="desc">Description (Optional)</label>
          <input type="text" id='desc' onChange={(e) => setData({ ...data, desc: e.target.value })} />
          <div style={{ paddingTop: "10px" }}>
            <FontAwesomeIcon icon={data.imp ? solidStar : regStar} id="imp" onClick={(e) => setData({ ...data, imp: !data.imp })} />
            <label htmlFor="imp" style={{ paddingLeft: "6px" }} onClick={(e) => setData({ ...data, imp: !data.imp })}>Important</label>
          </div>
          <button onClick={() => {
            if (!data.title) {
              alert("Enter Title")
            }
            else if(!data.date)
              alert("Please enter date")
            else{
              if(props.type==="Add"){
              dispatch({ type: "ADD", payload: data })}
              else{
                console.log(data)
              dispatch({type:"EDIT",payload:data})}
              props.onClose(false)
            }
          }}>{props.type} a Task</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  )
}
