import React, { useState, useEffect, Fragment } from 'react'
import ProductList from './../list/product/ProductList';
import {getProductsAdmin} from './../../pages/shop/utils/shopFunctions';
import Error from './../../messages/Error';
import { setActiveProduct } from '../utils/adminFunctions';
import {DeleteProductsModal} from './../utils/modals';
import LoadingDark from '../../messages/LoadingDark';

const Products = () => {
    const [refresh,setRefresh] = useState (false);
    const [list, setList] = useState([]);
    const [error, setError] = useState(false);
    const [copyList, setCopyList] = useState([]);
    const [search, setSearch] = useState('');
    const [loading,setLoading] = useState (false);
    const [toDelete, setToDelete] = useState([]);
    const [clean, setClean] = useState(false);
    const [serverError,setServerError] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [lista, setLista] = useState([]);
    const [show, setHide] = useState(false);

    const handleModalOpen = () => {
      setModalOpen(!modalOpen);
      setError(false);  
     };

    const limpiarChecks = () => {
      setToDelete([]);
      setClean(true);
    }

    useEffect(() => {
        setLoading(true);
        setRefresh(false);
        getProductsAdmin()
        .then(res => {
            console.log(res);
            setList(res);
            setCopyList(res);
             //Listado del reporte de los productos con poco stock
             res = res.filter( item => item.stock < 50 );
              if (res.lenght !== 0) {
                  setLista(res);
                  setHide(true);
              }
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
            let producto = toDelete[index];
            //Cambiamos el estado
            let {id, active} = producto
            active = !active;
            console.log(id, active)
            setActiveProduct(id, active)
            .then(res => {
               setRefresh(true);
            })
            .catch (err => {
              setServerError(true);
            }); 
           }  
           setServerError(false);
           setToDelete([]);
    }

    const changeList = (product, checked) => {
        if (!checked) {
            setClean(false); 
            setToDelete([...toDelete, product]);
        }
         else {
            setClean(false); 
             let lista = toDelete.filter(item => item.id !== product.id)
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
                lista={lista}
                show={show}
                />)}
        <DeleteProductsModal
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        eliminarProducto={eliminarProducto}
        />
        </Fragment>
    )
}

export default Products;