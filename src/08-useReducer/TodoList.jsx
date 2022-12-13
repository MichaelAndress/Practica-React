import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos=[],onDeleteTodo, onToggleTodo }) => {


  return (
    todos.map(todo =>(
        <TodoItem 
          key={todo.id} 
          todo={ todo } 
          onDeleteTodo={ (id)=>onDeleteTodo(id) }
          onToggleTodo={ onToggleTodo }
        />
    ))
  )
}
