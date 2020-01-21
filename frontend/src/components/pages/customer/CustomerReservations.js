import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link, withRouter} from 'react-router-dom';
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import {getUserReservationList} from './utils/CustomerFunctions';
import ProductList from '../../lists/ProductList';
import DeleteProductModal from '../../modals/DeleteProductModal'
import Paginacion from './../shop/Paginacion';
import ReservationList from '../../lists/reservations/ReservationList';

const CustomerReservations = ({ handleDrop,user_id}) => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    //ID del producto a eliminar
    //const [idProduct, setIdProduct] = useState(null);
    const [tamañoList, setTamañoList] = useState(null);
    const [serverError,setServerError] = useState (false);

    // const handleModalOpen = (id) => {
    //   if (id != null) {
    //     setModalOpen(!modalOpen);
    //     setIdProduct(id);
    //   }else{
    //     setModalOpen(!modalOpen);
    //     setIdProduct(null);
    //   }  
    // };

    useEffect( () => {
      setLoading(true);
      getUserReservationList(user_id)
      .then (res => {
          setList(res);
          console.log(res);
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
      setTamañoList(list.length);
            
  }, [user_id, tamañoList] );


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
                    <ReservationList list={list}/>
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
    </Fragment>
     
    );
}
 {/* <DeleteProductModal 
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        idProduct={idProduct}
        setIdProduct={setIdProduct}
        user_id={user_id} 
        tamañoList={tamañoList}
        setTamañoList={setTamañoList}
        /> */}
export default withRouter(CustomerReservations);
