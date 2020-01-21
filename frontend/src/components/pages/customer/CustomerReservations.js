import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link, withRouter} from 'react-router-dom';
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import {getUserReservationList, modReservation, getReservation} from './utils/CustomerFunctions';
import CancelReservationModal from '../../modals/CancelReservationModal'
import ReservationList from '../../lists/reservations/ReservationList';

const CustomerReservations = ({ handleDrop,user_id}) => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    //reserva a cancelar
    const [reserve, setReserve] = useState(null);
    const [serverError,setServerError] = useState(false);
    const [success,setSuccess] = useState (false);

    const handleModalOpen = (reserve) => {
    
        if (reserve != null) {
        setModalOpen(!modalOpen);
        let id= reserve.id;
        getReservation(id)
        .then(res => {
          //console.log(res);
          setReserve(res);
        })
        .catch(err => {
          setError(true);
        })
      }else{
        setModalOpen(!modalOpen);
        setReserve(null);
      }
      setError(false);  
     };

    const cancelarReserva = () => {
      const {id,date,stock,id_color_size} = reserve;
      let id_user = user_id;
      let state = 'cancelled';
      modReservation({id,date,stock,id_user,id_color_size,state})
      .then(res => {
        setSuccess(true);
      })
      .catch (err => {
        setServerError(true);
        setSuccess (false);
      });
      setServerError(false);
      setReserve(null);
    }

    useEffect( () => {
      setLoading(true);
      getUserReservationList(user_id)
      .then (res => {
          setList(res);
          //console.log(res);
          setLoading(false);
      })
      .catch (err=>{
          setServerError(true);
          return;
      });
      if (list.length === 0){
          setError (true);
      }
      setError (false);
      setServerError(false);
            
  }, [user_id] );


  return (
      <Fragment>
      <BreadCrumbs 
        name={"Mis reservas"}
      />
      <div id="content">
      <div className="container">
        <div className="row bar mb-0">
          <div id="customer-orders" className="col-md-9">
          <hr />
          <p className="text-muted">Si tenés alguna duda, por favor <Link to="/contact">contáctanos</Link>, nuestro servicio de atención al cliente trabaja 24/7.</p>
          { (success) ? <div className="alert alert-success mt-2 mb-5 text-center">Cambios realizados con éxito</div> : null}
          {(loading) ? 
              <div className="col-md-9 text-center"> 
              <Spinner animation="border" variant="info" size="lg"  />
              </div> 
              :
              <div>
                  { (serverError)?
                  <div className="alert alert-danger mt-2 mb-5 text-center">
                    Hubo un error al recuperar los datos
                  </div>
                  :
                  <div>
                    { (error) ?
                    <div className="alert alert-danger mt-2 mb-5 text-center">
                      No hay compras para mostrar
                    </div>
                    :
                    <ReservationList list={list} handleModalOpen={handleModalOpen} />
                    }
                  </div>
                  }
              </div>
          }
          </div>
          <CustomerSection handleDrop={handleDrop}/>
        </div>
      </div>
    </div>
    <CancelReservationModal 
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        cancelarReserva={cancelarReserva}
        user_id={user_id} 
  />
    </Fragment> 
    );
}
   
export default withRouter(CustomerReservations);
