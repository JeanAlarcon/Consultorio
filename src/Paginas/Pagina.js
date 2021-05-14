import Tabla from "../componentes/Tabla/Tabla";
import { Component } from "react";
import "./Pagina.css"

class Pagina extends Component {

    render() {
        const {titulo = ''} = this.props;
        const {entidad = ''}= this.props;
        const entidades = {
            citas : [
                {paciente:'Paciente 1',fecha:'fecha 1',hora:'10:01'},
                {paciente:'Paciente 2',fecha:'fecha 2',hora:'12:00 '},
                {paciente:'Paciente 3',fecha:'fecha 3',hora:'13:00'},
                
            ],
            pacientes : [
                {nombre:'Paciente 1',apellido:'Apellido 1',edad:"20",direccion:'direccion 1',correo:'email@mail.com',telefono:"558462312"},
                {nombre:'Paciente 2',apellido:'Apellido 2',edad:"30",direccion:'direccion 2',correo:'email2@mail.com',telefono:"5615987463"},
                {nombre:'Paciente 3',apellido:'Apellido 3',edad:"40",direccion:'direccion 3',correo:'email3@mail.com',telefono:"5510568496"},
            ],
        };

        const filas = entidades[`${entidad}`]
        
        const columnas = Object.keys(filas[0]);
        

        return (
            <>
            <div className="container">
                <Tabla titulo={titulo} entidad={entidad} columnas={columnas} filas={filas} />
            </div>
            </>
    
        )
    }
}

export default Pagina;