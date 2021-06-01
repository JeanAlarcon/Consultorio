import "./pacientes.css"

function Tratamientos(){
    return(
    <div className="containerTratamientos">
        <form>
            <div class="row">
                <h1>Tratamientos</h1>
                <div class="form-group col-md-6">
                    <textarea className="form-control" placeholder="Tipo de tratamiento"/>
                </div>
                
                <div class="form-group col-md-3">
                    <label for="pagos">Pagos</label>
                    <input type="text" className="form-control" id="pagos" placeholder="Pagos"/>
                </div>
                <div class="form-group col-md-3">
                    <label for="tital">Total</label>
                    <input type="text" className="form-control" id="total" placeholder="Total"/>
                </div>
                
            </div>
        </form>
    </div>
    )
}

export default Tratamientos;