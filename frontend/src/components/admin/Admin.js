import React, {Fragment, useEffect} from 'react'
import './../../css/default.css';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
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
import ProductDetail from './details/ProductDetail';
import Coupons from './nav-items/Coupons';
import Chats from './nav-items/Chats';
import AdminAccount from './AdminAccount';
import { ProtectedRoute2 } from '../ProtectedRoute';
import AddProduct from './AddProduct';

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
                    <ProtectedRoute2  path="/admin-page/addproduct" 
                    isLogged={isLogged}
                    role={role}
                    component={() => <AddProduct />}/>
                    
                    //Logica de protección para rutas con :id
                    {(isLogged && role) ? (
                        <Fragment>
                        <Route  path="/admin-page/review-detail/:id" 
                        component={(props) => <ReviewDetail props={props}/>}/>
                        <Route  path="/admin-page/sale-detail/:id" 
                        component={(props) => <SaleDetail props={props}/>}/>
                        <Route  path="/admin-page/customer-detail/:id" 
                        component={(props) => <CustomerDetail props={props}/>}/>
                        <Route path="/admin-page/coupon-detail/:id" 
                        component={(props) => <CouponDetail props={props}/>}/>
                        <Route path="/admin-page/product-detail/:id" 
                        component={(props) => <ProductDetail props={props}/>}/>
                        </Fragment>
                    ) : (<Redirect to="/" />)}  
                </Switch>
            </div>
            </div>
        </Fragment>
    )
}
