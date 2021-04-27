function Filas({fila,index,columnas}){
    return(<tr>
    <th scope="row">{index}</th>
    {columnas.map((columna) =><td> {fila[columna]} </td>)}
        
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn-editar" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Editar</button>
                <button type="button" className="btn-eliminar">Eliminar</button>
            </div>
        </td>
        </tr>)
}

export default Filas;