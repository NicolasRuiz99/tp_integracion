import React, { Fragment,useEffect,useState } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import {Link,withRouter} from 'react-router-dom';
import Review from './../Review';
import Rating from './Rating';
import './../../../css/default.css';
import {getProductInfo,getProductColor_size,getProductReview} from './utils/shopFunctions';
import {getWishlistItem,addWishlistItem,deleteWishlistItem,getUserPurchaseItem,addCartItem,getCartInfo,
        addReservation,getReservation, getUserReservationList, modReservation} from '../customer/utils/CustomerFunctions';
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
import Color_sizeList from '../../lists/Color_sizeList';
import Spinner from 'react-bootstrap/Spinner';
import moment from 'moment';

const ShopDetail = ({props,user_id,history}) => {
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
    const [avgReview,setAvgReview] = useState (0);
    const [error,setError] = useState (false);
    const [isWishlisted,setWishlisted] = useState (false);
    const [isReservated, setIsReservated] = useState(false);
    const [reservas, setReservas] = useState([]);
    const [isPurchased,setPurchased] = useState (false);
    const [isReviewed,setReviewed] = useState (false);
    const [selectedItem,setSelectedItem] = useState ({});
    const [selectedStock,setSelectedStock] = useState (1);
    const [loading,setLoading] = useState (false);

    const getAverage = (list) => {
      let total = 0;
      if (list.length !== 0){
        for (let i = 0; i < list.length; i++){
          total += list[i].stars        
      }
      total = total / list.length;
      }
      setAvgReview (total)
    }

    const getUserReview = (list) => {
        const res = list
        for (let i = 0; i < res.length; i++){
          if (res[i].id_user === user_id){
            setReviewed (true);
            break;
          }
        }
    }

    const ManageWishlist = () => {
      const product_id = prodInfo.id
      
      if (isWishlisted) {
          deleteWishlistItem ({user_id,product_id})
          .then (res=>{
            setWishlisted (false);
          })
          .catch (err =>{
            setError (true);
            return;
          })
      }else{
        addWishlistItem ({user_id,product_id})
        .then (res=>{
          setWishlisted (true);
        })
        .catch (err =>{
          setError (true);
          return;
        })
      }
    }

    const ManageReservation = () => {
        let id;
        let id_user = user_id;
        let state ;
        let date;
        let stock ;
        let id_color_size ;
 
      if (isReservated) {
        let id= reservas.id;
        let state = 'cancelled';
        let date = reservas.date;
        let stock = reservas.stock;
        let id_color_size = reservas.id_color_size
        modReservation({id,date,stock,id_user,id_color_size,state})
        .then(res => {
          setIsReservated(false);
        })
        .catch (err => {
          setError(true);
          return;
        });
      }
      else{
        date = moment().format('DD/MM/YYYY');
        state = "reservated";
        stock = selectedItem.stock;
        id_color_size = color_size.id;
        addReservation({date,stock,id_user,id_color_size,state})
        .then(res => {
          setIsReservated(true);
        })
        .catch (err =>{
          setError (true);
          return;
        })
    }
  }
    const addToCart = () =>{
        if (selectedStock <= 0 || selectedStock > selectedItem.stock){
            setSelectedStock (1);
            return;
        }
        getCartInfo (user_id)
        .then (res => {
            addCartItem (selectedItem.id,res[0].id,selectedStock)
            .then (res=>{
              history.push('/shop-checkout/cart');
            })
            .catch (err => {
                setError (true);
                return;
            })
        })
        .catch (err => {
            setError (true);
            return;
        }) 
    }
    
    useEffect (()=>{
      setLoading (true);
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

      getUserPurchaseItem ({user_id,product_id})
      .then(res =>{
        setPurchased (res);
      })
      .catch (err =>{
        setError (true);
      return;
      })

      getProductReview (product_id)
      .then(res =>{
        setReviews (res);
        getAverage(res);
        getUserReview (res);
      })
      .catch (err =>{
        setError (true);
        return;
      })
      
      getWishlistItem ({user_id,product_id})
      .then(res =>{
          setWishlisted (res);
      })
      .catch (err =>{
        setError (true);
        return;
      })
     
      getUserReservationList(user_id)
      .then (res => {
        res = res.filter(item => item.prod_id == product_id && item.state === "reservated");
        if (res.length === 0) {
          setIsReservated(false);
        }else {
          setIsReservated(true);
          setReservas(res);
        }
        
        //console.log(res);
      })
      .catch (err=>{
          setError(true);
          return;
      });
      setError (false);
      
    },[user_id,isReviewed])

    if (user_id === null){
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
                <div className="col-sm-5">
                  <div className="box mb-4 mt-4">
                    <form>
                      <Color_sizeList list = {color_size} setSelectedItem = {setSelectedItem} setSelectedStock = {setSelectedStock} selectedStock = {selectedStock} />
                      <div className="col-sm-11">
                      <div className="product">
                        <p className="price"> {(prodInfo.discount !== 0)?<del> ${prodInfo.price} </del> : null} ${prodInfo.price-((prodInfo.discount*prodInfo.price)/100)}</p> 
                      </div>
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
                <h4>Valoración media</h4>
                <ul>
                <li><Rating stars={avgReview} change={false}/> ({reviews.length} opinion/es)</li> 
                </ul>
                <h4>Material</h4>
                <ul>
                  <li>{prodInfo.material}</li>
                </ul>
                <h4>Marca</h4>
                <ul>
                  <li>{prodInfo.brand}</li>
                </ul>               
              </div>
              {/* Reseñas */}
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
    }else{
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
                      <Color_sizeList list = {color_size} setSelectedItem = {setSelectedItem} setSelectedStock = {setSelectedStock} selectedStock = {selectedStock}/>
                      <div className="col-sm-11">
                      <div className="product">
                        <p className="price"> {(prodInfo.discount !== 0)?<del> ${prodInfo.price} </del> : null} ${prodInfo.price-((prodInfo.discount*prodInfo.price)/100)}</p> 
                      </div>
                      <p className="text-center">
                        {(selectedItem.stock === 0)?
                        <button className="btn btn-outlined" disabled ><i className="fa fa-shopping-cart"></i> Añadir al carrito</button>
                        :
                        <button type="button"  className="btn btn-outlined" onClick={addToCart} ><i className="fa fa-shopping-cart"></i> Añadir al carrito</button>
                        }                      
                        <button data-toggle="tooltip" type="button" data-placement="top" title={`${(isWishlisted) ? 'Eliminar de mis deseos' : 'Añadir a mis deseos'}`} 
                        className={`btn ${(isWishlisted) ? ('btn-danger') : ('btn-default')}`} 
                        onClick={ManageWishlist}>
                          <i className="fa fa-heart-o"></i>
                        </button>
                        <button type="button" data-toggle="tooltip" data-placement="top" title={`${(isReservated) ? 'Reservar' : 'Cancelar reserva'}`} 
                        className={`btn ${isReservated ? ('btn-success') : ('btn-default')}`}
                        onClick={ManageReservation}>
                          <i class="far fa-calendar-alt"></i>
                        </button>
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
                <h4>Valoración media</h4>
                <ul>
                <li><Rating stars={avgReview} change={false}/> ({reviews.length} opinion/es)</li>
                </ul>
                <h4>Material</h4>
                <ul>
                  <li>{prodInfo.material}</li>
                </ul>
                <h4>Marca</h4>
                <ul>
                  <li>{prodInfo.brand}</li>
                </ul>               
              </div>
              
              {/* Reseñas */}
              {(isPurchased)?
              <div>
                {(isReviewed)?
                <h4 className="heading-light">Producto ya valorado</h4>
                :
                <Review setReviewed = {setReviewed} user_id = {user_id} prod_id = {prodInfo.id}/>
                }
              </div>
              :
              <h4 className="heading-light">Compra el producto para opinar!</h4>
              }
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
}

export default withRouter (ShopDetail);
