import React, { Fragment } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import OrderSummary from './OrderSummary';
import {Link} from 'react-router-dom'
import './../../../css/default.css';

const ShopCheckout2 = ({route,coupon,setCoupon,cartInfo}) => {
    return (
        <Fragment>
            <BreadCrumbs name={"Compra - Método de entrega"} />
            <div id="content">
                <div className="container">
                <div className="row">
                    <div id="checkout" className="col-lg-9">
                    <div className="box">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item"><Link to={`${route}/1`} className="nav-link"> <i className="fa fa-map-marker"></i><br/>Dirección</Link></li>
                                <li className="nav-item"><Link to={`${route}/2`} className="nav-link active"><i className="fa fa-truck"></i><br/>Método de entrega</Link></li>
                                <li className="nav-item"><Link to="#" className="nav-link disabled"><i className="fa fa-money"></i><br/>Método de pago</Link></li>
                                <li className="nav-item"><Link to="#" className="nav-link disabled"><i className="fa fa-eye"></i><br/>Revisión de la compra</Link></li>
                            </ul>
                        <div className="content">
                            <div className="row">
                            <div className="col-sm-6">
                                <div className="box shipping-method">
                                <h4>Por sucursal</h4>
                                <p>Lo retiro por sucursal.</p>
                                <div className="box-footer text-center">
                                    <input type="radio" name="delivery" value="delivery1"/>
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="box shipping-method">
                                <h4>Envío a domicilio</h4>
                                <p>El producto será enviado a tu hogar.</p>
                                <div className="box-footer text-center">
                                    <input type="radio" name="delivery" value="delivery2"/>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                            <div className="box-footer d-flex flex-wrap align-items-center justify-content-between">
                                <div className="left-col"><Link to={`${route}/1`} className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i>Volver a la dirección</Link></div>
                                <div className="right-col">
                                <Link to={`${route}/3`} className="btn btn-main">Continuar al método de pago<i className="fa fa-chevron-right"></i></Link>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <OrderSummary price = {cartInfo.price}  setCoupon = {setCoupon} coupon = {coupon}/>
                    </div>
                </div>
                </div>
        </div>
        </Fragment>
    );
}

export default ShopCheckout2;
