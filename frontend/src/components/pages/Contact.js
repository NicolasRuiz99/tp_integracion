import React from 'react';
import {Link} from 'react-router-dom';


const Contact = () => {
    return (
        <section className="my-5 py-5">
            <div className="container">
                <div className="well well-sm">
                    <h3><strong>Nuestra ubicación</strong></h3>
                </div>
            <div className="row">
                <div className="col-md7">
                <iframe title="c del u" src="https://www.google.com/maps/d/embed?mid=1ICmf9529s60estVnwhWYPa5BRyn51Des" style={{
                    border: '0',
                    width: '100%',
                    height: '315px',
                    frameborder: '0'
                }} allowFullscreen></iframe>
                </div>
                <div className="col-md-5">
                    <h4><strong>Contáctanos</strong></h4>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Nombre"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" placeholder="Teléfono"/>
                        </div>
                        <textarea className="form-control" cols="30" rows="3" placeholder="Mensaje" />
                        <Link className="btn btn-outline-primary text-uppercase  mt-1">
                           <i className="fa fa-paper-plane-o" aria-hidden="true"/>
                           <i className="fab fa-telegram-plane"/>
                           &nbsp;Enviar
                        </Link>
                    </form>
                </div>
            </div>
            </div>
        </section>
    );
}

export default Contact;

