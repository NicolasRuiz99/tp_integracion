import React, {useEffect, useState, Fragment} from 'react'
import './../../../css/default.css';
import {withRouter} from 'react-router-dom';
import Error from '../../messages/Error';
import SaleLine from './../list/sale/SaleLine';
import { getPurchaseInfo, listPurchaseItems, setPurchaseState, setShippingTrackCode } from '../../pages/customer/utils/CustomerFunctions';
import moment from 'moment';
import uuid from 'uuid';
import { ModifySale } from '../utils/modals';
import LoadingDark from '../../messages/LoadingDark';

const SaleDetail = ({props}) => {
    const [purchInfo,setPurchInfo] = useState ('');
    const [shipInfo,setShipInfo] = useState ('');
    const [coupInfo,setCoupInfo] = useState ('');
    const [state,setState] = useState ('');
    const [items,setItems] = useState ([]);
    const [error,setError] = useState (false);
    const [codeError,setCodeError] = useState (false);
    const [loading,setLoading] = useState (false);
    const [buttonMsj, setButtonMsj] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [trackCode,setTrackCode] = useState ("");

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
        setError(false);  
    };

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
    },[refresh])

    const handleClick = () => {
        setButtonMsj(!buttonMsj);
    }

    const changeState = (state) => {

        let id_coupon = coupInfo.id;
        if (id_coupon === undefined) {
            id_coupon = null;
        }
        const {id} = purchInfo; 
        setPurchaseState(id,state)
        .then(res => {
            setRefresh(true);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }

    const handleTC = () => {
      setCodeError (false);
      if (trackCode === ""){
        setCodeError (true);
        return;
      }
      const {id} = shipInfo;
      setShippingTrackCode (id,trackCode)
      .then (res=>{
        setRefresh (true);
      })
      .catch (err=>{
        setError(true);
        return;
      })
      setCodeError (false);
    }

    return (
        <Fragment>
      <div id="content">
        <div className="container">
          <div className="row bar">
            {(loading)?
              <LoadingDark/>
            :
            <div>
            {(error)?
            <Error texto="Hubo un error al recuperar los datos" />
            :
            <div id="customer-order" className="col-lg-12" style={{left:'38%'}}>
                {(state === 'Está pendiente de pago' || state === 'Está en proceso') ? (
                    <div className="col-sm-8 col-md-4" style={{float: 'left', paddingBottom:'0rem', paddingTop: '0rem', padding: '0.4rem'}}>
                    <button className="btn btn-warning" onClick={handleModalOpen} type="button" >
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
                     <p>Recibe: {`${shipInfo.name} ${shipInfo.surname}`}<br />DNI: {shipInfo.dni}<br />Provincia: {shipInfo.province}<br />Codigo postal: {shipInfo.zip}<br />Dirección:	{shipInfo.address}<br /> Código de seguimiento:
                         <div>
                            <input type="number" class="form-control" defaultValue={(shipInfo.track_code == null)?"":shipInfo.track_code} onChange={e=>setTrackCode(e.target.value)}></input>
                            <br />
                            <button className="btn btn-secondary" type="button" onClick={handleTC} >
                                  {(shipInfo.track_code == null)?"Añadir":"Cambiar"}
                            </button>
                            {(codeError)?<Error texto="Valor no permitido" />:null}
                        </div>
                      <br /> </p>
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
      <ModifySale
      modalOpen={modalOpen}
      handleModalOpen={handleModalOpen}
      changeState={changeState} />
      </Fragment>
    );
}

export default withRouter(SaleDetail);
