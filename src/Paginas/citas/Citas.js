import "./Citas.css"
import Tabla from "../../componentes/Tabla/Tabla";
import { useEffect, useState } from "react";
import { store } from "../../firebaseconfig";


function Pagina({titulo, entidad}) {

    const [filasf,setFilasf] = useState([]);
    const [columnasf, setColumnasf] = useState([]);
    const entidades = {
    citas : [
        {paciente:'Paciente 1',fecha:'fecha 1',hora:'10:01'},
        {paciente:'Paciente 2',fecha:'fecha 2',hora:'12:00 '},
        {paciente:'Paciente 3',fecha:'fecha 3',hora:'13:00'},        
        ],
    pacientes : [
        {nombre:'Paciente 1',apellido:'Apellido 1',edad:"20",direccion:'direccion 1',correo:'email@mail.com',telefono:"558462312"},
        {nombre:'Paciente 2',apellido:'Apellido 2',edad:"30",direccion:'direccion 2',correo:'email2@mail.com',telefono:"5615987463"},
        {nombre:'Paciente 3',apellido:'Apellido 3',edad:"40",direccion:'direccion 3',correo:'email3@mail.com',telefono:"5510568496"},
        ],
    };
    
    const filas = entidades[`${entidad}`];
    useEffect(() => {
        const getEntidad = async () => {
            var date = new Date();
            const fechaHoy = `${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`;
            const entidadf = [];
            console.log('fecha de hoy',fechaHoy)
            try {
                const citaRef = store.collection('citas');
                const query = await citaRef.where('fecha','==',fechaHoy).get();
                if(!query.empty){
                    query.forEach(item =>(entidadf.push({id:item.id, ...item.data()})));
                    //query.forEach(item =>(setFilasf([{id:item.id, ...item.data()}])));
                    
                    setFilasf(entidadf)
                    console.log("filas ",filasf.length)
                    setColumnasf(Object.keys(filas[0]))
                }else {
                    console.log("consulta con valores vacios");
                }
                
                //const entidadf = docs.map(item =>({id:item.id, ...item.data()}));
            } catch (error){
                console.log(error);
            }
        }
        getEntidad()
    },[])
        

    return (
        <>
        <div className="containerCitas mx-auto col-lg-12">
            {(filasf.length > 0 ? <Tabla titulo={titulo} entidad={entidad} columnas={columnasf} filas={filasf} key={entidad}/>
            :<span>No hay citas que mostrar</span>)}
        </div>
        </>
    
    )
}

export default Pagina;