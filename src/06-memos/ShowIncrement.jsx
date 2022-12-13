

export const ShowIncrement = ({ incrementar }) => {
    console.log('me volvi a generar :(')
  return (
    <button className="btn btn-warning" 
    onClick={()=>incrementar()}>Incrementar</button>
  )
}
