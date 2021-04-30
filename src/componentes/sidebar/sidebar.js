import React, { useState } from "react";
import "./sidebar.css"

function Sidebar() {
    const [ mostrarCita, setMostrarCita] = useState(true);
    const [ mostrarPaciente, setMostrarPaciente] = useState(true);
    
    return (
      <div className="sidebar-container">
      <div className="sidebar-logo">
        Consultorio
      </div>

      <ul className="sidebar-navigation">
        <li className="header" onClick={() => setMostrarCita(!mostrarCita)}>
            Citas
        </li>
        {(mostrarCita ?
        <ul>
          <li>
            <a href="/nuevaCita">
              <i className="fa fa-home" aria-hidden="true"></i> Nueva Cita
            </a>
          </li>
          <li>
            <a href="/Cita">
              <i className="fa fa-tachometer" aria-hidden="true"></i> Citas
            </a>
          </li>
        </ul>
      : '' )}

        <li className="header" onClick={() => setMostrarPaciente(!mostrarPaciente)}>
          Paciente
        </li>
        {(mostrarPaciente ?
          <ul>
            <li>
              <a href="/nuevoPaciente">
                <i className="fa fa-users" aria-hidden="true"></i> Nuevo Paciente
              </a>
            </li>
            <li>
              <a href="/Pacientes">
                <i className="fa fa-cog" aria-hidden="true"></i> Pacientes
              </a>
            </li>
          </ul>
        : '')}
        
        <li>
          <a href="/">
            <i className="fa fa-info-circle" aria-hidden="true"></i> Informacion
          </a>
        </li>
      </ul>
    </div>
    )
}

export default Sidebar;