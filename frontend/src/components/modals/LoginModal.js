import React,{useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../../css/default.css';
import './../../css/modal.css';
import {login, getCustomerInfo, login2} from '../pages/customer/utils/CustomerFunctions'
import { validarLogin } from '../../validacion/validate';
import Error from '../messages/Error';
import { googleLogin } from '../pages/customer/utils/firebaseLogin';

const LoginModal = ({modalOpen,handleModalOpen,setUser,history}) => { 

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);
  //State de validacion
  const [errorCustomer, setErrorCustomer] = useState({});

  const handleGoogleLogin = () => {
    googleLogin ()
    .then (res=> {
      login2 (res)
      .then (res =>{
        setUser (res.user_id);
        handleModalOpen();
        history.push('/');
      })
      .catch (err => {
        setErrorCustomer (true);
        return;
      })
    })
    .catch (err => console.log(err))
    setErrorCustomer (false);
  }

  const handleAction = async (e) => {
    e.preventDefault()
    const err = validarLogin(mail, pass);
    if( err.obligatorio ){
      setErrorCustomer(err);
      // detener la ejecución
      return;
    }

    //Creacion del objeto
    const customer = {mail, pass};

    try{
    const resp = await login (customer);
    console.log(resp);
    const res = await getCustomerInfo(resp.user_id);
    console.log(res[0]);
    setUser (resp.user_id);


    }catch{
      setError(true);
      setErrorCustomer({});
      return;
    }

    setError(false);
    setErrorCustomer({});
    handleModalOpen ();

    history.push('/');
  }
    return (
        <>
          <Modal show={modalOpen} onHide={handleModalOpen}>
              <Modal.Header className="modal-header" closeButton>
                 <Modal.Title >
                    <h4 className="modal-title">Acceder</h4>
                 </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {/* Esto te lleva a la seccion compras del cliente */}
              {error && <Error texto="Datos incorrectos" />}
              {errorCustomer.obligatorio && <Error texto={errorCustomer.obligatorio} />}
              <form onSubmit={handleAction}>
                <div className="form-group">
                  <input id="email_modal" type="text" placeholder="Email" className="form-control" onChange={e => setMail(e.target.value)}/>
                </div>
                <div class="form-group">
                  <input id="password_modal" type="password" placeholder="Contraseña" className="form-control" onChange={e => setPass(e.target.value)}/>
                </div>
                <p className="text-center">
                  <button className="btn btn-outlined"><i className="fa fa-sign-in"></i> Acceder</button>
                  <button className="btn btn-outlined" type="button" onClick={handleGoogleLogin} ><i className="fa fa-sign-in"></i> Acceder con Google</button>
                </p>
              </form>
              <p className="text-center text-muted">Aún no estás registrado?</p>
              <p className="text-center text-muted"><Link to="/registro"><strong>Registráte ahora</strong></Link>! Es fácil y en menos de un minuto tendrás acceso a descuentos fantásticos y mucho más!</p>
              </Modal.Body>
              <Modal.Footer>
                 <Button variant="danger" onClick={handleModalOpen} className="btn btn-danger">
                    Cancelar
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default withRouter (LoginModal);
