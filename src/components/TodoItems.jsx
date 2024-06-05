import React from 'react'
import './CSS/TodoItems.css'
import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import cross from './assets/cross.png'

const TodoItems = ({no, display, text, setTodos}) => {
  const toggle = ()=>{
    let data = JSON.parse(localStorage.getItem('todos'))
    for(let i = 0; i < data.length; i++){
      if(data[i].no === no){
        if(data[i].display === ''){
          data[i].display = 'line-through'
        }else{
          data[i].display = ''
        }
        break;
      }
    }
    setTodos(data)
  }
  return (
    <div className='todoItems'>
      <div className='todoItems-container' onClick={()=>{toggle(no)}}>
        {display=== '' ? <img src={not_tick} alt="" /> : <img src={tick} alt="" />}
        <div className="todoItems-text">{text}</div>
        <img src={cross} alt=""  className='todoItems-cross-icon'/>
      </div>
    </div>
  )
}

export default TodoItems
