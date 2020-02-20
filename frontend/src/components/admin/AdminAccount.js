import React, { Fragment,useEffect,useState } from 'react';
import '../../css/default.css';
import BreadCrumbs from '../BreadCrumbs';
import {modUserInfo, getUserInfo} from '../pages/customer/utils/CustomerFunctions';
import Error from '../messages/Error';
import Success from '../messages/Success';
import { validarEmail, validarPsw} from '../../validacion/validate';
import DeleteAccountModal from '../modals/DeleteAccountModal';
import LoadingDark from '../messages/LoadingDark';

const CustomerAccount = ({user_id, handleDrop}) => {

    const [loading,setLoading] = useState (false);
  
    //confirmacion email y contraseña
    const [psw,setPsw] = useState ('');
    const [psw2,setPsw2] = useState ('');
    const [email,setEmail] = useState ('');
    const [email2,setEmail2] = useState ('');
    
    //States para validar formularios
    const [errorMails,setErrorMails] = useState({});
    const [successMail,setSuccessMail] = useState(false);
    const [errorPSWS, setErrorPSWS] = useState({});
    const [successPSW,setSuccessPSW] = useState(false);
    const [serverError,setServerError] = useState (false);

    //Eliminar cuenta
    const [modalOpen, setModalOpen] = useState(false);
  
    const handleModalOpen = () => {
      setModalOpen(!modalOpen);
    }
    
    useEffect (()=>{
      window.scrollTo(0, 0);
      setLoading (true);
      getUserInfo (user_id)
          .then (res=>{
            setEmail (res.e_mail);
            setPsw (res.psw);
            setLoading(false);
          })
          .catch (err=>{
            setServerError (true);
            return;
          })
      setServerError (false);
    },[user_id]);
  
    const handleSubmitEmail = async(e) => {
      setSuccessMail (false);
      e.preventDefault();    
      const err = validarEmail(email, email2);
      if (err.diferente || err.formato || err.obligatorio) {  
        setErrorMails(err);
        setSuccessMail(false);
        return;
      } else{
        const userInfo = {
          id: user_id,
          e_mail: email,
          psw
        }
        modUserInfo (userInfo)
        .then (res => {
          setSuccessMail(true);
        })
        .catch (err => {
          setServerError (true);
          setSuccessMail(false);
          return;
        })
      }
      setErrorMails({});
      setServerError (false);
    }
  
    const handleSubmitPSW = async(e) => {
      setSuccessPSW(false);
      e.preventDefault();    
      const err = validarPsw(psw, psw2);
      if (err.obligatorio || err.diferente || err.incorrect){
          setErrorPSWS(err);
          setSuccessPSW(false);
          return;
      } else{  
        const userInfo = {
          id: user_id,
          e_mail: email,
          psw
        }
        modUserInfo (userInfo)
        .then (res => {
            setSuccessPSW (true);
        })
        .catch (err => {
            setSuccessPSW (false);
            setServerError(true);
            return;
        })
      }
      setErrorPSWS({});
      setServerError(false);
    }
  
  
    return (
      <Fragment >
      <BreadCrumbs 
        name={"Cuenta administrador"} isAdmin={true}
      />
        {(loading)?
        <LoadingDark/>
        :
        <div id="content">
        { (serverError) ? <Error texto="Error interno del servidor"/> : null}
        <div className="container">
          <div className="row bar">
            <div id="customer-account" className="col-lg-9 clearfix">
              <hr />
              <p className="lead">Cambiá tus datos personales,contraseña o e-mail acá.</p>
              <div className="box mt-5">
                <div className="heading">
                  <h4 className="text-uppercase">Cambiar e-mail</h4>
                </div>
                {errorMails.obligatorio && <Error texto={errorMails.obligatorio}/>}
                {errorMails.diferente && <Error texto={errorMails.diferente}/>}
                {errorMails.formato && <Error texto={errorMails.formato}/>}
                {successMail && <Success texto="Cambios realizados con éxito"/> }
                <form onSubmit = {handleSubmitEmail}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email1">Nuevo Email</label>
                        <input id="email1" type="text" className="form-control" defaultValue = {email} onChange = {e => setEmail(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email2">Confirmar Email</label>
                        <input id="email2" type="text" className="form-control" onChange = {e => setEmail2(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outlined"><i className="fa fa-save"></i> Guardar nuevo Email</button>
                  </div>
                </form>
                <div className="heading">
                  <h4 className="text-uppercase">Cambiar contraseña</h4>
                </div>
                { errorPSWS.obligatorio && <Error texto={errorPSWS.obligatorio} />}
                { errorPSWS.diferente && <Error texto={errorPSWS.diferente} />}
                { errorPSWS.incorrect && <Error texto={errorPSWS.incorrect} />}
                { successPSW && <Success texto="Cambios realizados con éxito" />}
                <form onSubmit = {handleSubmitPSW}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="password_1">Nueva contraseña</label>
                        <input id="password_1" type="password" className="form-control" onChange = {e => setPsw(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="password_2">Confirmar contraseña</label>
                        <input id="password_2" type="password" className="form-control" onChange = {e => setPsw2(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outlined"><i className="fa fa-save"></i> Guardar nueva contraseña</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
      <DeleteAccountModal
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        id_user={user_id}
        handleDrop = {handleDrop}
     />
      </Fragment>
    );
  }
  
  export default CustomerAccount;