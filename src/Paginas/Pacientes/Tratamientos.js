import "./pacientes.css"
import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import {store} from './../../firebaseconfig'


function Tratamientos(){
    const { id } = useParams()
    const [tipoTratamiento,settipoTratamiento] = useState('')
    const [pagos,setPagos] = useState([]);
    const [total,setTotal] = useState('');
    const [tratamientos,setTratamientos] = useState([]);
    const [nuevoPago, setNuevoPAgo] = useState('');

    useEffect(() => {
        const getEntidad = async () => {
            try {
                const { docs } = await store.collection('pacientes').doc(id).collection('tratamientos').get()
                const data = docs.map(item =>({id:item.id, ...item.data()}));
                setTratamientos(data)
                console.log('tratamientos',tratamientos)
            } catch (error) {
                console.log(error)
            }
        }
        getEntidad()
    },[])

    const addTratamiento = async (event) => {
        event.preventDefault()

        const tratamiento = {
            tipoTratamiento: tipoTratamiento,
            pagos:pagos,
            total: total,
        }


        console.log(tratamiento)

        try {
            /*const data = await store.collection('tratamientos').add(tratamiento);
            console.log('tratamiento agregado',data.id)
            const trat = data.id
            const tratamientos = {['tratamientos']:trat}
            await store.collection('pacientes').doc(id).set(tratamientos, {merge: true})*/
            const data = await store.collection('pacientes').doc(id).collection('tratamientos').add(tratamiento);
            console.log('tratamiento agregado',data.data)
            
        } catch (error) {
            console.log(error)
        }
        settipoTratamiento('')
        setPagos('')
        setTotal('')
    }

    const addNuevoPago = (idt,pagos,tipoTratamiento,total) => {
        console.log("id",pagos)
        const trat = {
            tipoTratamiento: tipoTratamiento,
            pagos:pagos+nuevoPago,
            total: total,
        }
        const data = store.collection('pacientes').doc(id).collection('tratamientos').doc(idt).set(trat);

    }

    return(
    <>
    <div className="containerTratamientos" onSubmit={addTratamiento} >
        <form>
            <div className="row">
                <h1>Nuevo tratamiento</h1>
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

    {tratamientos.length ?<div className="containerTratamientos">
        <h1>Tratamientos</h1>
        <hr/>
        {tratamientos.map((trat)=><div className="row col-md-6">
            <h4>Tipo : { trat.tipoTratamiento }</h4>
            <h4>Pagado: { trat.pagos } Agregar Pago
            </h4> <input type="number" className="form-control" value={nuevoPago} onChange={(e)=> setNuevoPAgo(e.target.value)}/>
            <button onClick={(idt,pagos,tipoTratamiento,total)=>addNuevoPago(trat.id,trat.pagos,trat.tipoTratamiento,trat.total)}>Agregar nuevo</button>
            <h4>Total: { trat.total }</h4>
            <hr/>
            </div>
        )}

    </div>
    :''}
    </>
    )
}

export default Tratamientos;