import './CartWidget.css'

const CartWidget = () => {
    const carrito = <i className ="bi bi-bag"></i>
  return (
    <div>
        <i className ="bi bi-bag"> Carrito</i>
        <strong> 10</strong>
    </div>
  )
}

export default CartWidget