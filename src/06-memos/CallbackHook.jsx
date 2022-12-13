import React from 'react'
import { useState, useCallback } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {
    
    const incrementar1 = useCallback(
      () => {
        // setcounter( counter +1 )
        setcounter((value)=> value+1);
      },
      [],
    )
    
    const [counter, setcounter] = useState(1)
    // const incrementar1=()=>{
    //     setcounter( counter +1 )
    // }

  return (
    <>
        <h1>CallbackHook : { counter }</h1>
        <hr />
        <ShowIncrement incrementar={ incrementar1 }/>
    </>
    )
}
