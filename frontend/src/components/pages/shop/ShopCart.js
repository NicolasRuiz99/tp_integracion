import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import Basket from './Basket';
import CouponBox from './CouponBox';
import OrderSummary from './OrderSummary';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import {listCartItems,getCartInfo} from'../customer/utils/CustomerFunctions';

const ShopCart = ({user_id}) => {

    const [cartInfo,setCartInfo] = useState ([]);
    const [list,setList] = useState ([]);
    const [error,setError] = useState (false);
    const [emptyCart,setEmptyCart] = useState (false);

    useEffect (()=>{
        getCartInfo (user_id)
        .then (res => {
            setCartInfo (res);
        })
        .catch (err => {
            setError (true);
        })
        listCartItems (user_id)
        .then (res => {
            setList (res);
            if (res.length === 0){
                setEmptyCart (true);
            }
        })
        .catch (err => {
            setError (true);
        })
        setError (false);
    },[user_id])

    return (
        <Fragment>
            <BreadCrumbs name={"Carrito"} />
            <div id="content">
                <div className="container">
                <div className="row bar">
                    <div className="col-lg-12">
                    <p className="text-muted lead">Tenés actualmente {list.length} item(s) en tu carrito.</p>
                    </div>
                    <div id="basket" className="col-lg-9">
                    
                    <div className="box mt-0 pb-0 no-horizontal-padding">
                    {(emptyCart)?null:<Basket list = {list}/>}
                    <div className="box-footer d-flex justify-content-between align-items-center">
                    <div className="left-col"><Link to="/shop-category" className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i> Continuar comprando</Link></div>
                    <div className="right-col">
                    <Link to="/shop-cart" className="btn btn-secondary"><i className="fa fa-refresh"></i> Actualizar el carrito</Link>
                    {(emptyCart)?
                    <button type="submit" className="btn btn-outlined" disabled>Proceder al pago <i className="fa fa-chevron-right"></i></button>
                    :
                    <button type="submit" className="btn btn-outlined">Proceder al pago <i className="fa fa-chevron-right"></i></button>
                    }
                </div>
                </div>
                    </div>
                    <div className="row">
                    </div>
                    </div>
                    <div className="col-lg-3">
                    {(emptyCart)?
                    null
                    :
                    <div>
                    <OrderSummary />
                    <CouponBox />
                    </div>
                    }
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ShopCart;
