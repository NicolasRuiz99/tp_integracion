import React, { Fragment, useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import {withRouter} from 'react-router-dom';
import Paginacion from './Paginacion';
import './../../../css/default.css';
import Filtros from './Filtros';
import Spinner from 'react-bootstrap/Spinner';
//Imagenes
//import product1 from "./../../../assets/product1.jpg"
//import product2 from "./../../../assets/product2.jpg"
//import product3 from "./../../../assets/product3.jpg"
//import product4 from "./../../../assets/product4.jpg"
//import product5 from "./../../../assets/product5.jpg" 
import ProductList from '../../lists/ProductList';
import {getProducts} from './utils/shopFunctions';

const ShopCategorias = ({search}) => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [listPerPage] = useState(6);


    useEffect( () => {
        setLoading(true);
        getProducts ()
        .then (res => {
            if(search!== '') {
                setList(res.filter(product => {
                    return (product.name.toLowerCase().includes(search.toLowerCase()));
                }))
            }else{
                setList(res);
            }
            setLoading(false);
        })
        .catch (err=>{
            setError (true);
            return;
        });

        if (list.length === 0){
            setError (true);
        }
        setError (false);
    },[search, currentPage]);

    //Obtener lista de productos actual
    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    const currentList = list.slice(indexOfFirstList, indexOfLastList);

    //Cambiar de pagina
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Fragment>
            <BreadCrumbs name={"Categorías"} />

            <div id="content">
                <div className="container">
                <div className="row bar">
                    <Filtros />
                    {(loading) ? <div className="col-md-9 text-center"> 
                        <Spinner animation="border" variant="info" size="lg"  />
                        </div> :
                        <div className="col-md-9">
                        <p className="text-muted lead"> En nuestro sitio ofrecemos una amplia selección de los mejores productos del mercado.</p>
                        { (!error) ? <ProductList list = {currentList} /> : <div className="alert alert-danger mt-2 mb-5 text-center">Hubo un error al recuperar los datos</div>}
                        <br /> 
                        <Paginacion listPerPage={listPerPage} totalList={list.length} paginate={paginate} setCurrentPage={setCurrentPage} currentPage={currentPage}/>  
                        </div>
                    }   
                </div>
                </div>
            </div>
      </Fragment>
    );
}

export default withRouter(ShopCategorias);
