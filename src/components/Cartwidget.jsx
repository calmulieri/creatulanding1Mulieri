import widlogo from '../assets/widlogo.png'
function CartWidget() {
  return (
    <div className="cartwidget">
      <img className="cartwicon" src={widlogo} alt="Carrito de compras"  />
      <span className="cartcount">3</span>
    </div>
  )
}

export default CartWidget