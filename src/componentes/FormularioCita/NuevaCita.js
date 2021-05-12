import "./NuevaCita.css"
import React, { useState } from "react";

function NuevaCita(){

    const [Paciente,setPaciente] = useState("");
    const [Fecha,setFecha] = useState("");
    const [Hora,setHora] = useState("");

    const addPaciente = (event) => {
        event.preventDefault()
        if(!Paciente.trim()){
            console.log('El paciente esta vacio')
            return
        }
        
        

    }


    return(
        <div className="principal">
            <div className="wrap">
                <form onSubmit={addPaciente} className="formulario" action="">
                    <h2>Registrar Cita</h2>
                    <input 
                        type="text" 
                        id="citaInput" 
                        className = "error" 
                        placeholder="Paciente" 
                        minLength="5" 
                        maxLength="40" 
                        pattern="[A-Za-z]"
                        onChange={(e)=> setPaciente(e.target.value)}
                    />

                    <input 
                        type="date" 
                        id="fechaInput" 
                        className= "error" 
                        placeholder="Fecha"
                        onChange={(e)=> setFecha(e.target.value)}    
                    />

                    <input 
                        type="time" 
                        id="horaInput" 
                        className= "error" 
                        placeholder="Hora"
                        onChange={(e) => setHora(e.target.value)}
                    />

                    <input 
                        type="submit" 
                        className="boton" 
                        id="btn-agregar" 
                        value="Agregar Cita"
                    />
                </form>
            </div>
	    </div>

    )
}

export default NuevaCita;