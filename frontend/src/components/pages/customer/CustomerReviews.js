import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {withRouter} from 'react-router-dom';
import './../../../css/default.css';
import {listUserReviews, deleteReview} from './utils/CustomerFunctions';
import DeleteReviewModal from '../../modals/DeleteReviewModal'
import ReviewList from '../../lists/reviews/ReviewList';
import Info from '../../messages/Info';
import Error from '../../messages/Error';
import Loading from '../../messages/Loading';

const CustomerReviews = ({ handleDrop,user_id}) => {

    const [error,setError] = useState (false);
    const [list,setList] = useState ([]);
    const [loading, setLoading] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    //reserva a cancelar
    const [review, setReview] = useState(null);
    const [serverError,setServerError] = useState(false);
    const [refresh,setRefresh] = useState (false);

    const handleModalOpen = (reseña) => {
    
        if (reseña != null) {
        setModalOpen(!modalOpen);
        setReview(reseña);
      }else{
        setModalOpen(!modalOpen);
        setReview(null);
      }
      setError(false);  
     };

    const eliminarReview = () => {
      const {id} = review;
      deleteReview(id)
      .then(res => {
        setRefresh(true);
      })
      .catch (err => {
        setServerError(true);
      });
      setServerError(false);
      setReview(null);
    }

    useEffect( () => {
      window.scrollTo(0,0);
      setLoading(true);
      let id = user_id;
      listUserReviews(id)
      .then (res => {
          if (res.length !== 0)setList(res)
          setLoading(false);
      })
      .catch (err=>{
          setServerError(true);
          return;
      });
      setError (false);
      setServerError(false);
          
  }, [user_id,refresh] );


  return (
      <Fragment>
      <BreadCrumbs 
        name={"Mis reseñas"}
      />
      <div id="content">
      <div className="container">
        <div className="row bar mb-0">
          <div id="customer-orders" className="col-md-9">
          <hr />
          <div>
          
          {(loading) ? 
              <Loading/>
              :
              <div>
                  { (serverError)?
                  <Error texto="Hubo un error al recuperar los datos"/>
                  :
                  <div>
                    { (list.length === 0) ?
                    <Info texto="No hay reseñas para mostrar" />
                    :
                    <ReviewList list={list} handleModalOpen={handleModalOpen} />
                    }
                  </div>
                  }
              </div>}
            </div>
          </div>
          <CustomerSection handleDrop={handleDrop} user_id={user_id}/>
        </div>
      </div>
    </div>
    <DeleteReviewModal
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        eliminarReview={eliminarReview}
        user_id={user_id} 
  />
    </Fragment> 
    );
}
   
export default withRouter(CustomerReviews);