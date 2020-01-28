import React,{useState} from 'react';
import './../../css/default.css';
import Rating from './shop/Rating';
import {modReview} from './customer/utils/CustomerFunctions';

const ReviewMod = ({user_id,title, commentary, setStars, stars, setRefresh, id_product, id}) => {

    const [titulo,setTitulo] = useState (title);
    const [starss,setStarss] = useState (stars);
    const [comentario,setComentario] = useState(commentary);
    const [error,setError] = useState (false);

    const handleSubmit = async (e) => {
        e.preventDefault ()

        // if (titulo === '' || stars === 0){
        //     setError (true);
        //     console.log('das');
        //     return;
        // }else{
        //     if (comentario === ''){
        //         console.log('asd');
        //         setComentario (null);
        //     }
        // }
        const review = {
            stars: starss,
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
            console.log("asd", err);
            setError(true);
            return;
        })

        setError(false);
        
    }

    return (
        <div className="box mb-4 mt-4">
            { (error) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
            <form onSubmit = {handleSubmit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <h3>Edita la reseña del producto</h3>
                        <label for="firstname">Titulo</label>
                        <input id="firstname" type="text" defaultValue={title} className="form-control" style={{width:'130%'}} onChange = {e => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label for="reseña">Reseña</label>
                        <textarea id="reseña" className="form-control" cols="30" rows="9" style={{width: '185%'}} placeholder='(opcional)' defaultValue={commentary} onChange= {e => setComentario (e.target.value)}></textarea>
                        <span>Valoración: <Rating change = {true} stars ={stars} setStars={setStars} isDefault={true}/></span>
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
