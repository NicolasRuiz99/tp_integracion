import React, { Fragment } from 'react';
import OrderSummary from './OrderSummary';
import BreadCrumbs from '../../BreadCrumbs';
import {Link} from 'react-router-dom'
import './../../../css/default.css';

const ShopCheckout = () => {
    return (
        <Fragment>
            <BreadCrumbs name={"Compra - Dirección"} />
            <div id="content">
                <div className="container">
                <div className="row">
                    <div id="checkout" className="col-lg-9">
                    <div className="box border-bottom-0">
                        <form method="get" action="/shop-checkout2">
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item"><Link to="/shop-checkout1" className="nav-link active"> <i className="fa fa-map-marker"></i><br/>Dirección</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link disabled"><i className="fa fa-truck"></i><br/>Método de entrega</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link disabled"><i className="fa fa-money"></i><br/>Método de pago</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link disabled"><i className="fa fa-eye"></i><br/>Revisión del pedido</Link></li>
                        </ul>
                        <div className="content">
                            <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="firstname">Nombre</label>
                                <input id="firstname" type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="lastname">Apellido</label>
                                <input id="lastname" type="text" className="form-control"/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="direccion">Dirección</label>
                                <input id="direccion" type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="dpto">Dpto</label>
                                <input id="dpto" type="text" className="form-control"/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                <label for="city">Ciudad</label>
                                <input id="city" type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                <label for="zip">Código postal</label>
                                <input id="zip" type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                <label for="province">Provincia</label>
                                <select id="province" className="form-control"></select>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="phone">Teléfono</label>
                                <input id="phone" type="text" className="form-control"/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="email">Email</label>
                                <input id="email" type="text" className="form-control"/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="box-footer d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-col"><Link to="/shop-basket" className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i>Volver al carrito</Link></div>
                            <div className="right-col">
                            <button type="submit" className="btn btn-main">Continuar al método de entrega<i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <OrderSummary />
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ShopCheckout;
