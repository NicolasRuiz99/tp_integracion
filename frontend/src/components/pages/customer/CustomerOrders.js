import React, { Fragment,useEffect,useState } from 'react';
import './../../../css/default.css';
import BreadCrumbs from './../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {getPurchaseList} from '../customer/utils/CustomerFunctions';
import PurchaseList from '../../lists/PurchaseList';
import {Link} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const CustomerOrders = ({setUser, handleDrop,user_id}) => {

    const [list,setList] = useState ([]);
    const [error,setError] = useState (false);
    const [serverError,setServerError] = useState (false);
    const [loading,setLoading] = useState (false);

    useEffect( () => {
      
      setLoading(true);
      getPurchaseList ({user_id})
      .then (res => {
          setLoading (false);
          setList (res)
      })
      .catch (err => {
          setServerError(true);
          return;
      });
      if (list.length === 0){
          setError(true);
      }
      setServerError (false);
      setError (false);        
  }, [user_id] );

    return (
        <Fragment>
        <BreadCrumbs 
          name={"Mis compras"}
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
                      <PurchaseList list={list}/>
                      }
                    </div>
                    }
                </div>
            }
            
            </div>
            <CustomerSection setUser={setUser} handleDrop={handleDrop}/>
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerOrders;
