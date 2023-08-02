import React, { useState } from 'react'
import { Form } from './Form'

export const CreateTask = () => {
  const [show,setShow]=useState(false)
  function handleClick(val){
    setShow(true)
 }
 const buttonclass={
  height:"45px",
  width:"150px",
  border:"none",
  borderRadius: "8px",
  backgroundColor:"rgba(57, 59, 214, 0.8)",
  color:"white",
  cursor:"pointer"
 }

  return (
    <>
        <button style={buttonclass} onClick={handleClick}>Add new Task</button>
        {show &&<Form type="Add" show={show} onClose={setShow}/>}
    </>
  )
}
