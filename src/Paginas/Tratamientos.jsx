import "./especialidades.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser, faTeethOpen, faTooth, faChild, faUserMd} from '@fortawesome/free-solid-svg-icons'

function Especialidades(){
return(
    <section id="featured-services" className="featured-services">
    <div className="container" data-aos="fade-up">

      <div className="row">
        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
            <div className="icon"><FontAwesomeIcon icon={faTeethOpen}  size="2x"/></div>   
            <h4 className="title">Ortodoncia</h4>
            <p className="description">Es una alternativa de prevención y correccion de los problemas de las piezas dentales
            con el objeto de evitar intervenciones agresivas al paciente como pueden ser las cirujias y las estracciones.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
            <div className="icon"><FontAwesomeIcon icon={faTooth} size="2x" /></div>
            <h4 className="title">Cirujua de terceros molares</h4>
            <p className="description">Consiste en la extraccion de terceros molares, esta cirujia es de las mas comunes.
            Estas en buenas manos nuestra experiencia es amplia.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faChild} size="2x" /></div>
            <h4 className="title">Odontopediatria</h4>
            <p className="description">A tu pequeño le encantara conocernos, contamos con tratamientos profecionales
            y las mejores manos para atender a tus niños.</p>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faUserMd} size="2x" /></div>
            <h4 className="title">Extracciones</h4>
            <p className="description">Consiste en un procedimiento de cirujia oral para remover un diente o 
            porcion del mismo hueso ya sea por caries, fractura o restos de diente.</p>
          </div>
        </div>

        <h4 className="title">Operatoria</h4>
            

        <div className="col-md-6 col-lg-4 d-flex align-items-stretch mb-5 mb-lg-0">
          <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
            <div className="icon"><FontAwesomeIcon icon={faUser}  /></div>
            <h4 className="title">Odontopediatria</h4>
            <p className="description">A tu pequeño le encantara conocernos, contamos con tratamientos profecionales
            y las mejores manos para atender a tus niños</p>
          </div>
        </div>

      </div>

    </div>
  </section>
)
}

export default Especialidades;