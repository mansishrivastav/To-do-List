import React from 'react'
import { TodoItems } from './TodoItems';

export const  Todos = (props) =>{
  let myStyle={
    minHeight:"70vh",
    margin:"150px auto"
  } 
  return (
    <div className='container' style={myStyle}>
      <h3 className='mx-4'>To-do List</h3>
      {props.todos.length===0?"No tasks to display":
     props.todos.map((todo)=>{
       return (<>
       
        <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>       
       </>
       )
     })
    }
    </div>
  )
}
