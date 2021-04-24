import "./NuevaCita.css"

function NuevaCita(){
    return(<>
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

	<div class="citas">
		<div class="wrap">
			<ul class="lista" id="lista">
				<li><a href="/">Erick Andrade 22 de Abril 14:30</a></li>
				<li><a href="/">Luis Galicia 22 de Abril 12:30</a></li>
				<li><a href="/">Rodrigo Duarte 22 de Abril 11:30</a></li>
			</ul>
		</div>
	</div>
    </>
    )
}

export default NuevaCita;