import "./especialidades.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faTeethOpen, faTooth, faChild, faUserMd} from '@fortawesome/free-solid-svg-icons'

function Especialidades(){
return(
    <section id="featured-services" className="featured-services">
    <div className="containerEspecialidades" data-aos="fade-up">

    <div className="container">
        <h4 className="titulo">Especialidades</h4>
        <hr className="solid"></hr>
    </div>

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><FontAwesomeIcon icon={faTeethOpen}  size="2x"/></div>   
            <h4 className="title">Ortodoncia</h4>
            <p className="description">Es una alternativa de prevención y corrección de los problemas de las piezas dentales 
            con el objeto de evitar intervenciones agresivas al paciente como pueden ser las cirugías y las extracciones.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><FontAwesomeIcon icon={faTooth} size="2x" /></div>
            <h4 className="title">Cirugía de terceros molares</h4>
            <p className="description">Consiste en la extracción de terceros molares, esta cirugía es de las más comunes. 
            Estas en buenas manos nuestra experiencia es amplia.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faChild} size="2x" /></div>
            <h4 className="title">Odontopediatría</h4>
            <p className="description">A tu pequeño le encantara conocernos, contamos con tratamientos 
            profesionales y las mejores manos para atender a tus niños.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faUserMd} size="2x" /></div>
            <h4 className="title">Extracciones</h4>
            <p className="description">Consiste en un procedimiento de cirugía oral para remover un diente o 
            porción del mismo hueso ya sea por caries, fractura o restos de diente.</p>
          </div>
        </div>

        <div className="container">
          <h4 className="titulo">Operatoria</h4>
          <hr className="solid"></hr>
        </div>
        
        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faUser}  /></div>
            <h4 className="title">Endodoncia</h4>
            <p className="description">Consiste en eliminar la parte profunda del diente cuando se encuentra
            lesionado o infectado, este procedimiento permite salvar piezas dentales y reduce los casos de 
            extracción.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faUser}  /></div>
            <h4 className="title">Prótesis</h4>
            <p className="description">Consiste en restaurar la anatomía de las piezas dentales y recuperar 
            la funcionalidad de la boca para el bienestar del paciente..</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faUser}  /></div>
            <h4 className="title">Resinas</h4>
            <p className="description">Restauración permanente del diente a su color natural.</p>
          </div>
        </div>

        <div className="col-lg-12">
          <br></br>
        </div>

        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faUser}  /></div>
            <h4 className="title">Amalgama</h4>
            <p className="description">Restauración permanente del diente con aleaciones metálicas.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faUser}  /></div>
            <h4 className="title">Limpieza dental</h4>
            <p className="description">Remoción del sarro dental con ultrasonido y pulido dental.</p>
          </div>
        </div>


        <hr/>

      </div>

    </div>
  </section>
)
}

export default Especialidades;