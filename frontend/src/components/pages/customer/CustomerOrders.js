import React, { Fragment } from 'react';
import './../../../css/default.css';
import BreadCrumbs from './../../BreadCrumbs';
import CustomerSection from './CustomerSection';
import {Link} from 'react-router-dom';

const CustomerOrders = () => {
    return (
        <Fragment>
        <BreadCrumbs 
          name={"Mis compras"}
        />
        <div id="content">
        <div className="container">
          <div className="row bar mb-0">
            <div id="customer-orders" className="col-md-9">
            <hr />
            <p className="text-muted">Si tenés alguna duda, por favor <Link to="/contact">contáctanos</Link>, nuestro servicio de atención al cliente trabaja 24/7.</p>
              
              {/* Estas compras son a modo de ejemplo, en el futuro tendremos que hacer un componente a parte que mapee la base de datos */}
              
              <div className="box mt-0 mb-lg-0">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Acción</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>#123</th>
                        <td>22/06/2019</td>
                        <td>$ 150.00</td>
                        <td><span className="badge badge-info">Reservado</span></td>
                        <td><Link to="/customer-order" className="btn btn-outlined btn-sm">Ver</Link></td>
                      </tr>
                      <tr>
                        <th># 1735</th>
                        <td>22/08/2019</td>
                        <td>$ 750.00</td>
                        <td><span className="badge badge-info">Reservado</span></td>
                        <td><Link to="/customer-order" class="btn btn-outlined btn-sm">Ver</Link></td>
                      </tr>
                      <tr>
                        <th># 18</th>
                        <td>25/10/2019</td>
                        <td>$ 550.00</td>
                        <td><span className="badge badge-success">Recibido</span></td>
                        <td><Link to="/customer-order" class="btn btn-outlined btn-sm">Ver</Link></td>
                      </tr>
                      <tr>
                        <th># 256</th>
                        <td>05/11/2019</td>
                        <td>$ 1250.00</td>
                        <td><span className="badge badge-danger">Cancelado</span></td>
                        <td><Link to="/customer-order" class="btn btn-outlined btn-sm">Ver</Link></td>
                      </tr>
                      <tr>
                        <th># 562</th>
                        <td>01/12/2019</td>
                        <td>$ 5150.00</td>
                        <td><span className="badge badge-warning">En camino</span></td>
                        <td><Link to="/customer-order" className="btn btn-outlined btn-sm">Ver</Link></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <CustomerSection  />
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerOrders;
