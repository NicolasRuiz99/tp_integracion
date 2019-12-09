import React, { Fragment } from 'react';
import CustomerSection from './CustomerSection';
import './../../../css/default.css';
import BreadCrumbs from '../../BreadCrumbs';

const CustomerAccount = () => {
    return (
      <Fragment >
      <BreadCrumbs 
        name={"Mi cuenta"}
      />
        <div id="content">
        <div className="container">
          <div className="row bar">
            <div id="customer-account" className="col-lg-9 clearfix">
              <hr />
              <p className="lead">Cambiá tus datos personales o tu contraseña acá.</p>
              <div className="box mt-5">
                <div className="heading">
                  <h3 className="text-uppercase">Cambiar contraseña</h3>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="password_old">Contraseña antigua</label>
                        <input id="password_old" type="password" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="password_1">Nueva contraseña</label>
                        <input id="password_1" type="password" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="password_2">Reescribe la nueva contraseña</label>
                        <input id="password_2" type="password" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outlined"><i className="fa fa-save"></i> Guardar nueva contraseña</button>
                  </div>
                </form>
              </div>
              <div className="bo3">
                <div className="heading">
                  <h3 className="text-uppercase">Detalles personales</h3>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="nombre">Nombre</label>
                        <input id="nombre" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="apellido">Apellido</label>
                        <input id="apellido" type="text" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="provincia">Provincia</label>
                        <input id="provincia" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="direccion">Dirección</label>
                        <input id="direccion" type="text" className="form-control"/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="form-group">
                        <label for="ciudad">Ciudad</label>
                        <input id="ciudad" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="form-group">
                        <label for="zip">Código postal</label>
                        <input id="zip" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="form-group">
                        <label for="talle1">Talle-calzado</label>
                        <select id="talle1" className="form-control">
                            <option value="">- Elige tu talle -</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="form-group">
                        <label for="talle2">Talle-ropa</label>
                        <select id="talle2" className="form-control">
                            <option value="">- Elige tu talle -</option>
                            <option value="S">S</option>
                            <option value="XS">XS</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="phone">Teléfono</label>
                        <input id="phone" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email_account">Email</label>
                        <input id="email_account" type="text" className="form-control"/>
                      </div>
                    </div>
                    <div className="col-md-12 text-center">
                      <button type="submit" className="btn btn-outlined"><i className="fa fa-save"></i> Guardar cambios</button>
                      <hr />
                    </div> 
                  </div>
                </form>
              </div>
            </div>
            <CustomerSection />
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerAccount;
