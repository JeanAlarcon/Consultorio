import React from 'react'

const contextoPaciente = React.createContext();

const proovedorPaciente = ({children}) => {
    return({children})
}

export {contextoPaciente,proovedorPaciente}