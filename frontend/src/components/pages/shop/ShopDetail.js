import React, { Fragment } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import Filtros from './Filtros';
import {Link} from 'react-router-dom';
import Review from './../Review';
import './../../../css/default.css';
import Rating from './Rating';
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

const ShopDetail = () => {
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
    return (
        <Fragment>
      <BreadCrumbs name={"Nombre del producto"} />

      <div id="content">
        <div className="container">
          <div className="row bar">
            <Filtros />
            <div className="col-lg-9">
              <div id="productMain" className="row">
                <div className="col-sm-6">
                <ImageGallery items={images} />
                </div>
                <div className="col-sm-6">
                  <div className="box">
                    <form>
                      <div className="sizes">
                        <h3>Tamaños disponibles</h3>
                        <select className="bs-select" >
                          <option value="38">38</option>
                          <option value="39">39</option>
                          <option value="40">40</option>
                          <option value="42">42</option>
                        </select>
                      </div>
                      <p className="price">$824.00</p>
                      <p className="text-center">
                        <button type="submit" className="btn btn-outlined"><i className="fa fa-shopping-cart"></i> Añadir al carrito</button>
                        <button type="submit" data-toggle="tooltip" data-placement="top" title="Añadir a mis deseos" className="btn btn-default"><i className="fa fa-heart-o"></i></button>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div id="details" className="box mb-4 mt-4">
                <p></p>
                <h4>Detalles del producto</h4>
                <p>Zapatos de vestir Pizzoni hombre</p>
                <h4>Material</h4>
                <ul>
                  <li>Cuero</li>
                </ul>
                <h4>Tamaño</h4>
                <ul>
                  <li>Regular</li>
                </ul>
                <blockquote className="blockquote">
                  <p className="mb-0"><em>Zapato de vestir de Hombre Pizzoni con costura en capellada. Fabricado en Ecocuero, con plantilla confortable y base en PVC de larga duración</em></p>
                </blockquote>
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
              <div className="box mb-4 mt-4">
                <h3 className="m_3">Reseñas del producto</h3>
                <p className="m_text">Customer1: Muy bueno! quedé encantado  <Rating stars={5}/></p>
                <p className="m_text">Customer2: Pésimo material <Rating stars={1}/></p>
                <p className="m_text">Customer3: Todo OK! <Rating stars={4}/></p>
              </div>
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
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="box text-uppercase mt-0 mb-small">
                    <h3>Productos visitados</h3>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product">
                    <div className="image"><Link to="#"><img src={product5} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Sudadera negra con capucha</Link></h3>
                      <p className="price">$1250</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="product">
                    <div className="image"><Link to="#"><img src={product4} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Sudadera blanca con capucha</Link></h3>
                      <p className="price">$1500</p>
                    </div>
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
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default ShopDetail;
