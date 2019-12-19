import React, { Fragment,useEffect,useState } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import {Link,withRouter} from 'react-router-dom';
import Review from './../Review';
import './../../../css/default.css';
import {getProductInfo,getProductColor_size,getProductReview} from './utils/shopFunctions';
//React image gallery
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
//Imagenes
import product1 from "./../../../assets/product1.jpg";
import product2 from "./../../../assets/product2.jpg";
import product3 from "./../../../assets/product3.jpg";
import product4 from "./../../../assets/product4.jpg";
import product5 from "./../../../assets/product5.jpg" ;
import img from "./../../../assets/detailsquareBig.jpg";
import img2 from "./../../../assets/detailsquare.jpg";
import ReviewList from '../../lists/ReviewList';

const ShopDetail = ({props}) => {
    const images = [
    {
      original: img,
      thumbnail: img2,
    },{
      original: img,
      thumbnail: img2,
    },{
      original: img,
      thumbnail: img2,
    }]

    const [prodInfo,setProdInfo] = useState ({});
    const [color_size,setColor_size] = useState ([]);
    const [reviews,setReviews] = useState ([]);
    const [error,setError] = useState (false);

    useEffect (()=>{
      const product_id = props.match.params.id;
      
      getProductInfo (product_id)
      .then(res =>{
          setProdInfo (res);
      })
      .catch (err =>{
          setError (true);
          return;
      })

      getProductColor_size (product_id)
      .then(res =>{
        setColor_size (res);
      })
      .catch (err =>{
        setError (true);
        return;
      })

      getProductReview (product_id)
      .then(res =>{
        setReviews (res);
      })
      .catch (err =>{
        setError (true);
        return;
      })

      setError (false);

    },[props.match.params.id])

    return (
        <Fragment>
      <BreadCrumbs name={prodInfo.name} />

      <div id="content">
        <div className="container">
          <div className="row bar">
            <div className="col-lg-9">
              <div id="productMain" className="row">
                <div className="col-sm-6">
                <ImageGallery items={images} />
                </div>
                <div className="col-sm-6">
                  <div className="box mb-4 mt-4">
                    <form>
                     
                      <div className="sizes">
                      <div className="col-sm-10">
                        <h3>Tamaños disponibles</h3>
                        
                          <select className="bs-select" >
                          <option value="38">38</option>
                          <option value="39">39</option>
                          <option value="40">40</option>
                          <option value="42">42</option>
                        </select>
                        </div>
                        <br/>
                        
                      </div>
                      <div className="sizes">
                      <div className="col-sm-10">
                      <h3>Colores disponibles</h3>
                        <select className="bs-select" >
                          <option value="38">Marrón</option>
                          <option value="39">Negro</option>
                          <option value="40">Blanco</option>
                          <option value="42">Amarillo</option>
                        </select>
                        </div>
                        <br />
                      </div>
                      <div className="sizes">
                      <div className="col-sm-11">
                      <h3>Unidades <span className="span-detail">(566 disponibles)</span></h3>
                        <select className="bs-select" >
                          <option value="38">1</option>
                          <option value="39">2</option>
                          <option value="40">3</option>
                          <option value="42">4</option>
                        </select>
                      </div>
                      </div>
                      <div className="col-sm-11">
                      <div className="product">
                        <p className="price"> {(prodInfo.discount !== 0)?<del> ${prodInfo.price} </del> : null} ${prodInfo.price-((prodInfo.discount*prodInfo.price)/100)}</p> 
                      </div>
                      <p className="text-center">
                        <button type="submit" className="btn btn-outlined"><i className="fa fa-shopping-cart"></i> Añadir al carrito</button>
                        <button type="submit" data-toggle="tooltip" data-placement="top" title="Añadir a mis deseos" className="btn btn-default"><i className="fa fa-heart-o"></i></button>
                        <button type="submit" data-toggle="tooltip" data-placement="top" title="Reservar" className="btn btn-default"><i class="far fa-calendar-alt"></i></button>   
                      </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div id="details" className="box mb-4 mt-4">
                <p></p>
                <h4>Detalles del producto</h4>
                <blockquote className="blockquote">
                  <p className="mb-0"><em>{prodInfo.dsc}</em></p>
                </blockquote>
                <h4>Material</h4>
                <ul>
                  <li>{prodInfo.material}</li>
                </ul>
                <h4>Marca</h4>
                <ul>
                  <li>{prodInfo.brand}</li>
                </ul>
              </div>
              <div id="product-social" className="box social text-center mb-5 mt-5">
                <h4 className="heading-light">Compártelo con tus amigos</h4>
                <ul className="social list-inline">
                  <li className="list-inline-item"><Link to="#" data-animate-hover="pulse" className="external facebook"><i className="fab fa-facebook"></i></Link></li>
                  <li className="list-inline-item"><Link to="#" data-animate-hover="pulse" className="external gplus"><i className="fab fa-google-plus"></i></Link></li>
                </ul>
              </div>
              {/* Reseñas */}
              <Review />
              <ReviewList list = {reviews} />
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="box text-uppercase mt-0 mb-small">
                    <h3>Productos que te podrían interesar</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product">
                    <div className="image"><Link to="#"><img src={product2} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Camiseta deportiva</Link></h3>
                      <p className="price">$980</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product">
                    <div className="image"><Link to="#"><img src={product3} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Pantalon soldado Ibera</Link></h3>
                      <p className="price">$2300</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product">
                    <div className="image"><Link to="#"><img src={product1} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Zapatillas azules deportivas Adidas</Link></h3>
                      <p className="price">$2143</p>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default withRouter (ShopDetail);
