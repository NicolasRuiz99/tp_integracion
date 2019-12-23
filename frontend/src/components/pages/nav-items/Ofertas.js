import React, { Fragment, useState,useEffect } from 'react';
import ProductList from '../../lists/ProductList';
import {getProducts} from './../shop/utils/shopFunctions';
import Paginacion from './../shop/Paginacion';
import './../../../css/default.css';
import Filtros from './../shop/Filtros';
import BreadCrumbs from '../../BreadCrumbs';
import {Link, withRouter} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const Ofertas = () => {


    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [numProducts, setNumProducts] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [listPerPage] = useState(6);

    useEffect( () => {
        setLoading(true);
        getProducts ()
        .then (res => {
            //setList (res);
            res = res.filter(product => {
                if(product.discount > 0) {
                    let producto = product;
                    return producto;
                }
            });
            setList(res);
            setNumProducts(res.length.toString());
            setLoading(false);
        })
        .catch (err=>{
            setError (true);
            return;
        });

        if (list.length = 0){
            setError (true);
        }

    },[]);

    //Obtener lista de productos actual
    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    const currentList = list.slice(indexOfFirstList, indexOfLastList);

    //Cambiar de pagina
    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
    }

    return (
        <Fragment>
            <BreadCrumbs name={`Ofertas`} />

            <div id="content">
                <div className="container">
                <div className="row bar">
                    <Filtros />
                    {(loading) ? 
                    <div className="col-md-9 text-center"> 
                        <Spinner animation="border" variant="info" size="lg"  />
                    </div> : 
                    <div className="col-md-9">
                    <p className="text-muted lead"> Productos actualmente en oferta: {numProducts}.</p>
                    { (!error) ? <ProductList list = {currentList} /> : <div className="alert alert-danger mt-2 mb-5 text-center">Hubo un error al recuperar los datos</div>}
                    <Paginacion listPerPage={listPerPage} totalList={list.length} paginate={paginate} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
                </div>
                }
                </div>
                </div>
            </div>
      </Fragment>
    );
}

export default withRouter(Ofertas);
