import "./Pagina.css"
import { useAuth } from "./../contextos/ContextoAuth"
import { NavLink } from 'react-router-dom'

function Inicio() {
    const {usuario} = useAuth();
    //console.log(usuario)

    return (
        
    <div className="d-flex justify-content-center align-items-center">
        <div className="row col-lg-12">
         <section id="hero" className="d-flex justify-content-center align-items-center col-lg-8">
             
            <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
            <h1 className="Encabezadoprincipal">Visita nuestra clinica dental</h1>
            <h2 className="EncabezadoprincipalSub">Con nosotros tendras la sonrisa de tus sueños</h2>
            <NavLink className="btn btn-danger" to="/nuevaCita" >
                    Haz una cita
            </NavLink>
            </div>
        </section>
        

        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
            <div className="row">
                    <div className="col-lg-12" data-aos="fade-left" data-aos-delay="100">
                        <br></br>
                    </div>
            </div>
                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                        <img src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/10/02/141002173846_sp_dentista_624x351_thinkstock.jpg" className="img-fluid" width="600px" height="400px" alt=""/>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>Obtendras atencion de calidad, amable y calificada.</h3>
                        <p className="fst-italic">
                        Tenemos varias especialidades para adultos y para niños.
                        </p>
                        <ul>
                        <li><i className="bi bi-check-circle"></i> Ortodoncia.</li>
                        <li><i className="bi bi-check-circle"></i> Cirugía de terceros molares.</li>
                        <li><i className="bi bi-check-circle"></i> Odontopediatría.</li>
                        </ul>
                        <p>
                        y mas tratamientos especializados
                        </p>

                    </div>
                </div>

            </div>

        </section>
        </div>
        <br></br>

    </div>

    )
}

export default Inicio;
