import "./Nav.css"
import logo from "./logo.jpg"

function Nav() {
    return(
		<nav class="navegacion ">

			<ul class="menu">
				<a class="navbar-logo" href="/" >
                    <img src={logo} />
                </a>
				<li><a href="/">Inicio</a></li>
				<li><a href="/">Especialidades</a></li>
					<ul class="submenu">
						<li>
                            <a href="/">Ortodoncia</a>
                        </li>
						<li>
                            <a href="/">Cirugías</a>
                        </li>
						<li>
                            <a href="/">Endodoncias</a>
                            </li>
						<li>
                            <a href="/">Blanqueamiento</a>
                        </li>
					</ul>
				<li><a href="/">Registrar cita</a></li>
				<li><a href="/">Nosotros</a></li>
			</ul>
		</nav>
    )
}

export default Nav;