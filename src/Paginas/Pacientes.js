import "./Pagina.css"
import { useEffect, useState } from "react";
import { store } from "../firebaseconfig";
import { Link } from 'react-router-dom'
import paciente from './../assets/img/paciente.jpg'

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
            <div className="row">
                {filasf.length > 0 ?
                    filasf.map((fila,index) => <div className="col-md-4">
                    <div className="card mt-3">
                    <img src={paciente} class="card-img-top" />
                    <div className="card-body">
                      <h5 className="card-title">{fila.nombre} {fila.apellido}</h5>
                      <p className="card-text">{fila.correo}</p>
                      <p className="card-text">{fila.telefono}</p>
                      <Link to={`/Pacientes/${fila.id}`} className="btn btn-primary">Ver paciente</Link>
                    </div>
                  </div>
                  </div>)  
                :<span>No hay pacientes que mostrar</span>}
            </div>
        </div>
    )
}

export default Pacientes;
