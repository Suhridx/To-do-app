import { createContext, useReducer, useState } from "react";
import React from 'react'
import { reduce } from "./Reducer";

export const Todo=createContext()


const TodoContext = ({children}) => {
    const [state,dispatch] = useReducer(reduce,[])
    console.log(state)
  return (
    <Todo.Provider value={{state,dispatch}}>
        {children}
    </Todo.Provider>
  )
}

export default TodoContext
