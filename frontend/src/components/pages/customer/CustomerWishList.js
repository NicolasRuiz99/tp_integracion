import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link, withRouter} from 'react-router-dom';
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import {getUserWishlist} from './utils/CustomerFunctions';
import ProductList from '../../lists/ProductList';
import DeleteProductModal from '../../modals/DeleteProductModal'

const CustomerWishList = ({setUser, handleDrop,user_id}) => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    //ID del producto a eliminar
    const [idProduct, setIdProduct] = useState(null);
    const [tamañoList, setTamañoList] = useState(null);

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
              { (!error) ? <ProductList style={{'margin-left': '-40px'}} list = {list} isEditable={true} handleModalOpen={handleModalOpen} /> : <div className="alert alert-danger mt-2 mb-5 text-center">Hubo un error al recuperar los datos</div>}
              </div>
              }
            </div>
            <CustomerSection setUser={setUser} handleDrop={handleDrop}/>
          </div>
        </div>
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