import React from 'react'
import './CSS/TodoItems.css'
import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import cross from './assets/cross.png'

const TodoItems = ({no, display, text}) => {
  return (
    <div className='todoItems'>
      <div className='todoItems-container'>
        <img src={not_tick} alt="" />
        <img src={tick} alt="" />
        <div className="todoItems-text">{text}</div>
        <img src={cross} alt=""  className='todoItems-cross-icon'/>
      </div>
    </div>
  )
}

export default TodoItems
