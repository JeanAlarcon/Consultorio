import Sidebar from "./componentes/sidebar/sidebar";
import NavBoost from "./componentes/Navbar/NavBoost";

import Pagina from "./Paginas/Pagina";
import Inicio from "./Paginas/Inicio";
import citaForm from "./Paginas/CitaForm";
import PacienteForm from "./Paginas/PacienteForm";


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css"


function App() {
  return (
  <>
    <Router>
      <Sidebar/>
        <div className="main">
          <NavBoost/>
          <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/Cita' exact component={(props) => (
            <Pagina {...props} titulo="Citas" entidad="citas" />
          )} />

            <Route path='/Pacientes' exact component={(props) => (
            <Pagina {...props} titulo="Pacientes" entidad="pacientes" />
          )} />
            <Route path='/nuevaCita' exact component={citaForm} />
            <Route path='/nuevoPaciente' exact component={PacienteForm} />

          </Switch>
        </div>
    </Router>
  </>
  );
}

export default App;
