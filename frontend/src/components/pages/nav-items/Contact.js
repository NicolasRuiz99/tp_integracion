import React, {useEffect} from 'react';
import './../../../css/default.css';
import BreadCrumbs from './../../BreadCrumbs';


const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);
  
  return (
    <div id="content">
      <BreadCrumbs 
        name={"Contacto"}
      />
      <div id="map">
      <iframe title="c del u" src="https://www.google.com/maps/d/embed?mid=1ICmf9529s60estVnwhWYPa5BRyn51Des" style={{
        border: '0',
        width: '100%',
        height: '315px',
        frameborder: '0'
      }} ></iframe>
      </div>
        <div id="contact" className="container">
          <div className="row">
            <div className="col-lg-8">
              <section className="bar">
              <hr />
                <div className="heading">
                  <h2>Estamos acá para ayudarte</h2>
                </div>
                <p className="lead">Tenés curiosidad sobre un producto? Tenés algún tipo de problema con un producto?</p>
                <p className="text-sm">Por favor, sentíte libre de contactarnos, nuestro servicio de atención al cliente trabaja para vos 24/7.</p>
              </section>
            </div>
            <div className="col-lg-4">
              <section className="bar mb-0">
                    <hr />
                    <h3 className="text-uppercase">Dirección</h3>
                    <p className="text-sm">En frente de la Plaza Ramirez<br/>San Martín<br/>456 <br/>Argentina<br/><strong>Concepción del Uruguay, Entre Ríos</strong></p>
                    
               </section>
            </div>
            <div className="col-lg-10">
              <section className="bar mb-0 text-center">
                    <hr />
                    <h3 className="text-uppercase">Call center</h3>
                    <p className="text-muted text-sm">Éste número es totalmente gratis si llamas desde Argentina.</p>
                    <p><strong>+54 3442 425688 </strong></p>
               </section>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Contact;
