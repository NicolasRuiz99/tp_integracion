import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import Basket from './Basket';
import CouponBox from './CouponBox';
import OrderSummary from './OrderSummary';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import {listCartItems,getCartInfo,deleteCartItem} from'../customer/utils/CustomerFunctions';

const ShopCart = ({user_id}) => {

    const [cartInfo,setCartInfo] = useState ([]);
    const [list,setList] = useState ([]);
    const [error,setError] = useState (false);
    const [emptyCart,setEmptyCart] = useState (false);
    const [refresh,setRefresh] = useState (false);

    const deleteItem = (id_color_size) => {
        deleteCartItem (id_color_size,cartInfo.id)
        .then (res => {
            setRefresh (true);
        })
        .catch (err => {
            setError (true);
            return;
        })
    }

    useEffect (()=>{
        getCartInfo (user_id)
        .then (res => {
            setCartInfo (res[0]);
        })
        .catch (err => {
            setError (true);
            return;
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
            return;
        })
        setError (false);
    },[user_id,refresh])

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
                    {(emptyCart)?null:<Basket list = {list} cartInfo = {cartInfo} deleteItem = {deleteItem}/>}
                    <div className="box-footer d-flex justify-content-between align-items-center">
                    <div className="left-col"><Link to="/shop-category" className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i> Continuar comprando</Link></div>
                    <div className="right-col">
                    <button type="button" onClick = {()=>setRefresh(true)} className="btn btn-secondary"><i className="fa fa-refresh"></i> Actualizar el carrito</button>
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
                    <OrderSummary cartInfo= {cartInfo}/>
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
