import React, { useContext, useState } from 'react'
import './style.css'
import { Todo } from '../context/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faCircle, faPenToSquare, faStar as regStar, } from '@fortawesome/free-regular-svg-icons'
import { faCircleCheck, faStar as solidStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Form } from '../components/Form'


const SingleTask = ({ data }) => {
  const { dispatch } = useContext(Todo)
  const [show,setShow] =useState(false)
  console.log(data)
  return (
    <div className='task-box'>
      {data.date ? <FontAwesomeIcon icon={faCalendar} style={{ color: "#d76b3c", }} /> : ""}
      <span>{data.date}</span>
      <h2 className='task-title'>{data.title}</h2>
      <p>{data.desc}</p>
      <div className="bottom">
        <span onClick={()=>dispatch({type : "SET_COMPLETE", payload:data})}>
          <FontAwesomeIcon icon={data.complete?faCircleCheck:faCircle} size='lg' style={{ color: "#008048", }} />
          <label style={{ paddingLeft: "5px" }}>{data.complete?"Completed":"Incomplete"}</label>
        </span>
        <FontAwesomeIcon icon={data.imp ? solidStar : regStar} size='lg' style={{ color: "dfc334" }} onClick={() => dispatch({ type: "SET_IMP", payload: data })} />
        <FontAwesomeIcon icon={faTrash} size='lg' onClick={() => dispatch({ type: "REMOVE", payload: data })} />
        <FontAwesomeIcon icon={faPenToSquare} size='lg' onClick={()=> setShow(true)}/>
        {show &&<Form show={show} type="Edit" onClose={setShow} value={data}/>}
      </div>
    </div>
  )
}

export default SingleTask