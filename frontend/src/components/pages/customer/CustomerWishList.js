import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link, withRouter} from 'react-router-dom';
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import {getUserWishlist} from './utils/CustomerFunctions';
import ProductList from '../../lists/ProductList';
import DeleteProductModal from '../../modals/DeleteProductModal'
import Paginacion from './../shop/Paginacion';

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
      setLoading(true);
      getUserWishlist (user_id)
      .then (res => {
          setList(res);
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
      setTamañoList(list.length);
            
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
              <p className="lead">Esta es tu lista de tus productos deseados.</p>
              {(loading) ? 
                <div className="col-md-9 text-center"> 
                  <Spinner animation="border" variant="info" size="lg"  />
                </div> :
              <div>
              { (!error) ? <ProductList style={{'margin-left': '-40px'}} list = {currentList} isEditable={true} handleModalOpen={handleModalOpen} /> : <div className="alert alert-danger mt-2 mb-5 text-center">Hubo un error al recuperar los datos</div>}
              </div>
              }
            </div>
            <CustomerSection user_name={user_id} handleDrop={handleDrop}/>
          </div>
        </div>
      </div>
      <div style={{paddingRight: '270px'}}>
      <Paginacion 
        listPerPage={listPerPage} 
        totalList={list.length} 
        paginate={paginate} 
        setCurrentPage={setCurrentPage} 
        currentPage={currentPage}
        />
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