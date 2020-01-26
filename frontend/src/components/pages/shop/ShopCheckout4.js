import React, { Fragment,useState } from 'react';
import OrderSummary from './OrderSummary';
import BreadCrumbs from '../../BreadCrumbs';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import CouponBox from './CouponBox';
import Basket from './Basket';
import { payMP, addShipping, modPurchase } from '../customer/utils/CustomerFunctions';
import Error from '../../messages/Error';

const ShopCheckout4 = ({route,coupon,setCoupon,cartInfo,ship,list,shipInfo,history}) => {

    const [error,setError] = useState (false);

    const handleBuy = () => {
      if (ship){
        addShipping (shipInfo)
        .then ()
        .catch (err=>{
          setError (true);
          console.log(err);
          
          return;
        })
      }
      let info = cartInfo;
      info.state = 'pending';

      let pc = null;
      if (coupon !== ''){
        pc = coupon.pc
        info.id_coupon = coupon.id
      }
      modPurchase (info)
      .then ()
      .catch (err=>{
        setError (true);
        return;
      })
      
      
      payMP (list,cartInfo.id,pc)
      .then (res=>{
          window.location.replace(res);
      })
      .catch (err=>{
          setError(true);
          return;
      })
      setError (false);
    }
    return (
        <Fragment>
            <BreadCrumbs name={"Compra - Revisión"} />
      <div id="content">
        <div className="container">
          <div className="row">
            <div id="checkout" className="col-lg-9">
              <div className="box">
                <form method="get" action="/shop-checkout4">
                  <ul className="nav nav-pills nav-fill">
                  <li className="nav-item"><Link to={`${route}/1`} className="nav-link"><i className="fa fa-truck"></i><br/>Método de entrega</Link></li>
                    <li className="nav-item"><Link to={`${route}/2`} className={(ship)?"nav-link":"nav-link disabled"}> <i className="fa fa-map-marker"></i><br/>Dirección</Link></li>
                    <li className="nav-item"><Link to={`${route}/3`} className="nav-link"><i className="fa fa-money"></i><br/>Método de pago</Link></li>
                    <li className="nav-item"><Link to={`${route}/4`} className="nav-link active"><i className="fa fa-eye"></i><br/>Revisión de la compra</Link></li>
                  </ul>
                </form>
                <div className="content">
                <Basket list = {list} cartInfo = {cartInfo} deleteItem = {null}/>
                </div>
                {(shipInfo.id)?
                <div className="row addresses">
                  <div className="col-md-10 text-left">
                    <h4 className="text-uppercase">Datos de envío</h4>
                    <p>Recibe: {`${shipInfo.name} ${shipInfo.surname}`}<br />DNI: {shipInfo.dni}<br />Provincia: {shipInfo.province}<br />Codigo postal: {shipInfo.zip}<br />Dirección:	{shipInfo.address}<br /></p>
                  </div>
                </div>
                :
                <div className="row addresses">
                  <div className="col-md-10 text-left">
                    <h4 className="text-uppercase">Retiro en sucursal (ver pág. de contacto)</h4>
                  </div>
                </div>
                }
                <div className="box-footer d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-col"><Link to={`${route}/3`} className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i>Volver al método de pago</Link></div>
                  <div className="right-col">
                    <button type="submit" className="btn btn-main" onClick = {handleBuy} >Confirmar<i className="fa fa-chevron-right"></i></button>
                  </div>
                </div>
                {error && <Error texto="Ocurrió un error"/> }
              </div>
            </div>
            <div className="col-lg-3">
              <OrderSummary price = {cartInfo.price} setCoupon = {setCoupon} coupon = {coupon}/>
              <CouponBox setCoupon = {setCoupon}/>
            </div>
          </div>
        </div>
      </div>
        </Fragment>
    );
}

export default ShopCheckout4;
