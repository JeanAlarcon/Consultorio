import "./Nav.css"
import logo from "./logo.jpg"


function NavBoost() {
    return(
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <a className="navbar-logo" href="/" >
                    <img src={logo} />
                </a>
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Inicio</a>
              </li>


              <li className="nav-item">
                <a className="nav-link " href="/" >
                  Especialidades
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/">Registrar cita</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Nosotros</a>
              </li>
            </ul>
            
          </div>
      </nav>
      </div>
    )
}

export default NavBoost;