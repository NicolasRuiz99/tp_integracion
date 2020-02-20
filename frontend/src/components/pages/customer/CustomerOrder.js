import React, { Fragment,useEffect,useState } from 'react';
import CustomerSection from './CustomerSection';
import BreadCrumbs from '../../BreadCrumbs';
import './../../../css/default.css';
import {getPurchaseInfo,listPurchaseItems,payMP} from'./utils/CustomerFunctions';
import PurchaseLine from '../../lists/purchase/PurchaseLine';
import uuid from 'uuid';
import moment from 'moment';
import Loading from '../../messages/Loading';
import Error from '../../messages/Error';

const CustomerOrder = ({props,user_id,handleDrop}) => {

    const [purchInfo,setPurchInfo] = useState ('');
    const [shipInfo,setShipInfo] = useState ('');
    const [coupInfo,setCoupInfo] = useState ('');
    const [state,setState] = useState ('');
    const [items,setItems] = useState ([]);
    const [error,setError] = useState (false);
    const [loading,setLoading] = useState (false);
    const [pay,setPay] = useState (false);

    const handleBuy = () => {
      let pc = null;
      if (coupInfo !== ''){
        pc = coupInfo.pc
      }
      payMP (items,purchInfo.id,pc,false)
      .then (res=>{
          window.location.replace(res);
      })
      .catch (err=>{
          setError(true);
          return;
      })
      setError (false);
    }

    useEffect (()=>{
        window.scrollTo(0, 0);
        setLoading (true);
        const purch_id = props.match.params.id;
        getPurchaseInfo (purch_id)
        .then (res =>{
            setPurchInfo (res.purchase);
            switch (res.purchase.state){
              case 'success':
                  setState ('Está completada');
                  break;
              case 'pending':
                  setState ('Está en proceso');
                  break;
              case 'pending-pay':
                  setState ('Está pendiente de pago');
                  setPay (true);
                  break;  
              case 'cancelled':
                  setState ('Está cancelada');
                  break;
            }
            if (res.shipping) {
                setShipInfo (res.shipping);
            }
            if (res.coupon) {
                setCoupInfo (res.coupon);
            } 
            setLoading (false);
        })
        .catch (err =>{
            setLoading (false);
            setError (true);
        })
        listPurchaseItems (purch_id)
        .then (res =>{
            setItems (res);
        })
        .catch (err =>{
            setLoading (false);
            setError (true);
        })
        setError (false);  
    },[user_id,props])

    return (
        <Fragment>
      <BreadCrumbs name={`Compra # ${purchInfo.id}`} />

      <div id="content">
        <div className="container">
          <div className="row bar">
            {(loading)?
              <Loading/> 
            :
            <div>
            {(error)?
            <Error texto="Hubo un error al recuperar los datos"/>
            :
            <div id="customer-order" className="col-lg-12">
            <hr />
            <p className="lead">La compra #{purchInfo.id} fue solicitada el <strong>{moment(purchInfo.date).utc().format('DD/MM/YYYY')}</strong> y en este momento <strong>{state}</strong>.</p>
            {(pay)?
                <div className="right-col">
                <button type="submit" className="btn btn-main" style={{float:"right"}}  onClick = {handleBuy} >Proceder al pago<i className="fa fa-chevron-right"></i></button>
                </div>
                :
                null
              } 
              <div className="box">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colspan="2" className="border-top-0">Producto</th>
                        <th className="border-top-0">Cantidad</th>
                        <th className="border-top-0">Precio unitario</th>

                        <th className="border-top-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <PurchaseLine
                            key = {uuid()}
                            item = {item}
                        />
                    ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="4" className="text-right">Subtotal de la compra</th>
                        <th>${purchInfo.price}</th>
                      </tr>
                      <tr>
                        <th colspan="4" className="text-right">Descuento</th>
                        {(coupInfo.id)?<th>${(coupInfo.pc*purchInfo.price)/100}</th>:<th>$0.00</th>}         
                      </tr>
                      <tr>
                        <th colspan="4" className="text-right">Total</th>
                        {(coupInfo.id)?<th>${purchInfo.price-((coupInfo.pc*purchInfo.price)/100)}</th>:<th>${purchInfo.price}</th>}
                      </tr>
                    </tfoot>
                  </table>
                </div>
                {(shipInfo.id)?
                <div className="row addresses">
                  <div className="col-md-10 text-center">
                    <h3 className="text-uppercase">Datos de envío</h3>
                    <p>Recibe: {`${shipInfo.name} ${shipInfo.surname}`}<br />DNI: {shipInfo.dni}<br />Provincia: {shipInfo.province}<br />Codigo postal: {shipInfo.zip}<br />Dirección:	{shipInfo.address}<br />Código de seguimiento: {(shipInfo.track_code)!=null? shipInfo.track_code : 'No disponible'}<br /> </p>
                  </div>
                </div>
                :
                null
                }
              </div>
              
            </div>
            }
            </div>
            }
            <CustomerSection handleDrop={handleDrop} user_id={user_id}/>
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerOrder;
