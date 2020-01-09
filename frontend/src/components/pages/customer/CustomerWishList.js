import React, { Fragment } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import './../../lists/wishlist/ListWishList';
//Imagenes
import product1 from "./../../../assets/product1.jpg"
import product2 from "./../../../assets/product2.jpg"
import product3 from "./../../../assets/product3.jpg"
import product4 from "./../../../assets/product4.jpg"
import product5 from "./../../../assets/product5.jpg" 

const CustomerWishList = ({setUser, handleDrop}) => {
    return (
        <Fragment>
      <BreadCrumbs name={"Mis deseos"} />
      {/* Productos a modo de ejemplo, en el futuro implementar componente que mapee la base de datos */}
      <div id="content">
        <div className="container">
          <div className="row bar">
            <div className="col-lg-9">
                <hr />
              <p className="lead">Esta es tu lista de tus productos deseados.</p>
                <List ListWishList list={} />
            </div>
            <CustomerSection setUser={setUser} handleDrop={handleDrop}/>
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerWishList;
