import React, { useState } from "react";
import { NavLink } from 'react-router-dom'
import "./sidebar.css"
import { useAuth } from "./../../contextos/ContextoAuth"

function Sidebar() {
    const [ mostrarCita, setMostrarCita] = useState(true);
    const [ mostrarPaciente, setMostrarPaciente] = useState(true);
    const { usuario } = useAuth();
    
    return ( usuario &&
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
            <NavLink to="/nuevaCita">
              <i className="fa fa-home" aria-hidden="true" activeclassname="active"></i> Nueva Cita
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cita">
              <i className="fa fa-tachometer" aria-hidden="true"></i> Citas
            </NavLink>
          </li>
        </ul>
      : '' )}

        <li className="header" onClick={() => setMostrarPaciente(!mostrarPaciente)}>
          Paciente
        </li>
        {(mostrarPaciente ?
          <ul>
            <li>
              <NavLink to="/nuevoPaciente">
                <i className="fa fa-users" aria-hidden="true"></i> Nuevo Paciente
              </NavLink>
            </li>
            <li>
              <NavLink to="/Pacientes">
                <i className="fa fa-cog" aria-hidden="true"></i> Pacientes
              </NavLink>
            </li>
          </ul>
        : '')}
        
        <li>
          <NavLink exact to="/">
            <i className="fa fa-info-circle" aria-hidden="true"></i> Informacion
          </NavLink>
        </li>
      </ul>
    </div>
    )
}

export default Sidebar;