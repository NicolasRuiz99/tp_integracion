import React, {Fragment, useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './../../../css/default.css';
import BreadCrumbs from './../../BreadCrumbs';
import {register, login,getEMails, login2, register2} from './utils/CustomerFunctions';
import { validarLogin, validarEmail, validarPsw } from '../../../validacion/validate';
import Error from '../../messages/Error';
import { googleLogin, facebookLogin } from './utils/firebaseLogin';
import 'bootstrap-social';
const CustomerRegister = ({history,setUser}) => {

  //states del Registro
  const [email, setEMail] = useState ('');
  const [email2, setEMail2] = useState ('');
  const [contraseña, setContraseña] = useState ('');
  const [contraseña2, setContraseña2] = useState ('');
  const [errorMail, setErrorMail] = useState(false);
  const [errorServer, setErrorServer] = useState(false);

  //states del login
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  //States de validacion
  const [errorLogin, setErrorLogin] = useState({});
  const [errorMails,setErrorMails] = useState({});
  const [errorPSWS, setErrorPSWS] = useState({});

  const [mailList, setMailList] = useState([]);
  const [error2, setError2] = useState(false);
  const [userError,setUserError] = useState (false);

  const handleGoogleLogin = () => {
    setError2 (false);
    googleLogin ()
    .then (res=> {
      login2 (res)
      .then (res =>{
        setUser (res.user_id);
        history.push('/');
      })
      .catch (err => {
        setError2 (true);
        return;
      })
    })
    .catch (err => console.log(err))
    setError2 (false);
  }

  const handleGoogleRegister = () => {
    setUserError (false);
    googleLogin ()
    .then (res=> {
      register2 (res)
      .then (res =>{
        setUser (res.user_id);
        history.push('/');
      })
      .catch (err => {
        if (err.type.includes('duplicate key')){
          setUserError (true);
        }else{
          setErrorServer (true);
        }
        return;
      })
    })
    .catch (err => console.log(err))
    setErrorServer (false);
    setUserError (false);
  }

  const handleFacebookLogin = () => {
    setError2 (false);
    facebookLogin ()
    .then (res=> {
      login2 (res)
      .then (res =>{
        setUser (res.user_id);
        history.push('/');
      })
      .catch (err => {
        setError2 (true);
        return;
      })
    })
    .catch (err => console.log(err))
    setError2 (false);
  }

  const handleFacebookRegister = () => {
    setErrorServer (false);
    setUserError (false);
    facebookLogin ()
    .then (res=> {
      register2 (res)
      .then (res =>{
        setUser (res.user_id);
        history.push('/');
      })
      .catch (err => {
        if (err.type.includes('duplicate key')){
          setUserError (true);
        }else{
          setErrorServer (true);
        }
        return;
      })
    })
    .catch (err => console.log(err))
    setErrorServer (false);
    setUserError (false);
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault();    

    getEMails ()
    .then (resp => setMailList (resp))
    .catch (err => {
      setErrorServer (true);
      return;
    })

    setErrorServer (false);

    //validar que el mail no este en uso

    if (mailList.find(item => {
      return item.e_mail === email
    })){
      setErrorMail (true);
      return;
    }

    setErrorMail (false);    
    const err1 = validarEmail(email, email2);
    const err2 = validarPsw(contraseña, contraseña2);
    if (err1.diferente || err1.formato || err1.obligatorio) {
      setErrorMails(err1);
      return;
    }
    if (err2.obligatorio || err2.diferente || err2.incorrect){
      setErrorPSWS(err2);
      return;
    }

    //Creacion del objeto
    const newCustomer = {email, contraseña};

    register(newCustomer)
    .then (res=>{
      setUser(res.user_id);
    })
    .catch (err => {
      setErrorServer(true);
      return;
    });
    //login({mail: newCustomer.email, pass: newCustomer.contraseña})
    //.then(resp => {
    //  setUser(resp.user_id);
    //})
    //.catch (err => {
    //  setErrorServer(true);
    //  return;
    //});
    setErrorMails({});
    setErrorServer(false);
    setErrorPSWS({});
   history.push('/');
  }

  const handleSubmitLogin = async (e) => {
    e.preventDefault();    
    const err = validarLogin(mail, pass);
    if( err.obligatorio ){
      setErrorLogin(err);
      // detener la ejecución
      return;
    }
    //Creacion del objeto
    const customer = {mail, pass};
    try{
      const resp = await login (customer)
      setUser (resp.user_id)
      }catch{
        setErrorLogin({});
        setError2 (true);
        return;
    }
    setErrorLogin({});
    setError2(false);
    history.push('/');
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
                {errorMails.obligatorio && <Error texto={errorMails.obligatorio}/>}
                {errorMails.diferente && <Error texto={errorMails.diferente}/>}
                {errorMails.formato && <Error texto={errorMails.formato}/>}
                { errorMail && <Error texto="El email ya está en uso" />}
                { userError && <Error texto="Usuario ya registrado" />}
                { errorPSWS.obligatorio && <Error texto={errorPSWS.obligatorio} />}
                { errorPSWS.diferente && <Error texto={errorPSWS.diferente} />}
                { errorPSWS.incorrect && <Error texto={errorPSWS.incorrect} />}
                { errorServer &&  <Error texto="Error interno del servidor"/> }
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
                  <ul className="text-center list-group list-group-flush">
                    <li className="list-group-item" ><button type="submit" className="btn btn-outlined"><i className="fa fa-user-md"></i> Registrarse</button></li>
                    <li className="list-group-item"><button type='button' className="btn btn-outlined btn-social btn-google"  onClick={handleGoogleRegister} ><i className="fab fa-google-plus-g"></i>Registrarse con Google</button></li>
                    <li className="list-group-item" ><button type='button' className="btn btn-outlined btn-social btn-facebook"  onClick={handleFacebookRegister }><i className="fab fa-facebook-square"></i>Registrarse con Facebook</button></li> 
                  </ul>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="box">
                <h2 className="text-uppercase">Ingresar</h2>
                <p className="lead">Ya estás registrado?</p>
                <p className="text-muted">Si es así, por favor, ingresá tu email y contraseña.</p>
                <hr />
                { error2 && <Error texto="Datos incorrectos" />}
                { errorLogin.obligatorio && <Error texto={errorLogin.obligatorio} />}
                <form onSubmit={handleSubmitLogin}>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input id="email" type="text" className="form-control"  onChange={e => setMail(e.target.value)}/>
                  </div>
                  <div className="form-group">
                    <label for="password">Contraseña</label>
                    <input id="password" type="password" className="form-control" onChange={e => setPass(e.target.value)} />
                  </div>
                  <ul className="text-center list-group list-group-flush">
                    <li className="list-group-item"><button type="submit" className="btn btn-outlined"><i className="fa fa-sign-in"></i> Ingresar</button></li>
                    <li className="list-group-item"><button type='button' className="btn btn-outlined btn-social btn-google"  onClick={handleGoogleLogin} ><i className="fab fa-google-plus-g"></i>Ingresar con Google</button></li>
                    <li className="list-group-item" ><button type='button' className="btn btn-outlined btn-social btn-facebook"  onClick={handleFacebookLogin }><i className="fab fa-facebook-square"></i>Ingresar con Facebook</button></li>
                  </ul>
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