import React, { Fragment, useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import {withRouter} from 'react-router-dom';
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import ProductList from '../../lists/ProductList';
import {getTopSellers} from '../shop/utils/shopFunctions';

const TopSellers = () => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading,setLoading] = useState (false);

    useEffect( () => {
        setLoading(true);
        getTopSellers ()
        .then (res => {
            setList (res);
            setLoading (false);
        })
        .catch (err => {
            setLoading (false);
            setError (true);
        })
        if (list.length === 0){
            setError(true);
        }
        setError (false);        
    }, [] );

    return (
        <Fragment>
            <BreadCrumbs name={"Mas vendidos"} />
            <div id="content">
                <div className="container">
                    <div className="row bar">
                        {(loading) ? 
                        <div className="col-md-9 text-center"> 
                            <Spinner animation="border" variant="info" size="lg"  />
                        </div> :
                        <div className="col-md-9">
                            <p className="text-muted lead">
                                Los productos mas vendidos de la tienda.
                            </p>
                            { (!error) ? 
                            <ProductList list = {list} /> : 
                            <div className="alert alert-danger mt-2 mb-5 text-center">
                                Hubo un error al recuperar los datos
                            </div>
                            }
                        </div>
                        }   
                    </div>
                </div>
            </div>
      </Fragment>
    );
}

export default withRouter(TopSellers);
