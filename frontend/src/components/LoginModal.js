import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../css/default.css';
import './../css/modal.css';

const LoginModal = (props) => { 

  const handleAction = (e) => {
    e.preventDefault();

    props.setIsLogged(false);
  }
    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
              <Modal.Header className="modal-header" closeButton>
                 <Modal.Title >
                    <h4 className="modal-title">Acceder</h4>
                 </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  {/* Esto te lleva a la seccion compras del cliente */}
              <form onSubmit={handleAction}>
                <div className="form-group">
                  <input id="email_modal" type="text" placeholder="Email" className="form-control"/>
                </div>
                <div class="form-group">
                  <input id="password_modal" type="password" placeholder="Contraseña" className="form-control"/>
                </div>
                <p className="text-center">
                  <button className="btn btn-outlined" onClick={props.handleModalOpen}><i className="fa fa-sign-in"></i> Acceder</button>
                </p>
              </form>
              <p className="text-center text-muted">Aún no estás registrado?</p>
              <p className="text-center text-muted"><Link to="/registro" onClick={props.handleModalOpen}><strong>Registráte ahora</strong></Link>! Es fácil y en menos de un minuto tendrás acceso a descuentos fantásticos y mucho más!</p>
              </Modal.Body>
              <Modal.Footer>
                 <Button variant="danger" onClick={props.handleModalOpen} className="btn btn-danger">
                    Cancelar
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default LoginModal;
