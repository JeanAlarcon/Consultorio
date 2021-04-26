import React, { useState } from "react";
import "./sidebar.css"

function Sidebar() {
    const [ mostrarCita, setMostrarCita] = useState(true);

    return (
      <div class="sidebar-container">
      <div class="sidebar-logo">
        Consultorio
      </div>
      <ul class="sidebar-navigation">
        <li class="header" onClick={() => setMostrarCita(!mostrarCita)}>
          
            Citas
          
        </li>
        {(mostrarCita ?
        <ul>
          <li>
            <a href="/nuevaCita">
              <i class="fa fa-home" aria-hidden="true"></i> Nueva Cita
            </a>
          </li>
          <li>
            <a href="/Cita">
              <i class="fa fa-tachometer" aria-hidden="true"></i> Citas
            </a>
          </li>
        </ul>
      : '' )}
        <li class="header">Paciente</li>
        <li>
          <a href="/">
            <i class="fa fa-users" aria-hidden="true"></i> Nuevo Paciente
          </a>
        </li>
        <li>
          <a href="/Pacientes">
            <i class="fa fa-cog" aria-hidden="true"></i> Pacientes
          </a>
        </li>
        <li>
          <a href="/">
            <i class="fa fa-info-circle" aria-hidden="true"></i> Information
          </a>
        </li>
      </ul>
    </div>
    )
}

export default Sidebar;