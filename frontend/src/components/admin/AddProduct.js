import React, { Fragment } from 'react'
import BreadCrumbs from '../BreadCrumbs'

export default function AddProduct() {
    return (
        <Fragment >
            <BreadCrumbs name="Nuevo producto" isAdmin={true} />
            <form style={{marginLeft:'12rem'}} >
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <br/>
                            <h5 for="titulo">Título:</h5>
                            <input
                                id="titulo" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}}    
                            />
                        </div>
                        <div className="form-group">
                            <h5 for="reseña">Descripción:</h5>
                            <textarea 
                                id="reseña" className="form-control" cols="30" rows="9" 
                                style={{width: '80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif'}} 
                                placeholder='(opcional)' 
                                >
                            </textarea>
                        </div>
                        <div className="form-group">
                            <h5 for="material">Material:</h5>
                            <input
                                id="material" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                            />
                        </div>
                        <div className="form-group">
                            <h5 for="marca">Marca:</h5>
                            <input
                                id="marca" type="text" className="form-control" 
                                style={{width:'80%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                            />
                        </div>
                    </div>
                    <div className="col-md-6" >
                        <br/>
                        <h5 for="genero">Género:</h5>
                        <div id="genero" class="form-check" style={{marginLeft:'-3.2rem'}}>
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="M"/><p style={{marginLeft:'3.2rem'}}>Masculino</p>
                            </label>
                        </div>
                        <div class="form-check" style={{marginLeft:'-3.2rem'}}>
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="F"/> <p style={{marginLeft:'3.2rem'}}>Femenino</p>
                            </label>
                        </div>
                        <div class="form-check" style={{marginLeft:'-3.2rem'}}>
                            <label class="form-check-label" >
                                <input type="radio" class="form-check-input" name="U"/> <p style={{marginLeft:'3.2rem'}}>Unisex</p>
                            </label>
                        </div>
                        <div class="form-group">
                        <h5 for="tipo">Seleccione tipo:</h5>
                        <select className="form-control" id="tipo"
                        style={{width:'50%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "pointer"}} >
                            <option>Calzado</option>
                            <option>Remera</option>
                            <option>Pantalon</option>
                            <option>Abrigo</option>
                        </select>
                        </div>
                        <div class="form-group">
                        <h5 for="talle">Seleccione talle:</h5>
                        <select className="form-control" id="talle"
                        style={{width:'50%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "pointer"}} >
                            <option>L</option>
                            <option>XL</option>
                            <option>S</option>
                            <option>M</option>
                        </select>
                        </div>
                        <div class="form-group">
                            <h5 for="talle">Seleccione color:</h5>
                            <select className="form-control" id="talle"
                            style={{width:'50%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "pointer"}} >
                                <option>Azul</option>
                                <option>Verde</option>
                                <option>Rojo</option>
                                <option>Púrpura</option>
                            </select>
                        </div>
                        <div className="form-group row inline-block">
                            <div className="col-md-5">
                            <h5 for="material">Cantidad:</h5>
                            <input
                                id="material" type="number" 
                                min="0" max="999999" className="form-control" 
                                defaultValue="1"
                                style={{width:'43%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                            />
                            </div>
                            <div className="col-md-7" style={{marginLeft:'-5rem'}}>
                            <h5 for="material">Descuento:</h5>
                            <input
                                id="material" type="number" 
                                min="0" max="100" className="form-control"
                                defaultValue="0" 
                                style={{width:'30%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                            />
                            </div>
                            
                        </div>
                </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <h5 for="precio">Precio unitario:</h5>
                            <input
                                id="precio" type="number" 
                                min="0" max="999999" className="form-control" 
                                defaultValue="0"
                                style={{width:'43%', border: '3px solid #cccccc', fontFamily: 'Tahoma, sans-serif', cursor: "default"}} 
                            />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <br/>
                        <div className=" form-group"> 
                            <button className="btn btn-primary btn-lg" type="submit"> Cargar producto</button> 
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}
