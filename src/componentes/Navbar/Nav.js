function Nav() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Tratamientos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Acerca de</a>
              </li>
            </ul>
            
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
)
}

export default Nav;