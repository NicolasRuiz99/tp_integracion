import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import './../../css/default.css';

const CustomerRegister = () => {
    return (
        <Fragment>
        <div id="heading-breadcrumbs">
        <div className="container">
          <div className="row d-flex align-items-center flex-wrap">
            <div className="col-md-7">
              <h1 className="h2">Nueva Cuenta / Ingresar</h1>
            </div>
            <div className="col-md-5">
              <ul className="breadcrumb d-flex justify-content-end">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">Nueva Cuenta / Ingresá</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="box">
                <h2 className="text-uppercase">Nueva Cuenta</h2>
                <p className="lead">Aún no estás registrado?</p>
                <p>Al registrarte accedes a un mundo lleno de productos de la última moda, descuentos fantásticos y mucho más para vos! El proceso entero no te llevará más de un minuto!</p>
                <p className="text-muted">Si tenés alguna duda, por favor <Link to="/contact">contáctanos</Link>, nuestro servicio de atención al cliente trabaja 24/7.</p>
                <hr />
                <form action="/customer-orders" method="get">
                  <div className="form-group">
                    <label for="name-login">Nombre</label>
                    <input id="name-login" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="name-login">Apellido</label>
                    <input id="name-login" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="email-login">Email</label>
                    <input id="email-login" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="email-login">Confirmar Email</label>
                    <input id="email-login" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="password-login">Contraseña</label>
                    <input id="password-login" type="password" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="password-login">Confirmar Contraseña</label>
                    <input id="password-login" type="password" className="form-control" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outlined"><i className="fa fa-user-md"></i> Registrarse</button>
                  </div>
                  <hr />
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box">
                <h2 className="text-uppercase">Ingresar</h2>
                <p className="lead">Ya estás registrado?</p>
                <p className="text-muted">Si es así, por favor, ingresá tu email y contraseña.</p>
                <hr />
                <form action="/customer-order" method="get">
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="password">Contraseña</label>
                    <input id="password" type="password" className="form-control" />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outlined"><i className="fa fa-sign-in"></i> Ingresar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerRegister;
