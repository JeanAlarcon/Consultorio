import "./Pagina.css"
import { useEffect, useState } from "react";
import { store } from "../firebaseconfig";

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
            <div className="list-group">
                {filasf.length > 0 ?
                    filasf.map((fila,index) => <a href="#" className="list-group-item list-group-item-primary" aria-current="true" key={`${index}${fila.nombre}`}>
                    <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{fila.nombre} {fila.apellido}</h5>
                    <small>{index}</small>
                    </div>
                    <p className="mb-1">{fila.correo}</p>
                    <small>{fila.telefono}</small>
                </a>)  
                :<span>No hay pacientes que mostrar</span>}
            </div>
        </div>
    )
}

export default Pacientes;
