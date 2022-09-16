import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Pagina404 from './404'
import App from './components/App'
import "./main.css"
import Saludo from './components/Saludo'
import Menu from './components/menu/Menu'


ReactDOM.createRoot(document.getElementById('root')).render(
      <>
      <Menu/>
       <BrowserRouter>
       <Routes>
         <Route path='/' element={<App />}/>
         <Route path='/Saludo' element={<Saludo />}/>
         <Route path='*' element={<Pagina404/>}/>
       </Routes>
      </BrowserRouter>
      </>
)
