import "./inicio.css"

function Inicio() {
    return (
        <div className="inner">
            <form>

                <h3>Iniciar secion</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Escribe el email" />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Escribe la contraseña" />
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Continuar</button>
            </form>
        </div>
    )
}

export default Inicio;
