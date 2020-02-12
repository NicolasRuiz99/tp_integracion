import React, { useState, useEffect, Fragment } from 'react'
import ProductList from './../list/product/ProductList';
import {getProductsAdmin} from './../../pages/shop/utils/shopFunctions';
import Error from './../../messages/Error';
import { setActiveProduct } from '../utils/adminFunctions';
import {DeleteProductsModal} from './../utils/modals';
import LoadingDark from '../../messages/LoadingDark';

export default function Products() {
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading,setLoading] = useState (false);
    const [refresh,setRefresh] = useState (false);
    const [toDelete, setToDelete] = useState([]);
    const [clean, setClean] = useState(false);
    const [serverError,setServerError] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
      setModalOpen(!modalOpen);
      setError(false);  
     };

    const limpiarChecks = () => {
      setToDelete([]);
      setClean(true);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);
        getProductsAdmin()
        .then(res => {
            console.log(res);
            setList(res);
            setCopyList(res);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }, [refresh]);
 
    //UseEffect de busqueda
    useEffect( () => {
        if(search !== '') {
            setCopyList(list.filter(product => {
                return (product.name.toLowerCase().includes(search.toLowerCase()) || product.brand.toLowerCase().includes(search.toLowerCase()));
            }));
       }else{
            setCopyList(list);
        }
        //setCurrentPage(1);       
    },[search]);


    const eliminarProducto = () => {
        for (let index = 0; index < toDelete.length; index++) {
            let id = toDelete[index];
            //deleteProduct(id)
            //.then(res => {
            //    setRefresh(true);
            //})
            //.catch (err => {
            //  setServerError(true);
            //}); 
           }  
           setServerError(false);
           setToDelete([]);
    }

    const changeList = (id, checked) => {
        if (!checked) {
            setClean(false); 
            setToDelete([...toDelete, id]);
        }
         else {
            setClean(false); 
             let lista = toDelete.filter(item => item !== id)
             setToDelete(lista);
        }
    }
         

    return (
        <Fragment>
        {(loading) ? (
                <LoadingDark/>
            ) : ( (serverError) ?
                (<Error texto="Hubo un error al recuperar los datos"/>
                )
                :
                (error) ? 
                <Error texto="ha ocurrido un error" /> : 
                <ProductList 
                copyList={copyList} 
                setSearch={setSearch} 
                list={list}
                isCheck={limpiarChecks} 
                changeList={changeList} 
                toDelete={toDelete} 
                clean={clean}
                handleModalOpen={handleModalOpen}
                />)}
        <DeleteProductsModal
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        eliminarProducto={eliminarProducto}
        />
        </Fragment>
    )
}
