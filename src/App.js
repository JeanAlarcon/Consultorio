import Sidebar from "./componentes/sidebar/sidebar";
import NavBoost from "./componentes/Navbar/NavBoost";

import Citas from "./Paginas/citas/Citas";
import Pacientes from "./Paginas/Pacientes";
import paciente from "./Paginas/Pacientes/Paciente";
import Login from "./Login";
import citaForm from "./Paginas/citas/CitaForm";
import PacienteForm from "./Paginas/Pacientes/PacienteForm";
import Inicio from "./Paginas/Inicio";
import Historial from "./Paginas/Pacientes/Historial"
import Tratamientos from "./Paginas/Pacientes/Tratamientos"

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
            <Route path='/' exact component={Login} />
            <Route path='/inicio' exact component={Inicio} />
            <Route path='/Cita' exact component={(props) => (
            <Citas {...props} titulo="Citas" entidad="citas" />
            )} />            
            <Route path='/nuevaCita' exact component={citaForm} />
            <Route path='/nuevoPaciente' exact component={PacienteForm} />
            
            <Route path='/Pacientes' exact component={(props) => (
            <Pacientes {...props} titulo="Pacientes" entidad="pacientes" />
            ) } />
            <Route path='/Pacientes/informacion/:id' exact component={paciente} />
            <Route path='/Pacientes/historial/:id' exact component={Historial} />
            <Route path='/Pacientes/tratamientos/:id' exact component={Tratamientos} />
            <Route path="*">
              <h1>Pagina no encontrada vuelve al Inicio</h1>
            </Route>
          </Switch>
        </div>
    </Router>
  </>
  );
}

export default App;
