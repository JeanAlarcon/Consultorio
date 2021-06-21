import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import {auth} from './../firebaseconfig'

const ContextoAuth = React.createContext();

const useAuth = () => {
    return useContext(ContextoAuth);
}

const ProovedorAuth = ({children}) => {
    const [usuario,setUsuario] = useState([])
    const [cargado,setcargado] = useState(false)
    useEffect(() => {
        auth.onAuthStateChanged((usuario) => {
            setUsuario(usuario);
            setcargado(true)
        })
    },[])

    return(
        <ContextoAuth.Provider value={{ usuario: usuario }}>
            {cargado && children}
        </ContextoAuth.Provider>
        )
}

export {ContextoAuth,ProovedorAuth,useAuth}