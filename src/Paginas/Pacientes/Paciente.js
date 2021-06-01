import './Paciente.css'
import { store } from "../../firebaseconfig";

import { useParams } from "react-router";
import { useState,useEffect } from 'react';

function Paciente(){
    const [paciente,setPaciente] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        const getEntidad = async () => {
            try {        
                const data = await store.collection('pacientes').doc(id).get()
                setPaciente(data.data())
            } catch (error) {
                console.log(error)
            }  
        }
        getEntidad()
    },[])


    return(
        <div className="pacienteContainer">
            {paciente ?
                <div className="col-md-offset-10 col-md-10 col-lg-offset-10 col-lg-10">
                    <div className="well profile">
                        <div className="col-sm-15">
                            <div className="col-xs-15 col-sm-12">
                                <h2 className="m-b-20 p-b-5">{`${paciente.nombre} ${paciente.apellido}`}</h2>
                                <p><strong>Edad: </strong> {paciente.edad}</p> 
                                <p><strong>Correo: </strong> {paciente.correo} </p>
                                <p><strong>Direccion: </strong> {paciente.direccion} </p>
                                <p><strong>Telefono: </strong>
                                    <span className="tags">{paciente.telefono}</span>
                                </p>
                            </div>             
                        </div>            
                    </div>                 
		        </div>
            :<h1>Paciente</h1>}
	    
    </div>
    )
}

export default Paciente;