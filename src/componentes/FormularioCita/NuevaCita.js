import "./NuevaCita.css"

function NuevaCita(){
    return(
        <div className="principal">
            <div className="wrap">
                <form className="formulario" action="">
                    <h2>Registrar Cita</h2>
                    <input 
                        type="text" 
                        id="citaInput" 
                        className = "error" 
                        placeholder="Paciente" 
                        minlength="5" 
                        maxlength="40" 
                        pattern="[A-Za-z]"
                    />
                    <input type="date" id="fechaInput" className = "error" placeholder="Fecha"/>
                    <input type="time" id="horaInput" className = "error" placeholder="Hora"/>
                    <input type="button" className="boton" id="btn-agregar" value="Agregar Cita"/>
                </form>
            </div>
	    </div>

    )
}

export default NuevaCita;