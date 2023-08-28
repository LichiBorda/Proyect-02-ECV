import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <Link class="navbar-brand" to="">CLK VAPES</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <Link  class="nav-link " aria-current="page" to="">Inicio</Link >
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vapes
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/category/2500">2500 puffs</Link ></li>
            <li><Link  class="dropdown-item" to="/category/3500">3500 puffs</Link ></li>
            <li><a class="dropdown-item" href="#"></a></li>
          </ul>
        </li>
          <li class="nav-item">
            <a  class="nav-link" href="#">Contactos</a>
          </li>
          <li >
          <CartWidget />
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar




