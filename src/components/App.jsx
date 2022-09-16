import { useEffect, useState } from "react"
import axios from "axios"
import "./App.css"
import Cripto from "./cripto/Cripto"



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
    <div className="app-container">
      <h1>Ximena Lopez Mogollon🍨</h1>
     <h1>Lista de criptomonedas</h1>
    <div className="cripto-container">
    {
      criptos.map(({id, name, priceUsd, symbol, changePercent24Hr}) => (
     <Cripto 
     key={id} 
     name={name} 
     priceUsd={priceUsd} 
     symbol={symbol} 
     changePercent24Hr={changePercent24Hr}/>
    ))
  }
    </div>
    </div>
    )

  }
export default App
