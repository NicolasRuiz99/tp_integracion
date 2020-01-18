import React, { Fragment, useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import {withRouter} from 'react-router-dom';
import Paginacion from './Paginacion';
import './../../../css/default.css';
import Filtros from './Filtros';
import Spinner from 'react-bootstrap/Spinner';
import ProductList from '../../lists/ProductList';
import {getProducts} from './utils/shopFunctions';
import {changeCategories, unselectCategories, unselectCategories2, createCountxCategoria} from './utils/categoriesFunctions';

const ShopCategorias = ({search, setIsOferta, isOferta}) => {
    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    //solo obtener la lista una sola vez
    const [copyList, setCopyList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [listPerPage] = useState(6);
    //Valor de categoría inicial
    const [categories, setCategories] = useState('all');
    
    //State para activar el estilo de selección por categoria
    const [isActive, setIsActive] = useState({
        isActiveF: false,
        isActiveM: false,
        isActiveU: false,
        isActiveT: true
    });

    const [isActive2, setIsActive2] = useState({
        isActiveRemera: false,
        isActivePantalon: false,
        isActivePollera: false,
        isActiveRopaInterior: false,
        isActiveAbrigos: false,
        isActiveAccesorios: false,
        isActiveCalzado: false,
        isActiveCamisas: false,
    });

    const [colors, setColors] = useState({});

    //UseEffect inicial
    useEffect( () => {
      
        setLoading(true);
        getProducts ()
        .then (res => {
            if (isOferta) {
              res = res.filter(product => {
                if(product.discount > 0) {
                  let producto = product;
                  return producto;
                }
            });
            dividirColores(res);
            setColors(cuentaColores(res));
            setList(res);
            setCopyList(res);
            setLoading(false);
            setIsOferta(true);
            } else {
            dividirColores(res);
            setColors(cuentaColores(res));
            setList(res);
            setCopyList(res);
            setLoading(false);
            setIsOferta(false);
            }
        })
        .catch (err => {
            setError(true);
            return;
        });
        if (list.length === 0){
            setError(true);
        }
        setError (false);    
    }, [isOferta] );

    //UseEffect de busqueda
    useEffect( () => {
        unselectCategories2(search, setCopyList, list, setIsActive, setIsActive2);
        setCurrentPage(1);       
    },[search]);

    

    //UseEffects para categorias
    useEffect(() => {
        unselectCategories(categories, setCopyList, list, setIsActive2);
        setCurrentPage(1);                
    }, [categories]);

    useEffect( () => {
        changeCategories(isActive2, list, setIsActive, setCopyList);
    }, [isActive2]);

    //Obtener lista de productos actual
    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    const currentList = copyList.slice(indexOfFirstList, indexOfLastList);

    //Cambiar de pagina
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    //Creo el objeto que almacenará el numero que representa la cantidad de cada categoría
    const countxCategoria = createCountxCategoria(list);

    const cuentaColores = (vector) => {
        //Variables de colores
        let yellow = 0;
        let blue = 0;
        let red = 0;
        let green = 0;
        let white = 0;
        vector.forEach(item => {
            let colores = item.colors;
            colores.forEach(value => {
                if (value === 'amarillo') {
                    return yellow = yellow + 1;
                }
                if (value === 'azul') {
                    return blue = blue + 1;
                }
                if (value === 'verde') {
                    return green = green + 1;
                }
                if (value === 'blanco') {
                    return white = white + 1;
                }
                if (value === 'rojo') {
                    return red = red + 1;
                }
            });
        });
        return {yellow, blue, green, red, white};
    };

    const dividirColores = (lista) => {
        lista.forEach(item => {
            //Saco los corchetes
            let rebanada = item.colors.slice(1, -1); 
            //Creo el vector auxiliar de colores al sacar las comas
            let colores = rebanada.split(",");
            //lo sustituyo
            item.colors = colores;
        });
    };

   

    return (
        <Fragment>
         <BreadCrumbs name={"Tienda"} />
            <div id="content">
                <div className="container">
                    <div className="row bar">
                        <Filtros 
                        setCategories={setCategories} 
                        list={countxCategoria}
                        isActive={isActive}
                        setIsActive={setIsActive}
                        isActive2={isActive2}
                        setIsActive2={setIsActive2}
                        setCopyList={setCopyList}
                        lista={list}
                        colors={colors}
                        />
                        {(loading) ? 
                        <div className="col-md-9 text-center"> 
                            <Spinner animation="border" variant="info" size="lg"  />
                        </div> :
                        <div className="col-md-9">
                            <p className="text-muted lead">
                                En nuestro sitio ofrecemos una amplia selección de los mejores productos del mercado.
                            </p>
                            { (!error) ? 
                            <ProductList list = {currentList} /> : 
                            <div className="alert alert-danger mt-2 mb-5 text-center">
                                Hubo un error al recuperar los datos
                            </div>
                            }
                            <br /> 
                            <Paginacion 
                            listPerPage={listPerPage} 
                            totalList={copyList.length} 
                            paginate={paginate} 
                            setCurrentPage={setCurrentPage} 
                            currentPage={currentPage}
                            />  
                        </div>
                        }   
                    </div>
                </div>
            </div>
      </Fragment>
    );
}

export default withRouter(ShopCategorias);
