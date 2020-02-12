import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link, withRouter} from 'react-router-dom';
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import {getUserReservationList, cancelReservation, getReservation} from './utils/CustomerFunctions';
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
    const [refresh,setRefresh] = useState (false);

    const handleModalOpen = (reserve) => {
    
        if (reserve != null) {
        setModalOpen(!modalOpen);
        let id= reserve.id;
        getReservation(id)
        .then(res => {
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
      const {id} = reserve;
      cancelReservation(id)
      .then(res => {
        setRefresh(true);
      })
      .catch (err => {
        setServerError(true);
      });
      setServerError(false);
      setReserve(null);
    }

    useEffect( () => {
      setLoading(true);
      getUserReservationList(user_id)
      .then (res => {
          setList(res);
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
            
  }, [user_id,refresh] );


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
          <CustomerSection handleDrop={handleDrop} user_id={user_id}/>
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
