import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {withRouter} from 'react-router-dom';
import './../../../css/default.css';
import {getUserWishlist} from './utils/CustomerFunctions';
import ProductList from '../../lists/ProductList';
import DeleteProductModal from '../../modals/DeleteProductModal'
import Paginacion from './../shop/Paginacion';
import Info from '../../messages/Info';
import Loading from '../../messages/Loading';

const CustomerWishList = ({setUser, handleDrop,user_id}) => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    //ID del producto a eliminar
    const [idProduct, setIdProduct] = useState(null);
    const [tamañoList, setTamañoList] = useState(null);
    //Paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [listPerPage] = useState(6);

    const handleModalOpen = (id) => {
      if (id != null) {
        setModalOpen(!modalOpen);
        setIdProduct(id);
      }else{
        setModalOpen(!modalOpen);
        setIdProduct(null);
      }  
    };

    useEffect( () => {
      window.scrollTo(0,0);
      setLoading(true);
      getUserWishlist (user_id)
      .then (res => {
        setTamañoList(res.length);
        setList(res);
        setLoading(false);
      })
      .catch (err=>{
          setError (true);
          return;
      });
      setError (false);
            
  }, [user_id, tamañoList] );

  //Obtener lista de productos actual
  const indexOfLastList = currentPage * listPerPage;
  const indexOfFirstList = indexOfLastList - listPerPage;
  const currentList = list.slice(indexOfFirstList, indexOfLastList);

  //Cambiar de pagina
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <Fragment>
      <BreadCrumbs name={"Mis deseos"} />
      <div id="content">
        <div className="container">
          <div className="row bar">
            <div className="col-lg-9">
                <hr />
              {(tamañoList !== 0) ? (<p className="lead">Esta es tu lista de tus productos deseados.</p>) : 
              (<Info className="lead" texto="Actualmente no tienes deseos en tu lista" />)}
              {(loading) ? 
                <Loading/>
               :
              <div>
              { (!error) ? <ProductList style={{'margin-left': '-40px'}} list = {currentList} isEditable={true} handleModalOpen={handleModalOpen} /> : <div className="alert alert-danger mt-2 mb-5 text-center">Hubo un error al recuperar los datos</div>}
              </div>
              }
            </div>
            <CustomerSection user_id={user_id} handleDrop={handleDrop}/>
          </div>
        </div>
      </div>
      <div style={{paddingRight: '270px'}}>
      {(tamañoList !== 0) ? 
      (
        <Paginacion 
        listPerPage={listPerPage} 
        totalList={list.length} 
        paginate={paginate} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
        />
      ) : null}
      </div>  
      <DeleteProductModal 
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        idProduct={idProduct}
        setIdProduct={setIdProduct}
        user_id={user_id} 
        tamañoList={tamañoList}
        setTamañoList={setTamañoList}
        />
      </Fragment>
    );
}

export default withRouter(CustomerWishList);