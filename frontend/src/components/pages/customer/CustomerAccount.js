import React, { Fragment,useEffect,useState } from 'react';
import CustomerSection from './CustomerSection';
import './../../../css/default.css';
import BreadCrumbs from '../../BreadCrumbs';
import {getCustomerInfo,addCustomerInfo,modCustomerInfo} from './utils/CustomerFunctions'

const CustomerAccount = ({user_id}) => {

    const [customer_id,setCustomer_id] = useState (null);
    const [email,setEmail] = useState ('');
    const [psw,setPsw] = useState ('');
    const [dni,setDni] = useState ('');
    const [name,setName] = useState ('');
    const [surname,setSurnname] = useState ('');
    const [genre,setGenre] = useState ('');
    const [c_size,setC_size] = useState ('');
    const [shoe_size,setShoe_size] = useState ('');
    const [phone_no,setPhone_no] = useState ('');
    const [serverError,setServerError] = useState (false);
    const [success,setSuccess] = useState (false);

    useEffect (()=>{
          getCustomerInfo (user_id)
          .then (res => {        
            if (res.length > 0){
              res = res[0];
              setEmail (res.e_mail);
              setPsw (res.psw);
              setDni (res.dni);
              setName (res.name);
              setSurnname (res.surname);
              setGenre (res.genre);
              setC_size (res.c_size);
              setShoe_size (res.shoe_size);
              setPhone_no (res.phone_no);
              setCustomer_id (res.id);
            }
          })
          .catch (err => {
              setServerError (true);
              console.log(err);
              
              return;
          });
          setServerError (false);
    },[user_id]);

    const handleSubmitCustomer = async(e) => {
      e.preventDefault();    
  
      if (customer_id != null){
          const customer = {
            id: customer_id,
            dni,
            name,
            surname,
            genre,
            c_size,
            shoe_size,
            phone_no
          }          
          modCustomerInfo (customer)
          .then (res => {
              setSuccess (true);
          })
          .catch (err => {
            setServerError (true);
            setSuccess (false);
          });
      }else{
        const customer = {
          dni,
          name,
          surname,
          genre,
          c_size,
          shoe_size,
          phone_no,
          id_user: user_id
        }
        addCustomerInfo (customer)
        .then (res => {
          setSuccess (true);
        })
        .catch (err => {
          setServerError (true);
          setSuccess (false);
        });
      }

      setServerError (false);
    }

    return (
      <Fragment >
      <BreadCrumbs 
        name={"Mi cuenta"}
      />
        <div id="content">
        { (serverError) ? <div className="alert alert-danger mt-2 mb-5 text-center">Error interno del servidor</div> : null}
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
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email_account">Email</label>
                        <input id="email_account" type="text" className="form-control" defaultValue = {email} onChange = {e => setEmail(e.target.value)}/>
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
                { (success) ? <div className="alert alert-success mt-2 mb-5 text-center">Cambios realizados con éxito</div> : null}
                <form onSubmit = {handleSubmitCustomer}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="nombre">Nombre</label>
                        <input id="nombre" type="text" className="form-control" defaultValue = {name} onChange = {e => setName(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="apellido">Apellido</label>
                        <input id="apellido" type="text" className="form-control" defaultValue = {surname} onChange = {e => setSurnname(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="provincia">DNI</label>
                        <input id="provincia" type="text" className="form-control" defaultValue = {dni} onChange = {e => setDni(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <label for="phone">Teléfono</label>
                        <input id="phone" type="text" className="form-control" defaultValue = {phone_no} onChange = {e => setPhone_no(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                    <div className="form-group">
                        <label for="genero">Género</label>
                        <select id="genero" className="form-control" value = {genre} onChange = {e => setGenre(e.target.value)}>
                            <option value="">- Escoge un género -</option>
                            <option value="M">Masculino</option>
                            <option value="F">Femenino</option>
                            <option value="U">No especificado</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="form-group">
                        <label for="talle1">Talle-calzado</label>
                        <select id="talle1" className="form-control" value = {shoe_size} onChange = {e => setShoe_size(e.target.value)}>
                            <option value="">- Elige tu talle -</option>
                            <option value="35">35</option>
                            <option value="36">36</option>
                            <option value="37">37</option>
                            <option value="38">38</option>
                            <option value="39">39</option>
                            <option value="40">40</option>
                            <option value="41">41</option>
                            <option value="42">42</option>
                            <option value="43">43</option>
                            <option value="44">44</option>
                            <option value="45">45</option>
                            <option value="46">46</option>
                            <option value="47">47</option>
                            <option value="48">48</option>
                            <option value="49">49</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="form-group">
                        <label for="talle2">Talle-ropa</label>
                        <select id="talle2" className="form-control" value = {c_size} onChange = {e => setC_size(e.target.value)}>
                            <option value="">- Elige tu talle -</option>
                            <option value="XXS">XXS</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
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
