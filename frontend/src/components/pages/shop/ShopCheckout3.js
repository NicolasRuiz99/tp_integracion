import React, { Fragment } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import OrderSummary from './OrderSummary';
import {Link} from 'react-router-dom'
import './../../../css/default.css';

const ShopCheckout3 = ({route,coupon,setCoupon,cartInfo,ship}) => {
    return (
        <Fragment>
            <BreadCrumbs name={"Compra - Método de pago"} />
      <div id="content">
        <div className="container">
          <div className="row">
            <div id="checkout" className="col-lg-9">
              <div className="box">
                  <ul className="nav nav-pills nav-fill">
                    <li className="nav-item"><Link to={`${route}/1`} className="nav-link"><i className="fa fa-truck"></i><br/>Método de entrega</Link></li>
                    <li className="nav-item"><Link to={`${route}/2`} className={(ship)?"nav-link":"nav-link disabled"}> <i className="fa fa-map-marker"></i><br/>Dirección</Link></li>
                    <li className="nav-item"><Link to={`${route}/3`} className="nav-link active"><i className="fa fa-money"></i><br/>Método de pago</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link disabled"><i className="fa fa-eye"></i><br/>Revisión de la compra</Link></li>
                  </ul>
                  <div className="content">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="box payment-method">
                          <h4>MercadoPago</h4>
                          <p>Sólo ofrecemos servicios de mercadopago.</p>
                          <div className="box-footer text-center">
                            <input type="radio" name="payment" value="payment1" disabled/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box-footer d-flex flex-wrap align-items-center justify-content-between">
                    <div className="left-col"><Link to={(ship)?`${route}/2`:`${route}/1`} className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i>{(ship)?"Volver a la dirección":"Volver al método de envío"}</Link></div>
                    <div className="right-col">
                      <Link to={`${route}/4`} className="btn btn-main">Revisión de la compra<i className="fa fa-chevron-right"></i></Link>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-lg-3">
              <OrderSummary price = {cartInfo.price} setCoupon = {setCoupon} coupon = {coupon}/>
            </div>
          </div>
        </div>
      </div>
        </Fragment>
    );
}

export default ShopCheckout3;
