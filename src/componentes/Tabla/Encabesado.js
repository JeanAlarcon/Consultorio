
function Encabesado(props) {
    if (props.columnas.length === 0) return false;
    return (
        <thead className="table table-striped">
            <tr>
            <th scope="col">Id</th>
            
            {props.columnas.map((columna) => (<th scope="col" key={`columna${columna}`} >{columna}</th>))}
            
            <th scope="col"></th>
            </tr>
        </thead>
    )
}

export default Encabesado;
