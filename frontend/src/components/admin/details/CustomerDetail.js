import React, {useEffect, useState} from 'react'
import './../../../css/default.css';
import {userGetInfo } from '../../pages/customer/utils/CustomerFunctions';
import Spinner from 'react-bootstrap/Spinner';
import { withRouter } from 'react-router-dom';
import Error from '../../messages/Error';
import Info from '../../messages/Info';

function CustomerDetail({props}) {
    const [customer, setCustomer] = useState(null);
    const [user, setUser] = useState({});
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState (false);
    const [id] = useState(props.match.params.id);


    useEffect(() => {    
        setLoading(true);
        userGetInfo(id)
        .then(res => {
            console.log(res);
            setUser(res.user);
            if (res.customer) {
                setCustomer(res.customer)
            }
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false)
    }, []);

    return (
        <div className="row addresses" >
            {(loading) ? (
                <div className="col-md-12 text-center" style={{top:'50%',left:'5%', position: 'absolute'}}> 
                    <Spinner animation="border" variant="dark" size="lg" role="status" />
                </div> 
            ): ( (error) ? (<Error texto="Ha ocurrido un error interno en el servidor" />) : (
                (!user.e_mail && !user.psw && !customer ) ? (
                    <div style={{left:'25%',position:'absolute',bottom:'50%', width:'50%'}}>
                        <Info texto="El usuario aún no ha cargado los datos" />     
                    </div>
                ) :
                (
                (!customer) ? (
                    <div className="card shadow" style={{left:'25%',position:'absolute',bottom:'50%', width:'55%'}}>
                    <div className="card-header">
                        <h3 className=" card-title text-uppercase text-center">
                            {(user.e_mail) ? user.e_mail : <span className='badge badge-dark' style={{color:"white"}}>Dato no disponible</span>}
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 text-center">
                            <div className="card-subtitle">
                                <p className="text-muted">Contraseña: {user.psw ? user.psw : <span className='badge badge-dark' style={{color:"white"}}>Dato no disponible</span>} </p>
                            </div>
                        </div>
                    </div>
                </div>) : 
                (<div className="card shadow" style={{left:'25%',position:'absolute',bottom:'50%', width:'55%'}}>
                    <div className="card-header">
                        <h3 className="text-uppercase text-center">
                            {((!customer.name && !customer.surname) && (!customer.name || !customer.surname) ) ? 
                            (user.e_mail) : (`${customer.name}  ${customer.surname}` )}
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 text-center">
                            <div className="card-title">
                               <span className='badge badge-info'>Info del cliente </span> 
                            </div>
                            <div className="card-subtitle text-center align-items-center">
                                <p className="text-muted">
                                    DNI: {(!customer.dni) ? 
                                    (<span className='badge badge-dark' style={{color:"white"}}>Dato no disponible</span>) : (customer.dni)} <br />
                                    Género: {(!customer.genre) ? 
                                    (<span className='badge badge-dark' style={{color:"white"}}>Dato no disponible</span>) : (customer.genre)} <br />
                                    Email: {(!user.e_mail) ? 
                                    (<span className='badge badge-dark' style={{color:"white"}}>Dato no disponible</span>) : (user.e_mail)} <br />
                                    Tel: {(!customer.phone_no) ? 
                                    (<span className='badge badge-dark' style={{color:"white"}}>Dato no disponible</span>) : (customer.phone_no)} <br />
                                    Talle de ropa: {(!customer.c_size) ? 
                                    (<span className='badge badge-dark' style={{color:"white"}}>Dato no disponible</span>) : (customer.c_size)} <br />
                                    Talle de calzado: {(!customer.shoe_size) ? 
                                    (<span className='badge badge-dark' style={{color:"white"}}>Dato no disponible</span>) : (customer.shoe_size)} <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>))
            ))}
        </div>
    )
}

export default withRouter(CustomerDetail);