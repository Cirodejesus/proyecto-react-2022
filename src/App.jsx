import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"


const App = () => {

  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()
  
  useEffect(() => {
    axios.get(`${API_URL}assets`)
    .then((data) => {
      setCriptos(data.data.data)

    })
   /* fetch(`${API_URL}assets`)
    .then(response => response.json())
    .then((data) => {
      setCriptos(data.data)
    })*/
    .catch(() => {
      console.error("Lapetición falló")
    })
  }, [])
   
  if(!criptos) return <span>Cargando...</span>


  return (
    <>
     <h1>Lista de criptomonedas</h1>
    <ol>
    {
      criptos.map(({id, name, priceUsd}) => (
      <li key={id}> Nombre: {name} Precio: {priceUsd}</li>
    ))
  }
    </ol>
    </>
    )

  }
export default App
