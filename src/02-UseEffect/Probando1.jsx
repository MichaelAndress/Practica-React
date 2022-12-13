import { useState, useEffect } from "react";
import { use2 } from "../Hooks/use2";

export const Probando1 = () => {
    const{ valor, click } = use2({
        username:'',
        email:'',
        password:''
    });

    const { email, username, password }= valor;

    useEffect(() => {
        use2
    }, [])
    


  return (
    <>
        <h1>Probando formulario</h1>
        <hr />
        <input value={username} placeholder=" username " type="text" name=" username" />
        <br />
        <input value={email} placeholder=" email " type="email" name=" email "/>
        <br />
        <input value={password} placeholder=" password " type="password" name=" password "/>
        <button className="btn btn-warning" onClick={ click }>Leer</button>
    </>
  )
}
