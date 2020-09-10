import React , {useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import todos from '../reducers/todos';




let AddTodo = ({ dispatch ,name,updatesdata }) => {

  const [names, setName]= useState()
  let onchangeHandler = (event)=>{
   setName(event.target.value);
   
  }

  console.log('updatesdata ' + updatesdata)

  let input
  return (
    
    <div className="row mt-4">
    
      <form className="form-inline"  onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        if(updatesdata === 'first'){
          const data = localStorage.getItem('reduxState')
          const obj = JSON.parse(data) 
          const newList = obj.todos
         
          const fdata = newList.filter(todos => todos.text===name )
 
          var id =null
          fdata.forEach(data =>{
              id = data.id
              
          })

         try{
         
          
          
         const textdata = names
         
         newList[id] = {id: id, text: textdata, completed: false}

         const listsss= {"todos":newList}
         window.localStorage.setItem("reduxState", JSON.stringify(listsss)); 
          window.location.reload(true)
         }catch(e){
          console.log(e)
         }
         

        }else{
          dispatch(addTodo(input.value))
          input.value = ''
        }
      
      }}>

        <div className="form-group mx-sm-3 mb-2">

{names ?  

<input className="form-control" ref={node => {
  input = node 
}}  value={names} onChange={onchangeHandler}/>

:   <input className="form-control" ref={node => {
  input = node 
}}  value={names} onChange={onchangeHandler}/>}

          
        </div>
        <div className="form-group mx-sm-3 mb-2">
            <Button type="submit">
              Add Todo
            </Button>
        </div>
      </form>
    </div>

  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
