import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import {getUserWishlist} from './utils/CustomerFunctions';
import ProductList from '../../lists/ProductList';

const CustomerWishList = ({setUser, handleDrop,user_id}) => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
      getUserWishlist (user_id)
      .then (res => {
          setList(res);
      })
      .catch (err=>{
          setError (true);
          return;
      });
      if (list.length === 0){
          setError (true);
      }
      setError (false);        
  }, [user_id] );

    return (
        <Fragment>
      <BreadCrumbs name={"Mis deseos"} />
      <div id="content">
        <div className="container">
          <div className="row bar">
            <div className="col-lg-9">
                <hr />
              <p className="lead">Esta es tu lista de tus productos deseados.</p>
              {(loading) ? 
                <div className="col-md-9 text-center"> 
                  <Spinner animation="border" variant="info" size="lg"  />
                </div> :
              <div>
              { (!error) ? <ProductList list = {list} /> : <div className="alert alert-danger mt-2 mb-5 text-center">Hubo un error al recuperar los datos</div>}
              </div>
              }
            </div>
            <CustomerSection setUser={setUser} handleDrop={handleDrop}/>
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerWishList;
