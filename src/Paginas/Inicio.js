import "./Pagina.css"
import { useAuth } from "./../contextos/ContextoAuth"

function Inicio() {
    const {usuario} = useAuth();
    console.log(usuario)

    return (
        <div className="container"> 
            <h1>Inicio</h1>
        </div>
    )
}

export default Inicio;
