import React, {Fragment} from 'react'
import './../../css/default.css';
import {Link, Switch, Route} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Products from './nav-items/Products';
import Customers from './nav-items/Customers';
import Reservations from './nav-items/Reservations';
import Sales from './nav-items/Sales';
import Reviews from './nav-items/Reviews';
import ReviewDetail from './details/ReviewDetail';
import SaleDetail from './details/SaleDetail';
import CouponDetail from './details/CouponDetail';
import CustomerDetail from './details/CustomerDetail';
import Coupons from './nav-items/Coupons';
import Chats from './nav-items/Chats';
import AdminAccount from './AdminAccount';
import { ProtectedRoute2 } from '../ProtectedRoute';

export default function Admin({handleDrop,user_id, isLogged, role}) {
    return (
        <Fragment>
            <div className="row">
                <Sidebar handleDrop={handleDrop}/>
            <div className="col-sm-10">
                <Switch>
                    <ProtectedRoute2
                    path="/admin-page/products"
                    isLogged={isLogged}
                    role={role}
                    component={Products} />
                    <ProtectedRoute2 path="/admin-page/customers" 
                    isLogged={isLogged}
                    role={role}
                    component={Customers} />
                    <ProtectedRoute2 path="/admin-page/reservations" 
                    isLogged={isLogged}
                    role={role}
                    component={Reservations} />
                    <ProtectedRoute2 path="/admin-page/sales" 
                    isLogged={isLogged}
                    role={role}
                    component={Sales} />
                    <ProtectedRoute2 path="/admin-page/reviews" 
                    isLogged={isLogged}
                    role={role}
                    component={Reviews} />
                    <ProtectedRoute2 path="/admin-page/coupons"
                    isLogged={isLogged}
                    role={role}
                    component={Coupons} />
                    <ProtectedRoute2 path="/admin-page/chats" 
                    isLogged={isLogged}
                    role={role}
                    component={Chats} />
                    <ProtectedRoute2  path="/admin-page/account" 
                    isLogged={isLogged}
                    role={role}
                    component={() => <AdminAccount user_id = {user_id}/>}/>
                    <ProtectedRoute2  path="/admin-page/review-detail/:id" 
                    isLogged={isLogged}
                    role={role}
                    component={(props) => <ReviewDetail props={props}/>}/>
                    <ProtectedRoute2  path="/admin-page/sale-detail/:id" 
                    isLogged={isLogged}
                    role={role}
                    component={(props) => <SaleDetail props={props}/>}/>
                    <ProtectedRoute2  path="/admin-page/customer-detail/:id" 
                    isLogged={isLogged}
                    role={role}
                    component={(props) => <CustomerDetail props={props}/>}/>
                    <ProtectedRoute2  path="/admin-page/coupon-detail/:id" 
                    isLogged={isLogged}
                    role={role}
                    component={(props) => <CouponDetail props={props}/>}/>
                </Switch>
            </div>
            </div>
        </Fragment>
    )
}
