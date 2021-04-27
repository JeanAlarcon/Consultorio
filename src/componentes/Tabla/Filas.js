function Filas({consulta,index}){
    return(<tr>
    <th scope="row">{index}</th>
        <td>{consulta.nombre}</td>
        <td>{consulta.cliente}</td>
        <td>{consulta.diagnostico}</td>
        <td>
            <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn-editar" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Editar</button>
                <button type="button" class="btn-eliminar">Eliminar</button>
            </div>
        </td>
        </tr>)
}

export default Filas;