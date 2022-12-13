import { useEffect } from "react";
import { Message } from "./Message";
import { useForm } from "../Hooks/useForm";

export const CustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm(
    {
        username:'',
        email:'',
        password:''
    });

    const { username, email, password } = formState;

    useEffect(()=>{
        // console.log('úseefeectsellamo')
    },[]);
    useEffect(()=>{
        // console.log('úseefeectsellamo')
    },[ formState ]);
    useEffect(()=>{
        // console.log('úseefeectsellamo')
    },[ email ]);
    

  return (
    <>
        <div>SimpleForm</div>
        <hr />
        <input onChange={ onInputChange } value={ username } type="text" placeholder='Username' className='form-control' name='username'/>
        <input onChange={ onInputChange } value={ email } type="email" placeholder='@gmail,com' className='form-control mt-2' name='email'/>
        <input onChange={ onInputChange } value={ password } type="password" placeholder='Contrasenia' className='form-control mt-2' name='password'/>
        {
            (username === 'michael') && <Message />
        }
        <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
        
    </>
  );
};
