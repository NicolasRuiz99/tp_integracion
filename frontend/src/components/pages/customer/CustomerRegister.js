import React, {Fragment, useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './../../../css/default.css';
import BreadCrumbs from './../../BreadCrumbs';
import axios from 'axios';
import {register, login} from './utils/CustomerFunctions';

const CustomerRegister = ({history}) => {

  //states del Registro
  const [email, setEMail] = useState ('');
  const [email2, setEMail2] = useState ('');
  const [contraseña, setContraseña] = useState ('');
  const [contraseña2, setContraseña2] = useState ('');
  //states del login
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  const [mailList, setMailList] = useState([]);
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);

  const handleSubmitRegister = async (e) => {
    e.preventDefault();    

    // Validar que todos los campos esten llenos
    if( email === '' || email2 === '' ||  contraseña === '' || contraseña2 === '' ){
      setError(true);
      // detener la ejecución
      return;
    }
    if (email !== email2 && contraseña !== contraseña2) {
      setError(true);
      return;
    }

    //Creacion del objeto
    const newCustomer = {email, contraseña};
    
    //Conectar con el backend
    register(newCustomer);

    setError(false);

    history.push ('/customer-account')
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault();    

    // Validar que todos los campos esten llenos
    if( mail === '' || pass === '' ){
      setError2(true);
      // detener la ejecución
      return;
    }

    //Creacion del objeto
    const customer = {mail, pass};
    
    //Conectar con el backend
    register(customer);

    setError2(false);

    history.push('/customer-orders')
  }

    return (
        <Fragment>
        <BreadCrumbs 
          name={"Nueva Cuenta/Acceder"}
        />
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
                { (error) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                <form onSubmit={handleSubmitRegister}>
                  <div className="form-group">
                    <label for="email-login">Email</label>
                    <input id="email-login" type="text" className="form-control" onChange={e => setEMail(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label for="email-login">Confirmar Email</label>
                    <input id="email-login" type="text" className="form-control" onChange={e => setEMail2(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label for="password-login">Contraseña</label>
                    <input id="password-login" type="password" className="form-control" onChange={e => setContraseña(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label for="password-login">Confirmar Contraseña</label>
                    <input id="password-login" type="password" className="form-control" onChange={e => setContraseña2(e.target.value)} />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outlined"><i className="fa fa-user-md"></i> Registrarse</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box">
                <h2 className="text-uppercase">Ingresar</h2>
                <p className="lead">Ya estás registrado?</p>
                <p className="text-muted">Si es así, por favor, ingresá tu email y contraseña.</p>
                <hr />
                { (error2) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                <form onSubmit={handleSubmitLogin}>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="text" className="form-control"  onChange={e => setMail(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label for="password">Contraseña</label>
                    <input id="password" type="password" className="form-control" onChange={e => setPass(e.target.value)} />
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

export default withRouter (CustomerRegister);
