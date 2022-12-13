import React from 'react'
import { useCounter } from '../Hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { counter, incrementar, reset, disminuir }= useCounter();

  return (
    <>
        <h1>CounterWithCustomHook: { counter }</h1>
        <hr />
        <button className='btn btn-warning' onClick={()=> incrementar(2) }>+1</button>
        <button className='btn btn-warning' onClick={ reset }>reset</button>
        <button className='btn btn-warning' onClick={()=> disminuir(2) }>-1</button>
    </>
  )
}
