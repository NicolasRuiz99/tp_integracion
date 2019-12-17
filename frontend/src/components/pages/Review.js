import React from 'react';
import './../../css/default.css';
import Rating from './shop/Rating';

const Review = () => {
    return (
        <div className="box mb-4 mt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <h3>Escribe una reseña del producto</h3>
                        <label for="firstname">Titulo</label>
                        <input id="firstname" type="text" className="form-control" style={{width:'130%'}}
                        />
                    </div>
                    <div className="form-group">
                        <label for="reseña">Reseña</label>
                        <textarea id="reseña" className="form-control" cols="30" rows="9" style={{width: '185%'}}></textarea>
                        <span>Valoración: <Rating stars={6} change = {true}/></span>
                    </div>
                </div>
            </div>
            <div className="text-center">
            <button className="btn btn-primary" type="submit"> Enviar</button> 
            </div>
        </div>
    );
}

export default Review;
