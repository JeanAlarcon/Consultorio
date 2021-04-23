
function Modal() {
    return (<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Nueva mascota</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

                <form className="row gx-3 gy-2 align-items-center" id="form">
                    <input type="hidden" id="indice" />
                    <div className="col-sm-5">
                    
                        <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Nombre" />
                    </div>
                    <div className="col-sm-5">
                        
                        <select className="form-select" id="duenos">
                        <option selected>Dueños</option>
                        <option >Esteban</option>
                        <option >Julian</option>
                        <option >Felix</option>
                        <option >Hugo</option>
                        <option >alexis</option>
                        
                        </select>
                    </div>
                    <div className="col-sm-5">
                        <label className="visually-hidden" for="specificSizeSelect">Preference</label>
                        <select className="form-select" id="tipo">
                        <option selected>Tipo de animal</option>
                        <option >Perro</option>
                        <option >Gato</option>
                        <option >Pajaro</option>
                        <option >Otro</option>
                        </select>
                    </div>

                    
                </form>



            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary" id="btnguardar" data-bs-dismiss="modal">Guardar</button>
            </div>
        </div>
    </div>
</div>)
  }
  
  export default Modal;
  