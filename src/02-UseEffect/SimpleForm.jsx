import { useState, useEffect } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        username:'michael',
        email:'michael1996aml@gmail.com'
    });
    const {username, email}=formState;

    const onInputChange=({ target })=>{
        const { name, value } = target;

        setformState({
            ...formState,
            [ name ]: value
        });
    };

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
        {
            (username === 'michael') && <Message />
        }
        
    </>
  );
};
