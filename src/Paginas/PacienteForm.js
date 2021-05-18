import React, {useState} from 'react';
import {Formulario, Label, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError} from './../elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponenteInput from './../componentes/Input';
import "./Pagina.css"
import {store} from './../firebaseconfig'


const App = () => {
  const [nombre, cambiarNombre] = useState({campo: '', valido: null});
  const [apellido, cambiarApellido] = useState({campo: '', valido: null});
  const [edad, cambiarEdad] = useState({campo: '', valido: null});
  const [direccion, cambiarDireccion] = useState({campo: '', valido: null});
  const [correo, cambiarCorreo] = useState({campo: '', valido: null});
  const [telefono, cambiarTelefono] = useState({campo: '', valido: null});
  const [terminos, cambiarTerminos] = useState(false);
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    direccion: /^[a-zA-Z0-9\s\-.,#]{1,40}$/, // Letras, numeros, guion_bajo y signo gato
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^[0-9\s-]{10,14}$/, // 10 a 14 numeros.
    edad: /^[1-9]{1,2}$/ // 1 a 2 numeros.
  }

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if(
      nombre.valido === 'true' &&
      apellido.valido === 'true' &&
      edad.valido === 'true' &&
      direccion.valido === 'true' &&
      correo.valido === 'true' &&
      telefono.valido === 'true' &&
      terminos
    ){
      cambiarFormularioValido(true);
      cambiarNombre({campo: '', valido: null});
      cambiarApellido({campo: '', valido: null});
      cambiarEdad({campo: '', valido: null});
      cambiarDireccion({campo: '', valido: null});
      cambiarCorreo({campo: '', valido: null});
      cambiarTelefono({campo: '', valido: null});
      cambiarTerminos(false);

      // aqui ponemos el codigo para la base de datos
      const paciente = {
        nombre: nombre.campo,
        apellido: apellido.campo,
        edad: edad.campo,
        direccion: direccion.campo,
        correo: correo.campo,
        telefono: telefono.campo,
        terminos: terminos,
      }

      try {
        const data = await store.collection('pacientes').add(paciente)
        console.log('paciente agregado')
      } catch (error) {
        console.log(error)
      }

    }else{
      cambiarFormularioValido(false);
    }
  }

  return(
    <main>
      <Formulario action = "" onSubmit={onSubmit}>
          <ComponenteInput
              estado = {nombre}
              cambiarEstado = {cambiarNombre}
              tipo = "text"
              label = "Nombre"
              placeholder = "Nombre"
              name = "nombre"
              leyendaError = "Debes utilizar solo letras"
              expresionRegular = {expresiones.nombre}
          />

          <ComponenteInput
              estado = {apellido}
              cambiarEstado = {cambiarApellido}
              tipo = "text"
              label = "Apellido"
              placeholder = "Apellido"
              name = "apellido"
              leyendaError = "Debes utilizar solo letras"
              expresionRegular = {expresiones.nombre}
          />

          <ComponenteInput
              estado = {edad}
              cambiarEstado = {cambiarEdad}
              tipo = "text"
              label = "Edad"
              placeholder = "Edad"
              name = "edad"
              leyendaError = "Debes utilizar solo números"
              expresionRegular = {expresiones.edad}
          />

          <ComponenteInput
              estado = {direccion}
              cambiarEstado = {cambiarDireccion}
              tipo = "text"
              label = "Dirección"
              placeholder = "Dirección"
              name = "direccion"
              leyendaError = "Debes utilizar letras, números y #"
              expresionRegular = {expresiones.direccion}
          />

          <ComponenteInput
              estado = {correo}
              cambiarEstado = {cambiarCorreo}
              tipo = "email"
              label = "Correo"
              placeholder = "correo@correo.com"
              name = "correo"
              leyendaError = "El correo solo debe contener letras, números, puntos, arroba y simbolos "
              expresionRegular = {expresiones.correo}
          />

          <ComponenteInput
              estado = {telefono}
              cambiarEstado = {cambiarTelefono}
              tipo = "text"
              label = "Telefono"
              placeholder = "ejemplo: 55 12345678"
              name = "telefono"
              leyendaError = "Debes utilizar solo números y debe tener 10 dígitos"
              expresionRegular = {expresiones.telefono}
          />    

          <ContenedorTerminos>
          <Label>
              <b>Sexo.</b><p></p>
              Hombre:
              <input 
              type = "radio" name = "terminos" id = "terminos" checked = {terminos} onChange = {onChangeTerminos}
              />
              Mujer:
              <input 
              type = "radio" name = "terminos" id = "terminos" checked = {terminos} onChange = {onChangeTerminos}
              />              
          </Label>  
          </ContenedorTerminos>
           

        {formularioValido === false && <MensajeError>
            <p>
              <FontAwesomeIcon icon ={faExclamationTriangle}/>
              <b>Error:</b>El formulario no esta rellenado correctamente.
            </p>
        </MensajeError>}

        <ContenedorBotonCentrado>
            <Boton type = "submit">Enviar</Boton>
            {formularioValido === true && <MensajeExito>Formulario enviado exitosamente</MensajeExito>}
        </ContenedorBotonCentrado>
        
      </Formulario>
    </main>
  );
}



export default App;