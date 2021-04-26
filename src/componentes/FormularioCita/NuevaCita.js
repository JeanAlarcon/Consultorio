import "./NuevaCita.css"

function NuevaCita(){
    return(
        <div class="principal">
            <div class="wrap">
                <form class="formulario" action="">
                    <h2>Registrar Cita</h2>
                    <input 
                        type="text" 
                        id="citaInput" 
                        class = "error" 
                        placeholder="Paciente" 
                        minlength="5" 
                        maxlength="40" 
                        pattern="[A-Za-z]"
                    />
                    <input type="date" id="fechaInput" class = "error" placeholder="Fecha"/>
                    <input type="time" id="horaInput" class = "error" placeholder="Hora"/>
                    <input type="button" class="boton" id="btn-agregar" value="Agregar Cita"/>
                </form>
            </div>
	    </div>

    )
}

export default NuevaCita;