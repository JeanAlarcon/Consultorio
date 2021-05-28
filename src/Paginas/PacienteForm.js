import React, {useState} from 'react';
import {Formulario, ContenedorTerminos, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError, LabelTerminos, Titulo} from './../elementos/Formularios';
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
  const [terminos, cambiarTerminos] = useState({});
  const [formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    direccion: /^[a-zA-Z0-9\s\-.,#]{1,40}$/, // Letras, numeros, guion_bajo y signo gato
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    //password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^[0-9\s-]{10,14}$/, // 10 a 14 numeros.
    edad: /^[0-9]{1,2}$/ // 1 a 2 numeros.
  }

  //const handleChecked = async (e) => {
    //cambiarTerminos({
      //...terminos,
      //[e.target.name] : e.target.checked
    //});
  //}

  const handleChecked = async (e) => {
    const {name, value} = e.target;
    console.log(name, value);
    cambiarTerminos({
      ...terminos,
      [e.target.name] : e.target.value
    });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if(
      nombre.valido === 'true' &&
      apellido.valido === 'true' &&
      edad.valido === 'true' &&
      direccion.valido === 'true' &&
      correo.valido === 'true' &&
      telefono.valido === 'true' 
      
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
            <LabelTerminos htmlFor="masculino">
                Masculino:
                <input type="radio" name="genero" value="masculino" id="terminos" onChange={handleChecked}
                />
                Femenino:
                <input type="radio" name="genero" value="femenino" id="terminos" onChange={handleChecked}
                />              
            </LabelTerminos>  
          </ContenedorTerminos>  

          <ContenedorTerminos>
            <Titulo>Padece o ha padecido alguna de las siguientes enfermedades.</Titulo> 
          
            <LabelTerminos>
              <h5>Fiebre reumática o enfermedad cardiaca reumática</h5> 
            </LabelTerminos>
        
            <LabelTerminos htmlFor="pregunta1"> 
              Si
              <input type="radio" name="pregunta1" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta1" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Enfermedades cardiovasculares</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta2"> 
              Si
              <input type="radio" name="pregunta2" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta2" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Diabetes</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta3"> 
              Si
              <input type="radio" name="pregunta3" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta3" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Hepatitis</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta4"> 
              Si
              <input type="radio" name="pregunta4" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta4" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>VIH positivo/SIDA</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta5"> 
              Si
              <input type="radio" name="pregunta5" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta5" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Gastritis o úlceras gástricas</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta6"> 
              Si
              <input type="radio" name="pregunta6" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta6" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Problemas renales</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta7"> 
              Si
              <input type="radio" name="pregunta7" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta7" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Anemia</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta8"> 
              Si
              <input type="radio" name="pregunta8" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta8" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Presión arterial baja o alta</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta9"> 
              Si
              <input type="radio" name="pregunta9" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta9" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Sangrado anormal con extracciones dentales o cortaduras</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta10"> 
              Si
              <input type="radio" name="pregunta10" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta10" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Se le hacen moretones con facilidad</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta11"> 
              Si
              <input type="radio" name="pregunta11" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta11" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Ha requerido transfuciones sanguíneas</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta12"> 
              Si
              <input type="radio" name="pregunta12" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta12" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>

            <LabelTerminos>
              <h5>Asma</h5> 
            </LabelTerminos> 
            <LabelTerminos htmlFor="pregunta13"> 
              Si
              <input type="radio" name="pregunta13" id="terminos" value="si"onChange={handleChecked}/>
              No
              <input type="radio" name="pregunta13" id="terminos" value="no"onChange={handleChecked}/>              
            </LabelTerminos>


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