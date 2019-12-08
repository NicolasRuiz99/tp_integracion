import React, {useState} from 'react';
import './../../css/default.css';
//import axios from 'axios';

const STATE_INICIAL = {
  nombre: '',
  apellido: '',
  email: '',
  asunto: '',
  mensaje: ''
};

const Contact = () => {
  //Valores iniciales del state

  const [valores, setValores] = useState(STATE_INICIAL);
  const [error, setError] = useState(false);

  const handleChange = e => {
    setValores({ 
      [e.target.name] : e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {nombre, apellido, email, asunto, mensaje} = valores;

    // Validar que todos los campos esten llenos
    if(nombre === '' || apellido === '' || email === '' || asunto === '' ||  mensaje === '' ){
      setError(true);

      // detener la ejecución
      return;
    }

    //Creacion del objeto
    // const nuevoMensaje = {...valores};
  
    //Conectar con el backend
    // const form = await axios.post('/api/form', {
    //   nombre,
    //   apellido,
    //   email,
    //   asunto,
    //   mensaje
    // })

    setValores(STATE_INICIAL);
    setError(false);
  }

  return (
    <div id="content">
        <div id="heading-breadcrumbs" className="brder-top-0 border-bottom-0">
        <div className="container">
          <div className="row d-flex align-items-center flex-wrap">
            <div className="col-md-7">
              <h1 className="h2">Contacto</h1>
            </div>
            <div className="col-md-5">
              <ul className="breadcrumb d-flex justify-content-end">
                <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                <li className="breadcrumb-item active">Contacto</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
                <p className="lead">Tenés curiosidad sobre un producto? Tenés algún tipo de problema con un producto?.</p>
                <p className="text-sm">Por favor, sentíte libre de contactarnos, nuestro servicio de atención al cliente trabaja para vos 24/7.</p>
                <div className="heading">
                  <h3>Formulario de Contacto</h3>
                </div>
                { (error) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="firstname">Nombre</label>
                        <input id="firstname" type="text" className="form-control"
                        onChange={handleChange}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="lastname">Apellido</label>
                        <input id="lastname" type="text" className="form-control"
                        onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email">Email</label>
                        <input id="email" type="text" className="form-control"
                        onChange={handleChange}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="subject">Asunto</label>
                        <input id="subject" type="text" className="form-control"
                        onChange={handleChange}/>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="message">Mensaje</label>
                        <textarea id="message" className="form-control"
                        onChange={handleChange}></textarea>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-outlined"><i className="fa fa-envelope-o"></i> Enviar Mensaje</button>
                    </div>
                  </div>
                  <hr />
                </form>
              </section>
            </div>
            <div className="col-lg-4">
            <hr />
              <section className="bar mb-0">
                    <h3 className="text-uppercase">Dirección</h3>
                    <p className="text-sm">En frente de la Plaza Ramirez<br/>San Martín<br/>456 <br/>Argentina<br/><strong>Concepción del Uruguay, Entre Ríos</strong></p>
                    <h3 className="text-uppercase">Call center</h3>
                    <p className="text-muted text-sm">Éste número es totalmente gratis si llamas desde Argentina.</p>
                    <p><strong>+54 3442 425688 </strong></p>
                    <h3 className="text-uppercase">Soporte Electrónico</h3>
                    <p className="text-muted text-sm">Por favor, sentíte libre de escribirnos un email.</p>
                    <ul className="text-sm">
                    <li><strong><a href="mailto:">soporte-indumentariaonline@hotmail.com</a></strong></li>
                    </ul>
               </section>
               <hr />
            </div>
          </div>
        </div>
        </div>
    );
}

export default Contact;
