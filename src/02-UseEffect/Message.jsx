import { useEffect } from "react"

export const Message = () => {

    useEffect(() => {
      const onMouseMove = ({x, y})=>{
        const coords = {x, y}
      }
    
      return () => {
        console.log('message unmounted')
      }
    }, [])
    


  return (
    <>
        <h3>usuario ya existe</h3>
    </>
  )
}
