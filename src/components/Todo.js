import React, {useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodo from '../containers/AddTodo'



const Todo = ({ onClick, completed, text }) =>{
  
      const [state, setstate] = useState()
      const updataValues =(value)=>{
        setstate(value)

      }

  
 return (

  <>
  
   {completed ? 
  <div className="form-check">
     
  <input className="form-check-input" type="checkbox" 
  onClick={onClick}
  style={{
    textDecoration: completed ? 'line-through' : 'none'
  }}
  />
 
 <label  className="form-check-label" >
  {text} 
  </label>

  </div>: 
  
  <div className="form-check">
   {state ? <AddTodo name={state} updatesdata ={'first'}/> : 
   <>
  <input className="form-check-input" type="checkbox" 
  onClick={onClick}
  style={{
    textDecoration: completed ? 'line-through' : 'none'
  }}
  />
  <label  className="form-check-label" onClick={() =>updataValues(text)} >
  {text}
  </label>
  </>
 }
  </div>
  
  }
  </>
)

}

export default Todo
