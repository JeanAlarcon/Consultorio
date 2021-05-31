import Encabesado from "./Encabesado";
import Filas from "./Filas";
import "./Tabla.css"

function Tabla({titulo, entidad, columnas = [], filas=[]}) {
  
  return (<div className="tabla">
    <h1>{titulo}</h1>
      <table className="table table-striped">
        <Encabesado columnas={columnas} />
          <tbody id="lista-consultas">
            {filas.map((fila,index) =>
              <Filas fila={fila} index= {index} columnas={columnas} key={`Tablade${entidad}`} />
            )}
          </tbody>
      </table>
</div>)
}

export default Tabla;
