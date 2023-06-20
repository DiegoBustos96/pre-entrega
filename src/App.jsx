import { useState } from "react"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"
import NavBar from "./componentes/NavBar/NavBar"
import Contador from "./componentes/Contador/Contador"
import LibrosApi from "./componentes/LibrosApi/LibrosApi"
import './App.css'

const App = () => {
  return (
    <>
     <div > 
      <NavBar/>
      
      <ItemListContainer greeting={"¡Bienvenido a tú librería virtual!"}/>
      <LibrosApi/>
      <Contador stock={10} inicial={1}/>
     </div>
    </>
  )
}

export default App


//Repaso:
// 1) Los compopnentes renderizan un único elemento.
// 2) Pueden pasar props de un componenete padre a un componente hijo.
