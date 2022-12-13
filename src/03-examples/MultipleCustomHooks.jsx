import { useFetch, useCounter  } from "../Hooks"
import{ LoadingQuote, Quote } from "./index"
// import { LoadingQuote } from "./LoadingQuote";
// import { Quote } from "./Quote";


export const MultipleCustomHooks = () => {
    const { counter, incrementar, disminuir } = useCounter(1);
    const{ data, isLoading, error} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`)
    // doble negacion
    // undefined + ! =true + ! = false && entonces
    const{ author, quote }= !!data && data[0];


  return (
    <>
        <h1>Breaking bad Hook</h1>
        <hr />
        {/* {
          ( isLoading )
          // Si esto es true
          ?(
            <div className="alert alert-info text-center">Loading.......</div>
          )
          // si no
          :(
            <blockquote className="blockquote text-end">
              <p className="mb-1">{ quote }</p>
              <footer className="blockquote-footer">{ author }</footer>
            </blockquote>
          )
        } */}
        {
          (isLoading)
          ?(<LoadingQuote />)
          :(<Quote quote={ quote }author={ author }/>)
        }

        <button disabled={ isLoading } className="btn btn-primary" onClick={ ()=>incrementar() } >Siguiente</button>
        <button className="btn btn-secondary" onClick={ ()=>disminuir() } >Anterior</button>
    </>
    
  )
}
