import CartWidget from './CartWidget'


function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">CLK VAPES</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul class="navbar-nav text-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vapes
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">2500 puffs</a></li>
            <li><a class="dropdown-item" href="#">3500 puffs</a></li>
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




