import React, { Fragment,useState } from 'react';
import {Link, Switch,Route} from 'react-router-dom'
import './../../../css/default.css';
import Checkout1 from './ShopCheckout1';
import Checkout2 from './ShopCheckout2';
import Checkout3 from './ShopCheckout3';
import Checkout4 from './ShopCheckout4';
import Cart from './ShopCart';
import RouteError from '../RouteError';

const ShopCheckout = ({user_id}) => {

    const route = '/shop-checkout';
    const [purchInfo,setPurchInfo] = useState ('');
    const [items,setItems] = useState ([]);
    const [coupon,setCoupon] = useState ('');

    return (
        <Fragment>
            <Switch>
            <Route  path={`${route}/cart`} render = {()=> <Cart user_id = {user_id} route = {route} setItems = {setItems} setPurchInfo = {setPurchInfo} setCoupon = {setCoupon} coupon = {coupon} />} />
            <Route  path={`${route}/1`} render = {()=> <Checkout1 route = {route} setCoupon = {setCoupon} coupon = {coupon} cartInfo = {purchInfo} />} />
            <Route  path={`${route}/2`} render = {()=> <Checkout2 route = {route} setCoupon = {setCoupon} coupon = {coupon} cartInfo = {purchInfo} />} />
            <Route  path={`${route}/3`} render = {()=> <Checkout3 route = {route} setCoupon = {setCoupon} coupon = {coupon} cartInfo = {purchInfo} />} />
            <Route  path={`${route}/4`} render = {()=> <Checkout4 route = {route} setCoupon = {setCoupon} coupon = {coupon} cartInfo = {purchInfo} />} />
            <Route component={RouteError}/>
            </Switch>
        </Fragment>
    );
}

export default ShopCheckout;
