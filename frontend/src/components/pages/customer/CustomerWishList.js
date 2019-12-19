import React, { Fragment } from 'react';
import BreadCrumbs from '../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
//Imagenes
import product1 from "./../../../assets/product1.jpg"
import product2 from "./../../../assets/product2.jpg"
import product3 from "./../../../assets/product3.jpg"
import product4 from "./../../../assets/product4.jpg"
import product5 from "./../../../assets/product5.jpg" 

const CustomerWishList = () => {
    return (
        <Fragment>
      <BreadCrumbs name={"Mis deseos"} />
      {/* Productos a modo de ejemplo, en el futuro implementar componente que mapee la base de datos */}
      <div id="content">
        <div className="container">
          <div className="row bar">
            <div className="col-lg-9">
                <hr />
              <p className="lead">Esta es tu lista de tus productos deseados.</p>
              <div className="row products">
                <div className="col-lg-3 col-md-4">
                  <div className="product">
                    <div className="image"><Link to="/shop-detail"><img src={product1} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Zapatillas azules deportivas Adidas</Link></h3>
                      <p className="price">$2143.00</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="product">
                    <div className="image"><Link to="/shop-detail"><img src={product2} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Camiseta deportiva</Link></h3>
                      <p className="price">
                        <del>$980</del> $1200.00
                      </p>
                    </div>
                    <div className="ribbon-holder">
                      <div className="ribbon sale">LIQUIDACION</div>
                      <div className="ribbon new">NUEVA</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="product">
                    <div className="image"><Link to="/shop-detail"><img src={product3} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Pantalon soldado Ibera</Link></h3>
                      <p className="price">$2300.00</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="product">
                    <div className="image"><Link to="/shop-detail"><img src={product4} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Sudadera blanca con capucha</Link></h3>
                      <p className="price">$1500.00</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="product">
                    <div className="image"><Link to="/shop-detail"><img src={product5} alt="" className="img-fluid image1"/></Link></div>
                    <div className="text">
                      <h3 className="h5"><Link to="/shop-detail">Sudadera negra para chico con capucha</Link></h3>
                      <p className="price">$1250.00</p>
                    </div>
                    <div className="ribbon-holder">
                      <div className="ribbon new">NUEVO</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CustomerSection />
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerWishList;
