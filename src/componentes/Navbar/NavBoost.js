import "./Nav.css"
import logo from "./logo.jpg"
import { NavLink } from 'react-router-dom'


function NavBoost() {
    return(
        <div className="containerNav">
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <NavLink className="navbar-logo" to="/" >
                    <img src={logo} />
                </NavLink>
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/" activeclassname="active" >Inicio</NavLink>
              </li>


              <li className="nav-item">
                <NavLink className="nav-link " to="/especialidades" activeclassname="active" >
                  Especialidades
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/nuevaCita" activeclassname="active" >Registrar cita</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/nosotros" activeclassname="active" >Nosotros</NavLink>
              </li>
            </ul>
            
          </div>
      </nav>
      </div>
    )
}

export default NavBoost;