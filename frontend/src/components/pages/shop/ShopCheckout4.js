import React, { Fragment } from 'react';
import OrderSummary from './OrderSummary';
import BreadCrumbs from '../../BreadCrumbs';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import img from "./../../../assets/detailsquare.jpg";
import img2 from "./../../../assets/basketsquare.jpg";
import CouponBox from './CouponBox';

const ShopCheckout4 = ({route,coupon,setCoupon,cartInfo}) => {
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
                    <li className="nav-item"><Link to={`${route}/1`} className="nav-link"> <i className="fa fa-map-marker"></i><br/>Dirección</Link></li>
                    <li className="nav-item"><Link to={`${route}/2`} className="nav-link"><i className="fa fa-truck"></i><br/>Método de entrega</Link></li>
                    <li className="nav-item"><Link to={`${route}/3`} className="nav-link"><i className="fa fa-money"></i><br/>Método de pago</Link></li>
                    <li className="nav-item"><Link to={`${route}/4`} className="nav-link active"><i className="fa fa-eye"></i><br/>Revisión de la compra</Link></li>
                  </ul>
                </form>
                <div className="content">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th colspan="2">Producto</th>
                          <th>Cantidad</th>
                          <th>Precio unitario</th>
                          <th>Descuento</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><Link to="#"><img src={img} alt="White Blouse Armani"/></Link></td>
                          <td><Link to="#">Zapato de cuero negro</Link></td>
                          <td>2</td>
                          <td>$123.00</td>
                          <td>$0.00</td>
                          <td>$246.00</td>
                        </tr>
                        <tr>
                          <td><Link to="#"><img src={img2} alt="Black Blouse Armani"/></Link></td>
                          <td><Link to="#">Pantalón deportivo</Link></td>
                          <td>1</td>
                          <td>$200.00</td>
                          <td>$0.00</td>
                          <td>$200.00</td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <th colspan="5">Total</th>
                          <th>$446.00</th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="box-footer d-flex flex-wrap align-items-center justify-content-between">
                  <div className="left-col"><Link to={`${route}/3`} className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i>Volver al método de pago</Link></div>
                  <div className="right-col">
                    <button type="submit" className="btn btn-main">Confirmar<i className="fa fa-chevron-right"></i></button>
                  </div>
                </div>
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
