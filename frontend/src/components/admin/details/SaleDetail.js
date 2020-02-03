import React, {useEffect, useState, Fragment} from 'react'
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import {withRouter} from 'react-router-dom';
import Error from '../../messages/Error';
import SaleLine from './../list/sale/SaleLine';
import { getPurchaseInfo, listPurchaseItems } from '../../pages/customer/utils/CustomerFunctions';
import moment from 'moment';
import uuid from 'uuid';

const SaleDetail = ({props}) => {

    const [purchInfo,setPurchInfo] = useState ('');
    const [shipInfo,setShipInfo] = useState ('');
    const [coupInfo,setCoupInfo] = useState ('');
    const [state,setState] = useState ('');
    const [items,setItems] = useState ([]);
    const [error,setError] = useState (false);
    const [loading,setLoading] = useState (false);
    const [buttonMsj, setButtonMsj] = useState(false);

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
              case 'pending-pay':
                  setState ('Está pendiente de pago');
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
    },[])

    const handleClick = () => {
        setButtonMsj(!buttonMsj);
    }

    return (
        <Fragment>
      <div id="content">
        <div className="container">
          <div className="row bar">
            {(loading)?
              <div className="col-md-12 text-center" style={{top:'50%',left:'5%', position: 'fixed'}}> 
                <Spinner animation="border" variant="dark" size="lg" role="status" />
              </div>  
            :
            <div>
            {(error)?
            <Error texto="Hubo un error al recuperar los datos" />
            :
            <div id="customer-order" className="col-lg-12" style={{left:'38%'}}>
                {(state === 'Está pendiente de pago') ? (
                    <div className="col-sm-8 col-md-4" style={{float: 'left', paddingBottom:'0rem', paddingTop: '0rem', padding: '0.4rem'}}>
                    <button className="btn btn-warning"  type="button" >
                        Actualizar estado 
                     </button>
                    </div>
                ): null}    
            <p className="lead">La venta #{purchInfo.id} fue hecha el <strong>{moment(purchInfo.date).utc().format('DD/MM/YYYY')}</strong> y en este momento <strong>{state}</strong>.</p>
                <div className="table-responsive">
                <table className="table table-bordered table table-hover" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th colspan="2"  style={{textAlign:'center'}}>Producto</th>
                        <th >Cantidad</th>
                        <th >Precio unitario</th>
                        <th >Total</th>
                      </tr>
                    </thead>
                    <tbody>
                    {items.map(item => (
                        <SaleLine 
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
              {(shipInfo.id) ?
                (<div style={{textAlign:'center'}}>
                <button 
                 className="btn btn-primary" onClick={handleClick}
                 type="button" data-toggle="collapse" 
                 data-target="#sendData" aria-expanded="false" 
                 aria-controls="collapseExample"
                 >
                    {`${buttonMsj ? 'Ocultar' : 'Ver'} datos de envío`}
                 </button>
                 <div className="collapse" id="sendData" style={{paddingTop: '2rem'}}>     
                 <div className="row addresses">
                   <div className="col-md-12 text-center" >
                     <h3 className="text-uppercase">Datos de envío</h3>
                     <p>Recibe: {`${shipInfo.name} ${shipInfo.surname}`}<br />DNI: {shipInfo.dni}<br />Provincia: {shipInfo.province}<br />Codigo postal: {shipInfo.zip}<br />Dirección:	{shipInfo.address}<br />Código de seguimiento: {(shipInfo.track_code)!=null? shipInfo.track_code : (
                         <div >
                            <button className="btn btn-secondary" type="button" >
                                Añadir código de seguimiento 
                            </button>
                        </div>
                     )}<br /> </p>
                   </div>
                 </div>
                </div>
                </div>) : null}
            </div>
            }
            </div>
            }
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default withRouter(SaleDetail);
