import "./pacientes.css"
import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import {store} from './../../firebaseconfig'


function Tratamientos(){
    const { id } = useParams()
    const [tipoTratamiento,settipoTratamiento] = useState('')
    const [pagos,setPagos] = useState(0);
    const [total,setTotal] = useState(0);
    const [tratamientos,setTratamientos] = useState([]);
    const [nuevoPago, setNuevoPAgo] = useState('');

    useEffect(() => {
        const getEntidad = async () => {
            try {
                const { docs } = await store.collection('pacientes').doc(id).collection('tratamientos').get()
                const data = docs.map(item =>({id:item.id, ...item.data()}));
                setTratamientos(data)
                //console.log('tratamientos',tratamientos)
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
            pagos:[pagos],
            total: total,
        }


        console.log(tratamiento)

        try {
            await store.collection('pacientes').doc(id).collection('tratamientos').add(tratamiento);
            const { docs } = await store.collection('pacientes').doc(id).collection('tratamientos').get()
            const data = docs.map(item =>({id:item.id, ...item.data()}));
            setTratamientos(data)
            //console.log('tratamiento agregado',data.data)
            
        } catch (error) {
            console.log(error)
        }
        settipoTratamiento('')
        setPagos('')
        setTotal('')
    }

    const addNuevoPago = async (idt,pagos,tipoTratamiento,total) => {
        console.log("id",pagos)
        const trat = {
            tipoTratamiento: tipoTratamiento,
            pagos:[...pagos,nuevoPago],
            total: total,
        }
        store.collection('pacientes').doc(id).collection('tratamientos').doc(idt).set(trat);
        const { docs } = await store.collection('pacientes').doc(id).collection('tratamientos').get()
        const data = docs.map(item =>({id:item.id, ...item.data()}));
        setTratamientos(data)
    }

    return(
    <>
    <div className="containerTratamientos mx-auto" onSubmit={addTratamiento} >
        <form className="formtratamientos" >
            <div className="row">
                <h1 className="tituloT">Nuevo tratamiento</h1>
                <div className="form-group col-md-6">
                    <textarea 
                        className="form-control" 
                        placeholder="Tipo de tratamiento"
                        value={tipoTratamiento}
                        onChange={(e)=> settipoTratamiento(e.target.value)}
                    />
                </div>
                
                <div className="form-group col-md-3">
                    <label >Pago</label>
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

    {tratamientos.length ?<div className="containerTratamiento col-md-6">
        <h1 className="tituloT">Tratamiento</h1>
        <hr/>
        {tratamientos.map((trat)=><div className="row col-md-12" key={trat.id}>
            <h4 className="tituloT">Tipo : { trat.tipoTratamiento }</h4>
            <hr/>
            <h4>Pagos:</h4> 
                { trat.pagos.map((pago,index)=> <h4 key={index}>Pago {index+1}: ${pago} </h4>) } 
            Agregar Pago
            <input 
                type="number" 
                className="form-control col-md-4" 
                value={nuevoPago} onChange={(e)=> 
                setNuevoPAgo(e.target.value)}
            />
            <button onClick={(idt,pagos,tipoTratamiento,total)=>addNuevoPago(trat.id,trat.pagos,trat.tipoTratamiento,trat.total)} className="btn btn-danger col-md-4" >Agregar nuevo</button>
            <hr/>
            <h4>Total: ${ trat.total }</h4>
            <hr/>
            </div>
        )}

    </div>
    :''}
    </>
    )
}

export default Tratamientos;