import { useState, useReducer, useEffect } from "react"
import { todoReducer } from '../08-useReducer/todoReducer'

const init=()=>{
    return JSON.parse( localStorage.getItem('todos') || [])
}

export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);
    
  useEffect(() => {
      localStorage.setItem('todos',JSON.stringify( todos ))
  }, [todos])
  
  
  const handlerNewTodo=( todo )=>{
      const action={
          type: 'Add Todo',
          payload: todo
      }
      dispatch(action);
  }
  const handlerDeleteTodo=( id )=>{
      dispatch({
          type: 'Delete Todo',
          payload: id
      })
  }
  const handleToggleTodo=( id )=>{
      console.log({id})
      dispatch({
          type: 'Toggle Todo',
          payload: id
      })
  }

  return {
    todos,
    handlerNewTodo,
    handlerDeleteTodo,
    handleToggleTodo,

  }
}
