import React, { Fragment, useState,useEffect } from 'react';
import ProductList from '../lists/ProductList';
import {getProducts} from './shop/utils/shopFunctions';
import Paginacion from './shop/Paginacion';
import '../../css/default.css';
import Filtros from './shop/Filtros';
import BreadCrumbs from '../BreadCrumbs';
import {Link} from 'react-router-dom';

const Ofertas = () => {


    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);

    useEffect( () => {

        getProducts ()
        .then (res => {
            setList (res);
        })
        .catch (err=>{
            setError (true);
            return;
        });

        if (list.length = 0){
            setError (true);
        }

        setError (false);
    },[]);

    return (
        <Fragment>
            <BreadCrumbs name={"Ofertas"} />

            <div id="content">
                <div className="container">
                <div className="row bar">
                    <Filtros />
                    <div className="col-md-9">
                    <p className="text-muted lead"> En nuestro sitio ofrecemos una amplia variedad de ofertas y promociones.</p>
                    { (!error) ? <ProductList list = {list} /> : <div className="alert alert-danger mt-2 mb-5 text-center">Hubo un error al recuperar los datos</div>}
                    <Paginacion />
                    </div>
                </div>
                </div>
            </div>
      </Fragment>
    );
}

export default Ofertas;
