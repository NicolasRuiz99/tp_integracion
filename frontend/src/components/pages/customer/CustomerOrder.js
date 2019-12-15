import React, { Fragment } from 'react';
import CustomerSection from './CustomerSection';
import BreadCrumbs from '../../BreadCrumbs';
import img1 from "./../../../assets/detailsquare.jpg";
import img2 from "./../../../assets/detailsquare2.jpg";
import './../../../css/default.css';
import {Link} from 'react-router-dom';


const CustomerOrder = () => {
    return (
        <Fragment>
      <BreadCrumbs name={"Compra # 123"} />

      <div id="content">
        <div className="container">
          <div className="row bar">
            <div id="customer-order" className="col-lg-9">
            <hr />
            <p className="lead">La compra #123 fue solicitada el <strong>22/06/2019</strong> y en este momento <strong>Está reservada</strong>.</p>
            <p className="text-muted">Si tenés alguna duda, por favor <Link to="/contact">contáctanos</Link>, nuestro servicio de atención al cliente trabaja 24/7.</p>
              <div className="box">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th colspan="2" className="border-top-0">Producto</th>
                        <th className="border-top-0">Cantidad</th>
                        <th className="border-top-0">Precio unitario</th>
                        <th className="border-top-0">Descuento</th>
                        <th className="border-top-0">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><Link to="/shop-detail"><img src={img2} alt="billetera" className="img-fluid"/></Link></td>
                        <td><Link to="/shop-detail">Billetera de cuero negra</Link></td>
                        <td>2</td>
                        <td>$20.00</td>
                        <td>$0.00</td>
                        <td>$40.00</td>
                      </tr>
                      <tr>
                        <td><Link to="/shop-detail"><img src={img1} alt="zapato" className="img-fluid"/></Link></td>
                        <td><Link to="/shop-detail">Zapato de cuero negro</Link></td>
                        <td>1</td>
                        <td>$83.00</td>
                        <td>$0.00</td>
                        <td>$83.00</td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <th colspan="5" className="text-right">Subtotal de la compra</th>
                        <th>$123.00</th>
                      </tr>
                      <tr>
                        <th colspan="5" className="text-right">Envío</th>
                        <th>$0.00</th>
                      </tr>
                      <tr>
                        <th colspan="5" className="text-right">Impuesto</th>
                        <th>$0.00</th>
                      </tr>
                      <tr>
                        <th colspan="5" className="text-right">Total</th>
                        <th>$123.00</th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="row addresses">
                  <div className="col-md-6 text-right">
                    <h3 className="text-uppercase">Dirección de envío</h3>
                    <p>Nicolás Rondán<br />		Entre Ríos<br />	Concepción del Uruguay<br />	 Belgrano 679<br />		 Argentina<br /> </p>
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

export default CustomerOrder;
