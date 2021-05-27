function Filas({fila,index,columnas}){
    return(<tr>
    <th class="table-secondary" scope="row" key={index}>{index}</th>
    {columnas.map((columna) =><td class="table-secondary" key={fila[columna]} > {fila[columna]} </td>)}
        
        <td class="table-secondary">
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn-editar"  data-bs-target="#staticBackdrop">Editar</button>
                <button type="button" className="btn-eliminar">Eliminar</button>
            </div>
        </td>
        </tr>)
}

export default Filas;