import React, { Fragment } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import Basket from './Basket';
import CouponBox from './CouponBox';
import OrderSummary from './OrderSummary';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
//Imagenes
import product1 from "./../../../assets/product1.jpg";
import product2 from "./../../../assets/product2.jpg";
import product3 from "./../../../assets/product3.jpg";


const ShopCart = () => {
    return (
        <Fragment>
            <BreadCrumbs name={"Carrito"} />

            <div id="content">
                <div className="container">
                <div className="row bar">
                    <div className="col-lg-12">
                    <p className="text-muted lead">Tenés actualmente 3 item(s) en tu carrito.</p>
                    </div>
                    <div id="basket" className="col-lg-9">
                    <Basket />
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                        <div className="box text-uppercase mt-0 mb-small">
                            <h3>Productos que te podrían interesar</h3>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="product">
                            <div className="image"><Link to="#"><img src={product2} alt="" className="img-fluid image1"/></Link></div>
                            <div className="text">
                            <h3 className="h5"><Link to="/shop-detail">Camiseta deportiva</Link></h3>
                            <p className="price">$980</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="product">
                            <div className="image"><Link to="#"><img src={product3} alt="" className="img-fluid image1"/></Link></div>
                            <div className="text">
                            <h3 className="h5"><Link to="/shop-detail">Pantalon soldado Ibera</Link></h3>
                            <p className="price">$2300</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="product">
                            <div className="image"><Link to="#"><img src={product1} alt="" className="img-fluid image1"/></Link></div>
                            <div className="text">
                            <h3 className="h5"><Link to="/shop-detail">Zapatillas azules deportivas Adidas</Link></h3>
                            <p className="price">$2143</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <OrderSummary />
                    <CouponBox />
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ShopCart;
