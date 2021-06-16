import "./Login.css"
import React, { useState } from "react";
import {auth} from './firebaseconfig'
import {useHistory} from 'react-router-dom';

function Inicio() {
    const historia = useHistory()

    const [email,setEmail] = useState('');
    const [contrasena,setContrasena] = useState('');

    const iniciarSecion = async (e) => {
        e.preventDefault();
        try {
             await auth.signInWithEmailAndPassword(email,contrasena)
            .then((r)=>{
                historia.push('/')
            })
            .catch((err)=>{
                console.log(err)
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="inner">
            <form onSubmit={iniciarSecion}>

                <h3>Iniciar secion</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Escribe el email" 
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control"   
                        placeholder="Escribe la contraseña"
                        onChange={(e)=>setContrasena(e.target.value)}
                    />
                </div>


                <button type="submit" className="btn btn-dark btn-lg btn-block">Continuar</button>
            </form>
        </div>
    )
}

export default Inicio;
