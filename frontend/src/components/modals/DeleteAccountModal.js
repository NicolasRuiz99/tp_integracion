import React from 'react'
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../../css/default.css';
import './../../css/modal.css';
import { deleteCustomer } from '../pages/customer/utils/CustomerFunctions';

function DeleteAccountModal({modalOpen, handleModalOpen, history, handleDrop, id_user}) {
    const handleClick = () => {
        handleModalOpen ();
      //   deleteCustomer(id_user)
      //   .then(res => console.log(res))
      //   .catch(err => {return;})
        handleDrop();
        history.push('/')
    }
    return (
        <>
        <Modal show={modalOpen} onHide={handleModalOpen}>
            <Modal.Header className="modal-header" closeButton>
               <Modal.Title >
                  <h4 className="modal-title">Eliminar cuenta</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Estás seguro que quieres eliminar tu cuenta?</p>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-9" style={{'padding-left': '0'}}>
               <Button variant="danger" onClick={handleModalOpen} className="btn btn-danger">
                  Cancelar
               </Button>
               </div>
               <div style={{'padding-right': '6px'}}>
               <Button variant="primary" onClick={handleClick} className="btn btn-success" >
                  Aceptar
               </Button>
               </div>
            </Modal.Footer>
        </Modal>
      </>
    )
}

export default withRouter(DeleteAccountModal);