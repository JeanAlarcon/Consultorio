import Sidebar from "./componentes/sidebar/sidebar";
import NavBoost from "./componentes/Navbar/NavBoost";

import Pagina from "./Paginas/Pagina";
import Inicio from "./Paginas/Inicio";
import Pacientes from "./Paginas/Pacientes";
import citaForm from "./Paginas/CitaForm";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




function App() {
  return (
  <>
    <Router>
      <Sidebar/>
        <div className="container">
          <NavBoost/>
          <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/Cita' exact component={Pagina} />
            <Route path='/Pacientes' exact component={Pacientes} />
            <Route path='/nuevaCita' exact component={citaForm} />
          </Switch>
        </div>
    </Router>
  </>
  );
}

export default App;
