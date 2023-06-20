import { useState,useEffect } from "react"

const LibrosApi = () => {
    const [libros, setLibros] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    useEffect(() =>{
      fetch(`https://openlibrary.org/works/OL45804W/editions.json`)
      .then(respuesta => respuesta.json())
      .then(datos => setLibros(datos))
      .catch(console.log("Error",error))
    },[])

  return (
    <div>
        <h2>Libros</h2>
        {
          libros.map((titulo, index) => {
            return (
              <div key={index}>
                  <p>Titulo: {titulo.title}</p>
                  <img src={titulo.books} alt="" />
              </div>
            )
          })
        }
    </div>
  )
}

export default LibrosApi