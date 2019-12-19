import React,{useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../css/default.css';
import './../css/modal.css';
import {login, getCustomerInfo} from './pages/customer/utils/CustomerFunctions'

const LoginModal = ({modalOpen,handleModalOpen,setUser,history, setUserData}) => { 

  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleAction = async (e) => {
    e.preventDefault()

    // Validar que todos los campos esten llenos
    if( mail === '' || pass === '' ){
      setError(true);
      // detener la ejecución
      return;
    }

    //Creacion del objeto
    const customer = {mail, pass};
    
    //Conectar con el backend

    try{
    const resp = await login (customer);
    console.log(resp);
    const res = await getCustomerInfo(resp.user_id);
    console.log(res[0]);
    setUser (resp.user_id);
    setUserData(res[0]);


    }catch{
      setError (true);
      return;
    }

    /*
    login(customer).then(resp => {
      console.log(resp);
      
      setUser(resp.user_id);
    })
    .catch (err => {
      setError (true);
      return;
    })
    ;
    */

    setError(false);

    handleModalOpen ();

    history.push('/customer-orders')

    
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
              { (error) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
              <form onSubmit={handleAction}>
                <div className="form-group">
                  <input id="email_modal" type="text" placeholder="Email" className="form-control" onChange={e => setMail(e.target.value)}/>
                </div>
                <div class="form-group">
                  <input id="password_modal" type="password" placeholder="Contraseña" className="form-control" onChange={e => setPass(e.target.value)}/>
                </div>
                <p className="text-center">
                  <button className="btn btn-outlined"><i className="fa fa-sign-in"></i> Acceder</button>
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
