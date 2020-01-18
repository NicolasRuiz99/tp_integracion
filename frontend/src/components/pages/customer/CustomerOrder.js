import React, { Fragment,useEffect,useState } from 'react';
import CustomerSection from './CustomerSection';
import BreadCrumbs from '../../BreadCrumbs';
import './../../../css/default.css';
import {Link} from 'react-router-dom';
import {getPurchaseInfo,listPurchaseItems} from'./utils/CustomerFunctions';
import PurchaseLine from '../../lists/PurchaseLine';
import uuid from 'uuid';
import moment from 'moment';
import Spinner from 'react-bootstrap/Spinner';

const CustomerOrder = ({props,user_id}) => {

    const [purchInfo,setPurchInfo] = useState ('');
    const [shipInfo,setShipInfo] = useState ('');
    const [coupInfo,setCoupInfo] = useState ('');
    const [state,setState] = useState ('');
    const [items,setItems] = useState ([]);
    const [error,setError] = useState (false);
    const [loading,setLoading] = useState (false);

    useEffect (()=>{
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
    },[user_id])

    return (
        <Fragment>
      <BreadCrumbs name={`Compra # ${purchInfo.id}`} />

      <div id="content">
        <div className="container">
          <div className="row bar">
            {(loading)?
              <div className="col-md-9 text-center"> 
                <Spinner animation="border" variant="info" size="lg"  />
              </div>   
            :
            <div>
            {(error)?
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Hubo un error al recuperar los datos
            </div>
            :
            <div id="customer-order" className="col-lg-9">
            <hr />
            <p className="lead">La compra #{purchInfo.id} fue solicitada el <strong>{moment(purchInfo.date).utc().format('DD/MM/YYYY')}</strong> y en este momento <strong>{state}</strong>.</p>
            <p className="text-muted">Si tenés alguna duda, por favor <Link to="/contact">contáctanos</Link>, nuestro servicio de atención al cliente trabaja 24/7.</p>
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
            <CustomerSection />
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerOrder;
