import Tabla from "../componentes/Tabla/Tabla";
import { Component } from "react";
import "./Pagina.css"

class Pagina extends Component {
    constructor(props){
        super(props);
        this.state = {
            mostramodal : false,
        }
    }


    render() {
        return (
            <>
            <div class="container">
                <Tabla />  
            </div>
            </>
    
        )
    }
}

export default Pagina;