import React from 'react'
import { useState,useEffect } from 'react';
import { store } from "../firebaseconfig";


const ContextoPaciente = React.createContext();

const ProovedorPaciente = ({children}) => {
    const [pacientes,setPacientes] = useState([])
    useEffect(() => {
        const getEntidad = async () => {
            const { docs } = await store.collection('pacientes').get()
            const entidadf = docs.map(item =>({id:item.id, ...item.data()}));
            setPacientes(entidadf)
        }
        getEntidad()
    },[])

    return(
        <ContextoPaciente.Provider value={pacientes}>
            {children}
        </ContextoPaciente.Provider>
        )
}

export {ContextoPaciente,ProovedorPaciente}