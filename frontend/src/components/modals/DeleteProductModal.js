import React from 'react'
import { withRouter } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../../css/default.css';
import './../../css/modal.css';
import {deleteWishlistItem} from './../pages/customer/utils/CustomerFunctions';

function DeleteProductModal({modalOpen, handleModalOpen, idProduct, setIdProduct, user_id, setTamañoList, tamañoList}) {
   const product_id = idProduct 
   const handleClick = () => {
        handleModalOpen(null);
        deleteWishlistItem({user_id, product_id})
        .then(res => {
           setTamañoList(tamañoList - 1);
        }).catch(err => {
           return;
        });
        setIdProduct(null);
    }


    return (
        <>
        <Modal show={modalOpen} onHide={() => handleModalOpen(null)} style={{'vertical-align': 'middle', top: '25%',
        bottom: '20%',
        left: '-6%',
        transform: 'translate(-50%, -50%) !important'}}>
            <Modal.Header className="modal-header" closeButton>
               <Modal.Title >
                  <h4 className="modal-title">Eliminar producto de la lista</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Estás seguro que deseas eliminar el producto de la lista?</p>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-9" style={{'padding-left': '0'}}>
               <Button variant="danger" onClick={() => handleModalOpen(null)} className="btn btn-danger">
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

export default withRouter(DeleteProductModal);