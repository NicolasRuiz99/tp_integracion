import React, { Fragment, useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import {withRouter} from 'react-router-dom';
import './../../../css/default.css';
import ProductList from '../../lists/ProductList';
import {getTopSellers} from '../shop/utils/shopFunctions';
import Error from '../../messages/Error';
import Loading from '../../messages/Loading';
import Info from '../../messages/Info';

const TopSellers = () => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading,setLoading] = useState (false);

    useEffect( () => {
        window.scrollTo(0, 0);
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
                        <Loading/>
                         :
                        <div className="col-md-9">
                            <p className="text-muted lead">
                                Los productos mas vendidos de la tienda.
                            </p>
                            { (!error) ? 
                            <div>
                            { (list.length === 0)?
                            <Info texto = "Listado no disponible"/>
                            :
                            <ProductList list = {list} /> 
                            }
                            </div>
                            : 
                            <Error texto = "Hubo un error al recuperar los datos"/>
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
