
import CartWidget from './Cartwidget'; // Carrito
import logo from '../assets/logo.png'; // logo 
import './NavBar.css';
function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <img className="milogo" src={logo} alt="Logo de la empresa" />
      </div>
      <ul className="navlist">
        <li className="navitem">
          <a href="#">Inicio</a>
        </li>
        <li className="navitem">
          <a href="#">Productos</a>
        </li>
        <li className="navitem">
          <a href="#">Nosotros</a>
        </li>
      </ul>
      <div>
        <CartWidget />
      </div>
    </nav>
  )
}
export default NavBar