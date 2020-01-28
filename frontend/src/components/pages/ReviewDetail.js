import React, { Fragment,useEffect,useState } from 'react';
import CustomerSection from './customer/CustomerSection';
import BreadCrumbs from './../BreadCrumbs';
import Error from './../messages/Error';
import './../../css/default.css';
import {Link} from 'react-router-dom';
import {getReview} from'./customer/utils/CustomerFunctions';
import uuid from 'uuid';
import Spinner from 'react-bootstrap/Spinner';
import ReviewMod from './ReviewMod';

const ReviewDetail = ({props,user_id, handleDrop}) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [id_product, setProduct] = useState(null);
    const [commentary, setCommentary] = useState('');
    const [error,setError] = useState (false);
    const [loading,setLoading] = useState (false);
    const [stars,setStars] = useState (0);
    const [refresh, setRefresh] = useState(false);

    useEffect (()=>{
        setLoading (true);
        const id = props.match.params.id;
        getReview(id)
        .then (res =>{
            setId(res.id);
            setTitle(res.title);
            setCommentary(res.commentary);
            setProduct(res.id_product);
            setStars(res.stars);   
            setLoading(false);
        })
        .catch (err =>{
            setLoading(false);
            setError(true);
        })
        setError (false);  
    },[user_id, refresh])

    return (
        <Fragment>
      <BreadCrumbs name={`Editar reseña`} />

      <div id="content">
        <div className="container">
          <div className="row bar">
            {(loading)?
              <div className="col-md-9 text-center"> 
                <Spinner animation="border" variant="info" size="lg"  />
              </div>   
            :
            <div>
            {(error)?
            <Error texto= "Hubo un error al recuperar los datos" /> 
            :
            <div id="customer-order" className="col-lg-12">
            <p className="text-muted">Si tenés alguna duda, por favor <Link to="/contact">contáctanos</Link>, nuestro servicio de atención al cliente trabaja 24/7.</p>
              <div className="box">
                <ReviewMod title={title} user_id={user_id} commentary={commentary} setStars={setStars} stars={stars} setRefresh={setRefresh} id_product={id_product} id={id} />
              
              </div>
            </div>
            }
            </div>
            }
            <CustomerSection handleDrop={handleDrop} />
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default ReviewDetail;
