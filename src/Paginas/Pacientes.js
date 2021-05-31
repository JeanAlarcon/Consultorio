import "./Pagina.css"
import { useEffect, useState } from "react";
import { store } from "../firebaseconfig";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIdCardAlt,faFileMedical, faUser} from '@fortawesome/free-solid-svg-icons'

function Pacientes({titulo, entidad}) {
    const [filasf,setFilasf] = useState([]);
    
    useEffect(() => {
        const getEntidad = async () => {
            const { docs } = await store.collection(entidad).get()
            const entidadf = docs.map(item =>({id:item.id, ...item.data()}));
            setFilasf(entidadf)
        }
        getEntidad()
    },[])

    return (
        <div className="container">
            <div className="row mx-auto">
                {filasf.length > 0 ?
                    filasf.map((fila,index) => <div className="col-md-4" key={fila.id}>
                    <div className="card mt-2">
                        <FontAwesomeIcon className="icon" icon={faIdCardAlt} size="10x" style={{color:'red'}}/>
                        <div className="card-body">
                            <h5 className="card-title">{fila.nombre} {fila.apellido}</h5>
                            <p className="card-text">{fila.correo}</p>
                            <p className="card-text">{fila.telefono}</p>
                            
                            <Link to={`/Pacientes/informacion/${fila.id}`} className="btn btn-danger"><FontAwesomeIcon icon={faUser}/> Ver paciente</Link>
                            <Link to={`/Pacientes/historial/${fila.id}`} className="btn btn-danger"><FontAwesomeIcon icon={faFileMedical}/> Historial Clinico</Link>
                            
                        </div>
                  </div>
                  </div>)  
                :<span>No hay pacientes que mostrar</span>}
            </div>
        </div>
    )
}

export default Pacientes;
