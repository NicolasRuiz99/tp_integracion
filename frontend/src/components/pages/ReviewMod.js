import React,{useState} from 'react';
import './../../css/default.css';
import Rating from './shop/Rating';
import {modReview} from './customer/utils/CustomerFunctions';
import { validarReview } from '../../validacion/validate';
import Error from '../messages/Error';

const ReviewMod = ({user_id,title, commentary, setStars, stars, setRefresh, id_product, id}) => {

    const [titulo,setTitulo] = useState (title);
    const [comentario,setComentario] = useState(commentary);
    const [error,setError] = useState ({});
    const [serverError, setServerError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault ()
        const err = validarReview(titulo);
        if (err.obligatorio) {
            setError(err);
            return;
        }
    
        const review = {
            stars,
            title: titulo,
            commentary: comentario,
            id_product,
            id_user: user_id,
            id
        }
        modReview(review)
        .then(res =>{
            setRefresh(true);  
        })
        .catch (err => {
            setServerError(true);
            return;
        })
        setServerError(false);
        setError({});
    }

    return (
        <div className="box mb-4 mt-4">
           { error.obligatorio && <Error texto={error.obligatorio}/>}
           { serverError && <Error texto="Ha ocurrido un error en el servidor"/>}
            <form onSubmit = {handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <h3>Edita la reseña del producto aquí</h3>
                        <h5 for="firstname">Titulo</h5>
                        <input id="firstname" type="text" defaultValue={title} className="form-control" style={{width:'130%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} onChange = {e => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <h5 for="reseña">Reseña</h5>
                        <textarea id="reseña" className="form-control" cols="30" rows="9" style={{width: '185%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif'}} placeholder='(opcional)' defaultValue={commentary} onChange= {e => setComentario (e.target.value)}></textarea>
                        <span>Valoración: <Rating change = {true} stars ={stars} setStars={setStars}/></span>
                    </div>
                </div>
            </div>
            <div className="text-center">
            <button className="btn btn-primary" type="submit"> Editar</button> 
            </div>
            </form>
        </div>
    );
}

export default ReviewMod;
