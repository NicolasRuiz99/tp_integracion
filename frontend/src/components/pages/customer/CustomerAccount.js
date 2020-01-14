import React, { Fragment,useEffect,useState } from 'react';
import CustomerSection from './CustomerSection';
import './../../../css/default.css';
import BreadCrumbs from '../../BreadCrumbs';
import {getCustomerInfo,addCustomerInfo,modCustomerInfo,modUserInfo} from './utils/CustomerFunctions'

const CustomerAccount = ({user_id, handleDrop}) => {

    //confirmacion email y contraseña
    const [psw,setPsw] = useState ('');
    const [psw2,setPsw2] = useState ('');
    const [errorMail,setErrorMail] = useState (false);
    const [errorMail2,setErrorMail2] = useState (false);
    const [successMail,setSuccessMail] = useState (false);
    const [email,setEmail] = useState ('');
    const [email2,setEmail2] = useState ('');
    const [errorPSW,setErrorPSW] = useState (false);
    const [errorPSW2,setErrorPSW2] = useState (false);
    const [successPSW,setSuccessPSW] = useState (false);

    //datos customer
    const [customer_id,setCustomer_id] = useState (null);    
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

    const handleSubmitEmail = async(e) => {
      e.preventDefault();    
  
      if (email === '' || email2 === ''){
          setErrorMail (true);
          setSuccessMail (false);
          return;
      }else{
        if (email !== email2){
          setErrorMail2 (true);
          setSuccessMail (false);
          return;
        }
      }   

      const userInfo = {
        id: user_id,
        e_mail: email,
        psw
      }
      modUserInfo (userInfo)
      .then (res => {
          setSuccessMail (true);
      })
      .catch (err => {
          setSuccessMail (false);
      })

      setErrorMail (false);
      setErrorMail2 (false);

    }

    const handleSubmitPSW = async(e) => {
      e.preventDefault();    
  
      if (psw === '' || psw2 === ''){
          setErrorPSW (true);
          setSuccessPSW (false);
          return;
      }else{
        if (psw !== psw2){
          setErrorPSW2 (true);
          setSuccessPSW (false);
          return;
        }
      }   

      const userInfo = {
        id: user_id,
        e_mail: email,
        psw
      }
      modUserInfo (userInfo)
      .then (res => {
          setSuccessPSW (true);
      })
      .catch (err => {
          setSuccessPSW (false);
      })

      setErrorPSW (false);
      setErrorPSW2 (false);

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
              <p className="lead">Cambiá tus datos personales,contraseña o e-mail acá.</p>
              <div className="box mt-5">
                <div className="heading">
                  <h4 className="text-uppercase">Cambiar e-mail</h4>
                </div>
                { (errorMail) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                { (errorMail2) ? <div className="alert alert-danger mt-2 mb-5 text-center">Ambos Email deben coincidir</div> : null}
                { (successMail) ? <div className="alert alert-success mt-2 mb-5 text-center">Cambios realizados con éxito</div> : null}
                <form onSubmit = {handleSubmitEmail}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email1">Nuevo Email</label>
                        <input id="email1" type="text" className="form-control" defaultValue = {email} onChange = {e => setEmail(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email2">Confirmar Email</label>
                        <input id="email2" type="text" className="form-control" onChange = {e => setEmail2(e.target.value)}/>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outlined"><i className="fa fa-save"></i> Guardar nuevo Email</button>
                  </div>
                </form>
                <div className="heading">
                  <h4 className="text-uppercase">Cambiar contraseña</h4>
                </div>
                { (errorPSW) ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null}
                { (errorPSW2) ? <div className="alert alert-danger mt-2 mb-5 text-center">Ambas contraseñas deben coincidir</div> : null}
                { (successPSW) ? <div className="alert alert-success mt-2 mb-5 text-center">Cambios realizados con éxito</div> : null}
                <form onSubmit = {handleSubmitPSW}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="password_1">Nueva contraseña</label>
                        <input id="password_1" type="password" className="form-control" onChange = {e => setPsw(e.target.value)}/>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="password_2">Confirmar contraseña</label>
                        <input id="password_2" type="password" className="form-control" onChange = {e => setPsw2(e.target.value)}/>
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
              <div className="bo3">
                <div className="heading">
                  <h3 className="text-uppercase">Eliminar cuenta</h3>
                </div>
                <form>
                    <div className="text-center">
                      <button type="submit" className="btn btn-danger"><i class="fas fa-minus-circle"></i> Eliminar cuenta :(</button>
                    </div>
                  </form>
              </div>
            </div>
            <CustomerSection user_name={"usuario"} handleDrop={handleDrop} />
          </div>
        </div>
      </div>
      </Fragment>
    );
}

export default CustomerAccount;