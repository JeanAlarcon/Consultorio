import Sidebar from "./componentes/sidebar/sidebar";
import Pagina from "./Paginas/Pagina";
import NuevaCita from "./Paginas/NuevaCita";
import Inicio from "./Paginas/Inicio";
import Pacientes from "./Paginas/Pacientes";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from "./componentes/Navbar/Nav";

function App() {
  return (
  <>
    <Router>
      <Sidebar/>
        <div className="container">
          <Nav/>
          <Switch>
            <Route path='/' exact component={Inicio} />
            <Route path='/nuevaCita' exact component={NuevaCita} />
            <Route path='/Cita' exact component={Pagina} />
            <Route path='/Pacientes' exact component={Pacientes} />
          </Switch>
        </div>
    </Router>
  </>
  );
}

export default App;
