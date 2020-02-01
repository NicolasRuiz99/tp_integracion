import React, {Fragment} from 'react'
import './../../css/default.css';
import {Link, Switch, Route} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Products from './nav-items/Products';
import Customers from './nav-items/Customers';
import Reservations from './nav-items/Reservations';
import Sales from './nav-items/Sales';
import Reviews from './nav-items/Reviews';

export default function Admin() {
    return (
        <Fragment>
            <div className="row">
                <Sidebar />
            <div className="col-sm-10">
                <Switch>
                    <Route path="/admin-page/products" component={Products} />
                    <Route path="/admin-page/customers" component={Customers} />
                    <Route path="/admin-page/reservations" component={Reservations} />
                    <Route path="/admin-page/sales" component={Sales} />
                    <Route path="/admin-page/reviews" component={Reviews} />
                </Switch>
            </div>
            </div>
        </Fragment>
    )
}
