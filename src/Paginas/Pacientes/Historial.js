import "./pacientes.css"
import { store } from "./../../firebaseconfig";

import { useParams } from "react-router";
import { useState,useEffect } from 'react';

function Historial(){
    const [paciente,setPaciente] = useState({})
    const { id } = useParams()
    
    useEffect(() => {
        const getEntidad = async () => {
            try {        
                const data = await store.collection('pacientes').doc(id).get()
                setPaciente(data.data().terminos)
            } catch (error) {
                console.log(error)
            }  
        }
        getEntidad()
    },[])

    return (
    <div className="containerHistorial">
        {paciente ? <div classNAme='row'>
        <h1>Historial Clinico</h1>
        <div className="list-group-numbered">
        <ul className="list-group list-group-horizontal-md">
            <li className="list-group-item">Fiebre reumática o enfermedad cardiaca reumática</li>
            <li className="list-group-item">{paciente.pregunta1}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Enfermedades cardiovasculares</li>
            <li className="list-group-item">{paciente.pregunta2}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Diabetes</li>
            <li className="list-group-item">{paciente.pregunta3}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Hepatitis</li>
            <li className="list-group-item">{paciente.pregunta4}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">VIH positivo/SIDA</li>
            <li className="list-group-item">{paciente.pregunta5}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Gastritis o úlceras gástricas</li>
            <li className="list-group-item">{paciente.pregunta6}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Problemas renales</li>
            <li className="list-group-item">{paciente.pregunta7}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Anemia</li>
            <li className="list-group-item">{paciente.pregunta8}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Presión arterial baja o alta</li>
            <li className="list-group-item">{paciente.pregunta9}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Sangrado anormal con extracciones dentales o cortaduras</li>
            <li className="list-group-item">{paciente.pregunta10}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Se le hacen moretones con facilidad</li>
            <li className="list-group-item">{paciente.pregunta11}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Ha requerido transfuciones sanguíneas</li>
            <li className="list-group-item">{paciente.pregunta12}</li>
        </ul>
        <ul className="list-group list-group-horizontal-sm">
            <li className="list-group-item">Asma</li>
            <li className="list-group-item">{paciente.pregunta13}</li>
        </ul>
      </div>
      </div>    
        :<h1>No hay historial</h1>}
    </div>)
}

export default Historial;