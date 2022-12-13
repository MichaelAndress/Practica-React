import { useForm } from "../Hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const {des, onInputChange}= useForm({
        des:''
    });

    const onFormSubmit=(e)=>{
        e.preventDefault();
        if (des.length <= 1) {
            return
        }
        const newTodo={
            id: new Date().getTime(),
            description: des,
            done:false
        }

       onNewTodo && onNewTodo(newTodo);
    }

  return (
    <form onSubmit={ onFormSubmit }>
        <input name="des" 
            onChange={ onInputChange } 
            value={ des } 
            type="text" 
            className="form-control" 
            placeholder="Que hay que hacer?"
        />

        <button type="submit" className="btn btn-outline-primary mt-2">Agregar</button>
    </form>
  )
}
