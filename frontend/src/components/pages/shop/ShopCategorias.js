import React, { Fragment, useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import {withRouter} from 'react-router-dom';
import Paginacion from './Paginacion';
import './../../../css/default.css';
import Filtros from './Filtros';
import Spinner from 'react-bootstrap/Spinner';
import ProductList from '../../lists/ProductList';
import {getProducts} from './utils/shopFunctions';

const ShopCategorias = ({search}) => {
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

    //UseEffect inicial
    useEffect( () => {
        setLoading(true);
        getProducts ()
        .then (res => {
            setList(res);
            setCopyList(res);
            setLoading(false);
        })
        .catch (err => {
            setError(true);
            return;
        });
        if (list.length === 0){
            setError(true);
        }
        setError (false);        
    }, [] );

    //UseEffect de busqueda
    useEffect( () => {
        if(search!== '') {
            setCopyList(list.filter(product => {
                return (product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()));
            }));
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
            setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                         isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
        }else{
            setCopyList(list);
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: true, isActiveU: false});
        }
        setCurrentPage(1);       
    },[search]);

    //UseEffects para categorias
    useEffect(() => {
        if(categories !== 'all') {
            setCopyList(list.filter(product => {
                return product.genre.includes(categories); 
            }));
            setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
        }else{
            setCopyList(list);
            setIsActive2({isActiveAbrigos: false, isActiveAccesorios: false, isActiveCalzado: false, isActiveCamisas: false,
                isActivePantalon: false, isActivePollera: false, isActiveRemera: false, isActiveRopaInterior: false});
        }
        setCurrentPage(1);                
    }, [categories]);

    useEffect( () => {
        const {isActiveAbrigos, isActiveAccesorios, isActiveCalzado, isActiveCamisas,
                isActivePantalon, isActivePollera, isActiveRemera, isActiveRopaInterior} = isActive2;
        
        //Pendidente extraer tipos de la base de datos
        if (isActiveAbrigos) {
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
            setCopyList(list.filter(product => product.type === 7 ))} 
        if (isActiveAccesorios) {
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
            setCopyList(list.filter(product => product.type === 6 ))} 
        if (isActiveCalzado) {
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
            setCopyList(list.filter(product => product.type === 1 ))} 
        if (isActiveCamisas) {
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
            setCopyList(list.filter(product => product.type === 2 ))} 
        if (isActivePantalon) {
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
            setCopyList(list.filter(product => product.type === 3 ))} 
        if (isActivePollera) {setCopyList(list.filter(product => product.type === 3 ))} 
        if (isActiveRemera) {
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
            setCopyList(list.filter(product => product.type === 2 ))} 
        if (isActiveRopaInterior) {
            setIsActive({isActiveM: false, isActiveF: false, isActiveT: false, isActiveU: false});
            setCopyList(list.filter(product => product.type === 5 ))} 

    }, [isActive2]);

    //Obtener lista de productos actual
    const indexOfLastList = currentPage * listPerPage;
    const indexOfFirstList = indexOfLastList - listPerPage;
    const currentList = copyList.slice(indexOfFirstList, indexOfLastList);

    //Cambiar de pagina
    const paginate = pageNumber => setCurrentPage(pageNumber);
    

    //Creo el objeto que almacenará el numero que representa la cantidad de cada categoría
    const countxCategoria = {
        listAll: list.length,
        listMen: list.filter(item => item.genre === 'M').length,
        listWomen: list.filter(item => item.genre === 'F').length,
        listUni: list.filter(item => item.genre === 'U').length,
        listNike: copyList.filter(item => item.brand === "nike").length,
        listLacoste: copyList.filter(item => item.brand === "lacoste").length,
        listAdidas: copyList.filter(item => item.brand === "adidas").length,
        listTaverniti: copyList.filter(item => item.brand === "taverniti").length,
    }

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
