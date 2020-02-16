import React, { Fragment,useEffect,useState } from 'react';
import './../../../css/default.css';
import BreadCrumbs from './../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {getPurchaseList,setPurchaseState} from '../customer/utils/CustomerFunctions';
import PurchaseList from '../../lists/purchase/PurchaseList';
import {Link} from 'react-router-dom';
import CancelPurchaseModal from '../../modals/CancelPurchaseModal';
import Loading from '../../messages/Loading';
import Info from '../../messages/Info';
import Error from '../../messages/Error';

const CustomerOrders = ({handleDrop,user_id}) => {

    const [list,setList] = useState ([]);
    const [error,setError] = useState (false);
    const [serverError,setServerError] = useState (false);
    const [loading,setLoading] = useState (false);
    const [purchase, setPurchase] = useState(null);
    const [refresh,setRefresh] = useState (false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect( () => {
      window.scrollTo(0,0);
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
      setServerError (false);
      setError (false);        
  }, [user_id, refresh] );

    const handleModalOpen = (purchase) => {
      
      if (purchase != null) {
      setModalOpen(!modalOpen);
      setPurchase(purchase);
    }else{
      setModalOpen(!modalOpen);
      setPurchase(null);
    }
    setError(false);  
  };

  const cancelarCompra = () => {
    const {id} = purchase;
    let state = "cancelled";
    setPurchaseState(id,state)
    .then(res => {
      setRefresh(true);
    })
    .catch (err => {
      setServerError(true);
    });
    setServerError(false);
    setPurchase(null);
  }

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
                <Loading/>
                :
                <div>
                    { (serverError)?
                    <Error texto="Hubo un error al recuperar los datos"/>
                    :
                    <div>
                      { (list.length === 0) ?
                      <Info texto="No hay compras para mostrar"/>
                      :
                      <PurchaseList list={list} handleModalOpen={handleModalOpen}/>
                      }
                    </div>
                    }
                </div>
            }
            
            </div>
            <CustomerSection user_id={user_id} handleDrop={handleDrop}/>
          </div>
        </div>
      </div>
      <CancelPurchaseModal
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        cancelarCompra={cancelarCompra}
        user_id={user_id} 
  />
      </Fragment>
    );
}

export default CustomerOrders;
