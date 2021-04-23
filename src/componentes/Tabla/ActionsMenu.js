import Alert from "../Alert";
import React,{ useState } from "react"

function ActionsMenu() {
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const alertSwitch = () => setMostrarAlerta(!mostrarAlerta)
  return (<div className="actions-menu">
  <h1>Citas</h1>
      <div className="actions-menu-content">
      {mostrarAlerta && <Alert alertSwitch={alertSwitch} />}
      </div>
</div>)
}

export default ActionsMenu;
