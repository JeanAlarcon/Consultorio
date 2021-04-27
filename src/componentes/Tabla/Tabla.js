import React,{ useState } from "react"
import Encabesado from "./Encabesado";
import Filas from "./Filas";
import ActionsMenu from "./ActionsMenu";
import "./Tabla.css"

function Tabla({titulo}) {
  const [consultas, setConsultas] = useState([
    {nombre:'Consulta 1',cliente:'Ciente 2',diagnostico:'diagnostico 1'},
    {nombre:'Consulta 2',cliente:'Cliente 2',diagnostico:'diagnostico 2'}
  ]);
  const columnas = consultas.length > 0 ? Object.keys(consultas[0]) : []; 
  return (<div className="tabla">
  <ActionsMenu titulo={titulo}/>
  <table className="table table-striped">
    <Encabesado columnas={columnas} />
    <tbody id="lista-consultas">
      {consultas.map((consulta,index) => 
        <Filas consulta={consulta} index= {index} />
      )}
    </tbody>
</table>
</div>)
}

export default Tabla;
