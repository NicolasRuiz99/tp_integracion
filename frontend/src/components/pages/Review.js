import React,{useState} from 'react';
import './../../css/default.css';
import Rating from './shop/Rating';
import {addReviewItem} from './customer/utils/CustomerFunctions';

const ReviewMod = ({setReviewed,user_id,prod_id}) => {

    const [title,setTitle] = useState ('');
    const [stars,setStars] = useState (0);
    const [commentary,setCommentary] = useState (null);
    const [error,setError] = useState (false);

    const handleSubmit = async (e) => {
        e.preventDefault ()

        if (title === '' || stars === 0){
            setError (true);
            return;
        }else{
            if (commentary === ''){
                setCommentary (null);
            }
        }
        
        addReviewItem ({user_id,prod_id,title,stars,commentary})
        .then (res =>{
            setReviewed (true);
        })
        .catch (err => {
            setError (true);
            return;
        })

        setError (false);
        
    }

    return (
        <div className="box mb-4 mt-4">
            { (error) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
            <form onSubmit = {handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <h3>Escribe una reseña del producto</h3>
                        <label for="firstname">Titulo</label>
                        <input id="firstname" type="text" className="form-control" style={{width:'130%'}} onChange = {e => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="reseña">Reseña</label>
                        <textarea id="reseña" className="form-control" cols="30" rows="9" style={{width: '185%'}} placeholder='(opcional)' onChange= {e => setCommentary (e.target.value)}></textarea>
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
