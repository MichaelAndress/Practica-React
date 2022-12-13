import { useState } from "react"

export const useCounter=(valorInicial=10)=>{

    const [counter, setcounter] = useState(valorInicial)

    const incrementar=(value=1)=>{
        setcounter(counter + value );
    }
    const reset=()=>{
        setcounter(valorInicial);
    }
    const disminuir=(value=1)=>{
        if (counter ===0) {
            return
        }
        setcounter(counter - value)
    }

    return{
        counter,
        incrementar,
        reset,
        disminuir,
    }


}