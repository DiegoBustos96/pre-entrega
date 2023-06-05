import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>BookFlipp</h1>
            <ul>
                <li>
                    Contacto
                </li>
                <li>
                    Libros
                </li>
                <li>
                    Reseñas
                </li>
                <li>
                    Noticias
                </li>
            </ul>

            <CartWidget />


        </header>
    )
}

export default NavBar