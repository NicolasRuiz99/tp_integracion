import React, {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
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
   const [used, setUsed] = useState(false);

   useEffect (()=>{
      setPc (porc);
      setDate (fecha);
   },[porc,fecha])

   const handleClick = () => {
      editarCupon(date,pc, used);
      handleModalOpen(null);
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
            <div className="form-group row">
            <div className="col-sm-1 col-lg-2" style={{marginLeft:'-2.5rem', marginTop:'0.1rem'}}> 
                     <input
                     style={{background:'#2af'}}
                     type="checkbox"
                     checked={used}
                     onChange={() => setUsed(!used)}
                     />
               </div>
               <div className="col-sm-4 col-lg-5">
                  <label>Inhabilitar</label>
               </div>
               <div className="col-sm-2 col-md-5">
               {(used) ? <p className="text-danger">Una vez inhabilitado el cupón, éste no puede volver a habilitarse.</p> : null}
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

const AddCouponModal = ({modalOpen, handleModalOpen, agregarCupon}) => {
   const [pc, setPc] = useState('');
   const [cad_date, setCad_date] = useState('');

   const handleClick = () => {
      agregarCupon(pc,cad_date);
      handleModalOpen(null);
   }

   useEffect (()=>{
      setPc (0);
      setCad_date (moment().format('YYYY-MM-DD'));
   },[]);

   return (
        <>
        <Modal show={modalOpen} onHide={() => handleModalOpen(null)} style={{'vertical-align': 'middle', top: '25%',
        bottom: '20%',
        left: '6%',
        transform: 'translate(-50%, -50%) !important'}}>
            <Modal.Header className="modal-header" closeButton>
               <Modal.Title >
                  <h4 className="modal-title">Agregar cupón</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="form-group row">
               <label  className="col-sm-4 col-lg-2 col-form-label">
                  Porcentaje:
               </label>
               <div className="col-sm-8 col-lg-7">
                  <input type="number" class="form-control"
                  defaultValue={pc} 
                  min="0"
                  max="100" 
                  onChange={e => setPc(e.target.value)}/>
               </div>
            </div>
            <div className="form-group row">
               <label  className="col-sm-4 col-lg-3 col-form-label">
                  Fecha límite:
               </label>
               <div className="col-sm-8 col-lg-6" style={{marginLeft:'-1.8rem'}}>
                    <input 
                     type="date" 
                     className="form-control"
                     defaultValue={cad_date}
                     min={moment().format('YYYY-MM-DD')}
                     max={moment('01/01/2021').format('YYYY-MM-DD')}
                     onChange={e => setCad_date(e.target.value)}
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
                  Agregar
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
                     <input style={{marginLeft:'-0.3rem'}} 
                     type="radio"
                     value='cancelled'
                     checked={cancelar}
                     onChange={handleChange}
                     />
                     <span style={{marginLeft:'-1.1rem'}}>Cancelada</span>
               </div>
               <div className="checkbox">
                     <input  style={{marginRight:'-0.5rem', marginLeft:'1rem'}}
                     type="radio"
                     value='success'
                     checked={completado}
                     onChange={handleChange}
                     />
                     <span style={{marginRight:'1rem',  marginLeft:'-1rem'}}>Completada</span>
               </div>
               <div className="checkbox">
                     <input  
                     type="radio"
                     value='pending'
                     checked={pendiente}
                     onChange={handleChange}
                     />
                     <span style={{marginLeft:'-1rem'}}>En proceso</span>
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

const ReservationDetailModal = ({modalOpen, handleModalOpen, reserva}) => {

   return (
        <>
        <Modal show={modalOpen} onHide={() => handleModalOpen(null)} style={{'vertical-align': 'middle', top: '25%',
        bottom: '20%',
        left: '6%',
        transform: 'translate(-50%, -50%) !important'}}>
            <Modal.Header className="modal-header" closeButton>
               <Modal.Title >
                  <h4 className="modal-title">Detalles de la reserva #{reserva.id}</h4>
               </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 <h5 className="text-center">
                    El producto {reserva.name} de color {reserva.color} fue reservado por el 
                    &nbsp; <Link to={`/admin-page/customer-detail/${reserva.id_user}`}>
                    cliente #{reserva.id_user}</Link> el {moment(reserva.date).utc().format('DD/MM/YYYY')}&nbsp; 
                    con un stock de {reserva.stock} y precio total de ${reserva.price}.
                  </h5>
            </Modal.Body>
            <Modal.Footer>
               <div style={{'padding-right': '6px'}}>
               <Button variant="primary" onClick={() => handleModalOpen(null)} className="btn btn-success" >
                  Cerrar
               </Button>
               </div>
            </Modal.Footer>
        </Modal>
      </>
    )
}

const DeleteProductsModal = ({modalOpen, handleModalOpen, eliminarProducto}) => {
   const handleClick = () => {
        handleModalOpen(null);
        eliminarProducto();
   }
    return (
        <>
        <Modal show={modalOpen} onHide={() => handleModalOpen(null)} style={{'vertical-align': 'middle', top: '25%',
        bottom: '20%',
        left: '6%',
        transform: 'translate(-50%, -50%) !important'}}>
            <Modal.Header className="modal-header" closeButton>
               <Modal.Title >
                  <h4 className="modal-title">Eliminar productos</h4>
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

export {DeleteReviewsModal,
       ModifySale,
       EditCouponModal,
       AddCouponModal,
       ReservationDetailModal,
       DeleteProductsModal
      };