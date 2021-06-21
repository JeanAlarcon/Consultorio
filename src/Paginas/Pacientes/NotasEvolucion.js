import "./pacientes.css"
import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import {store} from './../../firebaseconfig'


function NotasEvolucion(){
    const { id } = useParams()
    const [Nota,setNota] = useState('')
    const [Notas,setNotas] = useState([]);

    useEffect(() => {
        const getEntidad = async () => {
            try {
                const { docs } = await store.collection('pacientes').doc(id).collection('notas').get()
                const data = docs.map(item =>({id:item.id, ...item.data()}));
                setNotas(data)
                //console.log('tratamientos',tratamientos)
            } catch (error) {
                console.log(error)
            }
        }
        getEntidad()
    },[])

    const addNota = async (event) => {
        event.preventDefault()
        var date = new Date();
        const fechaHoy = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`
        const nota = {
            nota: Nota,
            fecha: fechaHoy,
        }
        console.log(nota)

        try {
            await store.collection('pacientes').doc(id).collection('notas').add(nota);
            const { docs } = await store.collection('pacientes').doc(id).collection('notas').get()
            const data = docs.map(item =>({id:item.id, ...item.data()}));
            setNotas(data)
            //console.log('tratamiento agregado',data.data)
            
        } catch (error) {
            console.log(error)
        }
        setNota('')
    }


    return(
    <>
    <div className="containerTratamientos col-md-12 mx-auto">
        <form onSubmit={addNota}>
                <h1>Nueva nota de evolución</h1>
                <div className="form-group col-md-12">
                    <textarea 
                        className="form-control" 
                        placeholder="Descripcion de la nota"
                        value={Nota}
                        onChange={(e)=> setNota(e.target.value)}
                    />
                <div className="col">
                    <input type="submit" className="btn btn-danger col-md-3" value="Agregar" />
                </div>
            </div>
        </form>
    </div>

    {Notas.length ?<div className="containerTratamiento">
        <h1 className="tituloT">Notas de evolucion</h1>
        <hr/>
        {Notas.map((nota)=><div className="row col-md-12" key={nota.id}>
            <div className="col-md-4">
            <h4>Fecha : { nota.fecha }</h4>
            <hr/>
            </div>
            <div className="col-md-8">
                <h4>Descripcion</h4>
                <h4>{ nota.nota }</h4>
                <hr/>
            </div>    
            </div>
        )}

    </div>
    :''}
    </>
    )
}

export default NotasEvolucion;