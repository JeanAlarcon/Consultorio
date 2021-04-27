import Tabla from "../componentes/Tabla/Tabla";
import { Component } from "react";
import "./Pagina.css"

class Pagina extends Component {

    render() {
        const {titulo = ''} = this.props;
        const {entidad = ''}= this.props;
        const entidades = {
            citas : [
                {nombre:'Consulta 1',cliente:'Ciente 2',diagnostico:'diagnostico 1'},
                {nombre:'Consulta 2',cliente:'Cliente 2',diagnostico:'diagnostico 2'}
            ],
            pacientes : [
                {nombre:'Paciente 1',apellido:'Apellido 1',email:'email@mail.com'},
                {nombre:'Paciente 2',apellido:'Apellido 2',email:'email2@mail.com'}
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