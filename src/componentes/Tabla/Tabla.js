import React,{ useState } from "react"
import Encabesado from "./Encabesado";
import Filas from "./Filas";
import ActionsMenu from "./ActionsMenu";
import "./Tabla.css"

function Tabla({titulo, entidad, columnas = [], filas=[]}) {
  

  return (<div className="tabla">
    <ActionsMenu titulo={titulo}/>
      <table className="table table-striped">
        <Encabesado columnas={columnas} />
          <tbody id="lista-consultas">
            {filas.map((fila,index) =>
              <Filas fila={fila} index= {index} columnas={columnas} />
            )}
          </tbody>
      </table>
</div>)
}

export default Tabla;
