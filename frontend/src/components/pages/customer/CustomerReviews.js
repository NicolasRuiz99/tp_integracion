import React, { Fragment,useState,useEffect } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link, withRouter} from 'react-router-dom';
import './../../../css/default.css';
import Spinner from 'react-bootstrap/Spinner';
import {listUserReviews, deleteReview} from './utils/CustomerFunctions';
import DeleteReviewModal from '../../modals/DeleteReviewModal'
import ReviewList from '../../lists/reviews/ReviewList';
import Info from '../../messages/Info';

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
      if (list.length === 0){
          setError (true);
      }
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
              <div className="col-md-9 text-center"> 
              <Spinner animation="border" variant="info" size="lg"  />
              </div> 
              :
              <div>
                  { (serverError)?
                  <div className="alert alert-danger mt-2 mb-5 text-center">
                    Hubo un error al recuperar los datos
                  </div>
                  :
                  <div>
                    { (error) ?
                    <Info className="lead" texto="Actualmente no tienes reseñas en tu lista" />
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