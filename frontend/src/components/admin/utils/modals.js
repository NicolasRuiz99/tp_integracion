import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './../../../css/default.css';
import './../../../css/modal.css';
import moment from 'moment';

const DeleteReviewsModal = ({modalOpen, handleModalOpen, eliminarReview}) => {
   const handleClick = () => {
        handleModalOpen(null);
        eliminarReview();
   }
    return (
        <>
        <Modal show={modalOpen} onHide={() => handleModalOpen(null)} style={{'vertical-align': 'middle', top: '25%',
        bottom: '20%',
        left: '6%',
        transform: 'translate(-50%, -50%) !important'}}>
            <Modal.Header className="modal-header" closeButton>
               <Modal.Title >
                  <h4 className="modal-title">Eliminar reseñas</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p>Se eliminarán los elementos seleccionados</p>
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

const EditCouponModal = ({modalOpen, handleModalOpen, editarCupon, porc, fecha}) => {
   const [pc, setPc] = useState('');
   const [date, setDate] = useState('');

   const handleClick = () => {
      if (pc === '' || date === '') {
         return;
      }
      handleModalOpen(null);
      editarCupon(pc,date);
   }

    return (
        <>
        <Modal show={modalOpen} onHide={() => handleModalOpen(null)} style={{'vertical-align': 'middle', top: '25%',
        bottom: '20%',
        left: '6%',
        transform: 'translate(-50%, -50%) !important'}}>
            <Modal.Header className="modal-header" closeButton>
               <Modal.Title >
                  <h4 className="modal-title">Editar cupón</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-group row">
               <label  className="col-sm-4 col-lg-2 col-form-label">
                    Porcentaje:
               </label>
               <div className="col-sm-8 col-lg-7">
                  <input type="number" class="form-control" 
                  defaultValue={porc}
                  min="0"
                  max="100" 
                  onChange={e => setPc(e.target.value)}/>
               </div>
            </div>
            <div className="form-group row">
               <label  className="col-sm-4 col-lg-2 col-form-label">
                  Fecha:
               </label>
               <div className="col-sm-8 col-lg-7">
                    <input 
                     type="date" 
                     className="form-control"
                     min={moment().format('YYYY-MM-DD')}
                     max={moment('01/01/2021').format('YYYY-MM-DD')}
                     onChange={e => setDate(e.target.value)}
                     defaultValue={fecha}
                     />
                </div>
            </div>
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

const ModifySale = ({modalOpen, handleModalOpen, changeState}) => {
   const [state,setState] = useState(null);
   const [cancelar, setCancelar] = useState(false);
   const [pendiente, setPendiente] = useState(false);
   const [completado, setCompletado] = useState(false);

   const handleClick = () => {
      if(state === null) {
         return;
      } else {
         handleModalOpen(null);
         changeState(state);
      }
    }

   const handleChange = (e) => {
      switch (e.target.value) {
         case 'cancelled':
            setCancelar(true);
            setCompletado(false);
            setPendiente(false);      
            break;
         case 'pending':
            setCancelar(false);
            setCompletado(false);
            setPendiente(true);      
            break;
         case 'success':
            setCancelar(false);
            setCompletado(true);
            setPendiente(false);      
            break;
         default:
            setCancelar(false);
            setCompletado(false);
            setPendiente(false);      
            break;
      }
      setState(e.target.value);
   }
    return (
        <>
        <Modal show={modalOpen} onHide={() => handleModalOpen(null)} style={{'vertical-align': 'middle', top: '25%',
        bottom: '20%',
        left: '6%',
        transform: 'translate(-50%, -50%) !important'}}>
            <Modal.Header className="modal-header" closeButton>
               <Modal.Title >
                  <h4 className="modal-title">Seleccione una opción</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{textAlign: 'center'}}>
               <div className="checkbox">
                     <input  
                     type="radio"
                     value='cancelled'
                     checked={cancelar}
                     onChange={handleChange}
                     />
                     <span>Cancelada</span>
               </div>
               <div className="checkbox">
                     <input  
                     type="radio"
                     value='success'
                     checked={completado}
                     onChange={handleChange}
                     />
                     <span>Completada</span>
               </div>
               <div className="checkbox">
                     <input  
                     type="radio"
                     value='pending'
                     checked={pendiente}
                     onChange={handleChange}
                     />
                     <span>En proceso</span>
               </div>
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

export {DeleteReviewsModal,
       ModifySale,
       EditCouponModal
      };