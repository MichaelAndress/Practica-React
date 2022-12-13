import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodos } from "../Hooks/";

export const TodoApp = () => {

    const { todos, handlerNewTodo, handlerDeleteTodo, handleToggleTodo} = useTodos();

  return (
    <>
        <h1>TodoApp { todos.length}, <small>Pendientes: { todos.filter(todo => !todo.done).length}</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
                <TodoList todos = { todos } 
                        onDeleteTodo={(id)=> handlerDeleteTodo(id)} 
                        onToggleTodo={ handleToggleTodo }/>
            </div>
            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={(todo)=>handlerNewTodo(todo) }/>
            </div>
        </div>
    </>
  )
}
