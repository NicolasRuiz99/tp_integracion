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

export default function Admin({handleDrop,user_id}) {
    return (
        <Fragment>
            <div className="row">
                <Sidebar handleDrop={handleDrop}/>
            <div className="col-sm-10">
                <Switch>
                    <Route path="/admin-page/products" component={Products} />
                    <Route path="/admin-page/customers" component={Customers} />
                    <Route path="/admin-page/reservations" component={Reservations} />
                    <Route path="/admin-page/sales" component={Sales} />
                    <Route path="/admin-page/reviews" component={Reviews} />
                    <Route path="/admin-page/coupons" component={Coupons} />
                    <Route path="/admin-page/chats" component={Chats} />
                    <Route  path="/admin-page/account" render={() => <AdminAccount user_id = {user_id}/>}/>
                    <Route  path="/admin-page/review-detail/:id" render={(props) => <ReviewDetail props={props}/>}/>
                    <Route  path="/admin-page/sale-detail/:id" render={(props) => <SaleDetail props={props}/>}/>
                    <Route  path="/admin-page/customer-detail/:id" render={(props) => <CustomerDetail props={props}/>}/>
                    <Route  path="/admin-page/coupon-detail/:id" render={(props) => <CouponDetail props={props}/>}/>
                </Switch>
            </div>
            </div>
        </Fragment>
    )
}
