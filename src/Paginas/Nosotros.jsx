import "./Nosotros.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faEnvelope, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

function Nosotros(){
    return(
    <section id="contact" className="contact">
         <div className="row col-lg-12">
        <div className="container">

            <div className="section-title">
                <h2>Contacto</h2>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

        </div>

        <div className="container">

            <div className="row mt-5">

                <div className="col-lg-6">

                    <div className="row">
                        <div className="col-md-12">
                        <div className="info-box">
                            <FontAwesomeIcon icon={faMapMarkerAlt}  size="2x"/>
                            <h3>Ubicación</h3>
                            <hr className="solid"></hr>
                            <p>Esq 16720, Av. de las Torres & León Jiménez, El Carmen, Xochimilco, Ciudad de México, CDMX</p>
                        </div>
                        </div>
                        
                        <div className="col-md-6 mx-auto">
                        <div className="info-box mt-4">
                            <FontAwesomeIcon icon={faPhoneAlt}  size="2x"/>
                            <h3>Telefono</h3>
                            <p>+52 5528 3698 56</p>
                        </div>
                        </div>
                    </div>

                </div>

                <div className="col-lg-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.694617982013!2d-99.03144398569016!3d19.25213645141658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0358cdaa65f5%3A0x5d6ce4d3d1bc8d6!2sLe%C3%B3n%20Jim%C3%A9nez%20%26%20Av.%20de%20las%20Torres%2C%20El%20Carmen%2C%2016720%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1623439258803!5m2!1ses-419!2smx" width="90%" height="100%" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>

            </div>

        </div>
        </div>
  </section>)
}

export default Nosotros;