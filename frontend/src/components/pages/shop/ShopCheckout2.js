import React, { Fragment,useState,useEffect } from 'react';
import OrderSummary from './OrderSummary';
import BreadCrumbs from '../../BreadCrumbs';
import {Link,withRouter} from 'react-router-dom';
import './../../../css/default.css';
import { listProvinces } from './utils/shopFunctions';
import ProvinceItem from '../../lists/ProvinceItem'
import { validarCarrito } from '../../../validacion/validate';
import Error from '../../messages/Error';

const ShopCheckout2 = ({route,coupon,setCoupon,cartInfo,shipInfo,setShipInfo,history}) => {

    const [list,setList] = useState ([]);
    const [APIerror,setAPIError] = useState (false);
    const [name,setName] = useState ('');
    const [surname,setSurname] = useState ('');
    const [address,setAddress] = useState ('');
    const [dni,setDNI] = useState ('');
    const [zip,setZIP] = useState ('');
    const [province,setProvince] = useState ('');

    //State de validacion
    const [errorCarrito, setErrorCarrito] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault ();
        const err = validarCarrito(name, surname, address, dni, zip, province);
        console.log(err);
        if (err.name || err.surname || err.obligatorio || err.dni || err.zip ){
            setErrorCarrito(err);
            return;
        }
        setShipInfo ({
            id: cartInfo.id,
            name,
            surname,
            address,
            dni,
            zip,
            province
        })
        setErrorCarrito({});
        history.push (`${route}/3`);
    }

    useEffect (()=>{
        listProvinces ()
        .then (res=>{
            setList (res);
        })
        .catch (err => {
            setAPIError (true);
            return;
        })

        if (shipInfo.length !== 0){
            const {name,surname,address,dni,zip,phone,province} = shipInfo;
            setName (name);
            setSurname (surname);
            setAddress (address);
            setDNI (dni);
            setZIP (zip);
            setProvince (province);
        }

        setAPIError (false);
    },[cartInfo])

    return (
        <Fragment>
            <BreadCrumbs name={"Compra - Dirección"} />
            <div id="content">
                <div className="container">
                <div className="row">
                    <div id="checkout" className="col-lg-9">
                    <div className="box border-bottom-0">
                    <form onSubmit={handleSubmit}>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item"><Link to={`${route}/1`} className="nav-link"><i className="fa fa-truck"></i><br/>Método de entrega</Link></li>
                            <li className="nav-item"><Link to={`${route}/2`} className="nav-link active"> <i className="fa fa-map-marker"></i><br/>Dirección</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link disabled"><i className="fa fa-money"></i><br/>Método de pago</Link></li>
                            <li className="nav-item"><Link to="#" className="nav-link disabled"><i className="fa fa-eye"></i><br/>Revisión del pedido</Link></li>
                        </ul>
                        <div className="content">
                            {errorCarrito.name && <Error texto={errorCarrito.name}/>}
                            {errorCarrito.surname && <Error texto={errorCarrito.surname}/>}
                            {errorCarrito.dni && <Error texto={errorCarrito.dni}/>}
                            {errorCarrito.zip && <Error texto={errorCarrito.zip}/>}
                            {errorCarrito.obligatorio && <Error texto={errorCarrito.obligatorio}/>}
                            <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="firstname">Nombre</label>
                                <input id="firstname" type="text" className="form-control" defaultValue={name} onChange={e => setName(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="lastname">Apellido</label>
                                <input id="lastname" type="text" className="form-control" defaultValue={surname} onChange={e => setSurname(e.target.value)}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="direccion">Dirección</label>
                                <input id="direccion" type="text" className="form-control" defaultValue={address} onChange={e => setAddress(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="dni">DNI</label>
                                <input id="dni" type="text" className="form-control" defaultValue={dni} onChange={e => setDNI(e.target.value)}/>
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                <label for="province">Provincia</label>
                                {(APIerror)?   
                                <input id="province" className="form-control" defaultValue={province} onChange={e => setProvince(e.target.value)}/>
                                :
                                <select id="province" className="form-control" value={province} onChange={e => setProvince(e.target.value)}>
                                    <option value="">Seleccione una</option>
                                    {list.map(item => (
                                        <ProvinceItem 
                                        key = {item.id}
                                        item = {item}
                                    />
                                    ))}
                                </select>
                                }
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                <label for="zip">Código postal</label>
                                <input id="zip" type="text" className="form-control" defaultValue={zip} onChange={e => setZIP(e.target.value)}/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="box-footer d-flex flex-wrap align-items-center justify-content-between">
                            <div className="left-col"><Link to={`${route}/1`} className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i>Volver al método de entrega</Link></div>
                            <div className="right-col">
                            <button className="btn btn-main">Continuar al método de pago<i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </form>
                    </div>
                    </div>
                    <div className="col-lg-3">
                    <OrderSummary price = {cartInfo.price} setCoupon = {setCoupon} coupon = {coupon}/>
                    </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
}

export default withRouter (ShopCheckout2);
