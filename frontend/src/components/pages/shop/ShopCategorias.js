import React, { Fragment, useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import Paginacion from './Paginacion';
import './../../../css/default.css';
import Filtros from './Filtros';

//Imagenes
//import product1 from "./../../../assets/product1.jpg"
//import product2 from "./../../../assets/product2.jpg"
//import product3 from "./../../../assets/product3.jpg"
//import product4 from "./../../../assets/product4.jpg"
//import product5 from "./../../../assets/product5.jpg" 
import ProductList from '../../lists/ProductList';
import {getProducts} from './utils/shopFunctions';

const ShopCategorias = () => {

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

        if (list.length === 0){
            setError (true);
        }

        setError (false);
    },[list.length]);

    return (
        <Fragment>
            <BreadCrumbs name={"Categorías"} />

            <div id="content">
                <div className="container">
                <div className="row bar">
                    <Filtros />
                    <div className="col-md-9">
                    <p className="text-muted lead"> En nuestro sitio ofrecemos una amplia selección de los mejores productos del mercado.</p>
                    { (!error) ? <ProductList list = {list} /> : <div className="alert alert-danger mt-2 mb-5 text-center">Hubo un error al recuperar los datos</div>}
                    <Paginacion />
                    </div>
                </div>
                </div>
            </div>
      </Fragment>
    );
}

export default ShopCategorias;
