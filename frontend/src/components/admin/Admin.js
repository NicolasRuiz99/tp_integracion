import React, {Fragment} from 'react'
import './../../css/default.css';
import {Link, Switch, Route} from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Products from './Products';
import Customers from './Customers';

export default function Admin() {
    return (
        <Fragment>
            <div className="row">
                <Sidebar />
            <div className="col-sm-10">
                <Switch>
                    <Route path="/admin-page/products" component={Products} />
                    <Route path="/admin-page/customers" component={Customers} />
                </Switch>
            </div>
            </div>
        </Fragment>
    )
}
