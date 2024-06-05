import React, { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import TodoItems from './TodoItems'


let count = 0
const Todo = () => {
  const [todos, setTodo] = useState([])
  const inputRef = useRef(null)

  const add = ()=>{
    setTodo([...todos, {no: count++, text: inputRef.current.value, display: ''}])
    inputRef.current.value = ''
    localStorage.setItem('todos_count', count)
  }

  useEffect(()=>{
    setTodo(JSON.parse(localStorage.getItem('todos')))
    count = localStorage.getItem('todos_count')
  }, [])

  useEffect(()=>{
    setTimeout(() => {
      console.log(todos)
      localStorage.setItem('todos', JSON.stringify(todos))
    }, 100);
  },[todos])

  return (
    <div className='todo'>
      <div className="todo-header">Todo List</div>
      <div className='todo-add'>
        <input type='text' placeholder='Add your task' className='todo-input' ref={inputRef}/>
        <div className="todo-add-btn" onClick={()=>{add()}}>Add</div>
      </div>
      <div className="todo-list">
        {todos.map((item, index)=>{
          return <TodoItems key={index} no ={item.no} display ={item.display} text={item.text}/>
        })}
      </div>
    </div>
  )
}

export default Todo
