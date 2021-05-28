import Sidebar from "./componentes/sidebar/sidebar";
import NavBoost from "./componentes/Navbar/NavBoost";

import Pagina from "./Paginas/Pagina";
import Pacientes from "./Paginas/Pacientes";
import paciente from "./Paginas/Paciente";
import Login from "./Login";
import citaForm from "./Paginas/CitaForm";
import PacienteForm from "./Paginas/PacienteForm";
import Inicio from "./Paginas/Inicio";
import Historial from "./Paginas/Pacientes/Historial"

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
            <Pagina {...props} titulo="Citas" entidad="citas" />
          )} />            
            <Route path='/nuevaCita' exact component={citaForm} />
            <Route path='/nuevoPaciente' exact component={PacienteForm} />
            
            <Route path='/Pacientes' exact component={(props) => (
            <Pacientes {...props} titulo="Pacientes" entidad="pacientes" />
            ) } />
            <Route path='/Pacientes/informacion/:id' exact component={paciente} />
            <Route path='/Pacientes/historial/:id' exact component={Historial} />

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
