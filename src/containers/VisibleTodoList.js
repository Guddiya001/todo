import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
 
  switch (filter) {
    case 'SHOW_ALL':
       return todos

    case 'SHOW_COMPLETED':

      return todos.filter(t => t.completed)
    
    case 'SHOW_ACTIVE':

      return todos.filter(t => !t.completed)

    case 'REMOVE_COMPLETED':

      const newList = todos.filter(todos => !todos.completed)
      const listsss= {"todos":newList}
      window.localStorage.setItem("reduxState", JSON.stringify(listsss)); 
      window.location.reload(true)
      return newList
         
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})


const mapDispatchToProps =  ({
  onTodoClick: toggleTodo
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
