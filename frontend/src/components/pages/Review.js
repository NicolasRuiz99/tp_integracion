import React,{useState} from 'react';
import './../../css/default.css';
import Rating from './shop/Rating';
import {addReviewItem} from './customer/utils/CustomerFunctions';
import { validarReview } from '../../validacion/validate';
import Error from '../messages/Error';

const ReviewMod = ({setReviewed,user_id,prod_id}) => {

    const [title,setTitle] = useState ('');
    const [stars,setStars] = useState (0);
    const [commentary,setCommentary] = useState (null);
    const [error,setError] = useState ({});
    const [serverError, setServerError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault ()
        const err = validarReview(title, stars);
        if (err.obligatorio || err.stars){
            setError(err);
            return;
        }
        
        addReviewItem ({user_id,prod_id,title,stars,commentary})
        .then (res =>{
            setReviewed (true);
        })
        .catch (err => {
            setServerError (true);
            return;
        })
        setServerError(false);
        setError ({});
        
    }

    return (
        <div >
            { error.obligatorio && <Error texto={error.obligatorio}/>}
            { error.stars && <Error texto={error.stars}/>}
            { serverError && <Error texto="Ha ocurrido un error en el servidor"/>}
            <form onSubmit = {handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <h3>Escribe una reseña del producto</h3>
                        <label for="firstname">Titulo</label>
                        <input id="firstname" type="text" className="form-control" style={{width:'130%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: 'default'}} onChange = {e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="reseña">Reseña</label>
                        <textarea id="reseña" className="form-control" cols="30" rows="9" style={{width: '185%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif'}} placeholder='(opcional)' onChange= {e => setCommentary (e.target.value)}></textarea>
                        <span>Valoración: <Rating change = {true} setStars = {setStars}/></span>
                    </div>
                </div>
            </div>
            <div className="text-center">
            <button className="btn btn-primary" type="submit"> Enviar</button> 
            </div>
            </form>
        </div>
    );
}

export default ReviewMod;
