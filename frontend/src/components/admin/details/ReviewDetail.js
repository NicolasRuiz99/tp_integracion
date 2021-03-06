import React, {useEffect, useState, Fragment} from 'react'
import './../../../css/default.css';
import { getReview, deleteReview } from '../../pages/customer/utils/CustomerFunctions';
import Rating from '../../pages/shop/Rating';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';
import DeleteReviewModal from './../../modals/DeleteReviewModal';
import Error from '../../messages/Error';
import BreadCrumbs from '../../BreadCrumbs';
import LoadingDark from '../../messages/LoadingDark';


function ReviewDetail({props, history}) {
    const [review, setReview] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState (false);
    const [id] = useState(props.match.params.id);
    const [link, setLink] = useState('');

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
        setError(false);  
       };

    useEffect(() => {    
        window.scrollTo(0, 0);
        setLoading(true);
        getReview(id)
        .then(res => {
            console.log(res);
            setReview(res);
            setLink(`/admin-page/customer-detail/${res.id_user}`);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false)
    }, []);

    const handleDelete = () => {
        deleteReview(id)
        .then(res => {
            history.push('/admin-page/reviews');
        })
        .catch (err => {
            setError(true);
            return;
        }); 
        setError(false);  
    }

    return (
        <Fragment >
            <BreadCrumbs name={(review.id) ? (`Reseña #${review.id}`) : null} isAdmin={true} />
        <div className="row addresses" >
            {(loading) ? (
                <LoadingDark/>
            ): ( (error) ? (<Error texto="Ha ocurrido un error interno en el servidor" />) : (
                <div className="card shadow" style={{left:'35%',position:'absolute',bottom:'33%', width:'30%'}}>
                    <div className="card-header">
                        <h3 className="text-center">
                            <label>
                                <span><Rating change={false} stars={review.stars} /></span>
                            </label>
                        </h3>
                        <Link className="float-right" to={link}> Usuario #{review.id_user}</Link>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 text-center">
                            <div className="card-title text-uppercase">
                                <h4>{review.title} </h4>
                            </div>
                            <div className="card-subtitle">
                                <p className="text-muted"><br />{(review.commentary === null) ? ('Sin comentarios') : (review.commentary)} <br /> </p>
                            </div>
                            <div className="card-text" style={{float: 'right'}}>
                            <Button variant="danger" onClick={handleModalOpen} className="btn btn-danger">
                                Eliminar
                            </Button>
                            </div>  
                        </div>
                        
                    </div>
                </div>
            ))}
                <DeleteReviewModal 
                modalOpen={modalOpen}
                handleModalOpen={handleModalOpen}
                eliminarReview={handleDelete}
                />
        </div>
        </Fragment>
    )
}

export default withRouter(ReviewDetail);