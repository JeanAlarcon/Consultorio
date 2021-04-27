import Tabla from "../componentes/Tabla/Tabla";
import { Component } from "react";
import "./Pagina.css"

class Pagina extends Component {

    render() {
        const {titulo = ''}= this.props;
        return (
            <>
            <div class="container">
                <Tabla titulo={titulo} />  
            </div>
            </>
    
        )
    }
}

export default Pagina;