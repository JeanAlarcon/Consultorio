import React, { useContext } from 'react'
import { useState,useEffect } from 'react';
import {auth} from './../firebaseconfig'

const ContextoAuth = React.createContext();

const useAuth = () => {
    return useContext(ContextoAuth);
}

const ProovedorAuth = ({children}) => {
    const [usuario,setUsuario] = useState([])
    useEffect(() => {
        auth.onAuthStateChanged((usuario) => {
            setUsuario(usuario);
        })
    },[])

    return(
        <ContextoAuth.Provider value={{ usuario: usuario }}>
            {children}
        </ContextoAuth.Provider>
        )
}

export {ContextoAuth,ProovedorAuth,useAuth}