import {useState} from "react";
 
const Contador = ({stock, inicial}) => {
    const[contador, setContador]= useState(inicial);
    

    

    const aumentarContador = ()=> {
        if (contador < stock){
            setContador(contador + 1);
        }
    }
    const disminuirContador = ()=> {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }
  return (
    <div>
        <h2>Contador</h2>
        <button onClick={disminuirContador}>-</button>
        <strong>{contador}</strong>
        <button onClick={aumentarContador}>+</button>

        <button>Agregar al Carrito</button>
    </div>
  )
}

export default Contador