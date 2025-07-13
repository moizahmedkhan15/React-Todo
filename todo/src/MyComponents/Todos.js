import React from 'react'
import TodoItem from './TodoItem';

const Todos = (props) => {
  let myStyle = {
    minHeight: "50vh",
    margin: "10px auto"
  }
  return (
    <div className='container' style={myStyle}>
      <h3 className='text-center my3'> Todos List</h3>
      {props.todos.length===0? "No Todos To Display" : 
      props.todos.map((todo)=> {
        return ( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        )
      })
      }
      
    </div>
  )
}

export default Todos
