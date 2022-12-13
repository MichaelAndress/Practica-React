import { useState, useMemo } from "react";
import { useCounter } from "../Hooks"

const heaveStuff=( iterarionNumber = 10 )=>{
  for(let i = 0; i< iterarionNumber; i++ ){
    console.log('ahi vamos...');
  }
  return `${ iterarionNumber } iteraciones realizadas`
}




export const MemoHook = () => {
    const { incrementar, counter }= useCounter(1000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(()=>heaveStuff(counter),[counter])

  return (
    <>
        <h1>Counter: <small>{ counter }</small></h1>
        <hr />
        <h4>{ memorizedValue }</h4>

        <button className="btn btn-warning" onClick={ ()=>incrementar() } >+1</button>
        <button className="btn btn-outline-primary" onClick={()=>setShow(!show)}> Show/Hide { JSON.stringify(show)}</button>
    </>
  )
}
