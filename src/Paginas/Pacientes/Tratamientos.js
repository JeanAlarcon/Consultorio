import "./pacientes.css"
import React, { useState } from "react";
import { useParams } from "react-router";
import {store} from './../../firebaseconfig'


function Tratamientos(){
    const { id } = useParams()
    const [tipoTratamiento,settipoTratamiento] = useState('')
    const [pagos,setPagos] = useState('');
    const [total,setTotal] = useState('');

    const addTratamiento = async (event) => {
        event.preventDefault()

        const tratamiento = {
            tipoTratamiento: tipoTratamiento,
            pagos:pagos,
            total: total,
            id
        }


        console.log(tratamiento)

        try {
            const data = await store.collection('tratamientos').add(tratamiento);
            console.log('tratamiento agregado')
        } catch (error) {
            console.log(error)
        }
        settipoTratamiento('')
        setPagos('')
        setTotal('')
    }

    return(
    <>
    <div className="containerTratamientos" onSubmit={addTratamiento} >
        <form>
            <div className="row">
                <h1>Tratamientos</h1>
                <div className="form-group col-md-6">
                    <textarea 
                        className="form-control" 
                        placeholder="Tipo de tratamiento"
                        value={tipoTratamiento}
                        onChange={(e)=> settipoTratamiento(e.target.value)}
                    />
                </div>
                
                <div className="form-group col-md-3">
                    <label >Pagos</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="pagos" 
                        placeholder="Pagos" 
                        value={pagos}
                        onChange={(e)=> setPagos(e.target.value)}
                    />
                </div>
                <div className="form-group col-md-3">
                    <label >Total</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        id="total" 
                        placeholder="Total"
                        value={total}
                        onChange={(e)=> setTotal(e.target.value)}
                    />
                </div>
                <div className="col">
                    <input type="submit" className="btn btn-danger col-md-3" value="Agregar" />
                </div>
            </div>
        </form>
    </div>

    <div className="containerTratamientos">
        <h1>Tratamientos</h1>
    </div>
    </>
    )
}

export default Tratamientos;