import "./Pagina.css"
import { useEffect, useState } from "react";
import { store } from "../firebaseconfig";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faIdCardAlt,faFileMedical, faUser, faTooth, faNotesMedical} from '@fortawesome/free-solid-svg-icons'

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
        <div className="containerPacientes mx-auto justify-content-center align-items-center">
            <div className="row mx-auto  justify-content-center">
                {filasf.length > 0 ?
                    filasf.map((fila,index) => <div className="col-auto col-md-4" key={fila.id}>
                    <div className="card mt-2">
                        <FontAwesomeIcon className="icon" icon={faIdCardAlt} size="10x" />
                        <div className="card-body">
                            <h5 className="card-title">{fila.nombre} {fila.apellido}</h5>
                            <p className="card-text">{fila.correo}</p>
                            <p className="card-text">{fila.telefono}</p>
                            
                            <Link to={`/Pacientes/informacion/${fila.id}`} className="btn boton "><FontAwesomeIcon icon={faUser}/> Ver paciente</Link>
                            <Link to={`/Pacientes/historial/${fila.id}`} className="btn boton "><FontAwesomeIcon icon={faFileMedical}/> Historial Clinico</Link>
                            <Link to={`/Pacientes/tratamientos/${fila.id}`} className="btn boton "><FontAwesomeIcon icon={faTooth}/> Tratamientos</Link>    
                            <Link to={`/Pacientes/notas/${fila.id}`} className="btn boton "><FontAwesomeIcon icon={faNotesMedical}/> Notas evolución</Link>    

                        </div>
                  </div>
                  </div>)  
                :<span>No hay pacientes que mostrar</span>}
            </div>
        </div>
    )
}

export default Pacientes;
