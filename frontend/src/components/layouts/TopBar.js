import React, {useState, Fragment, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './../../css/default.css';
import LoginModal from './../LoginModal';


const TopBar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(true);

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
     }
    
     const handleDrop = () => {
         setIsLogged(!isLogged);
     }


    return (
        <Fragment>
        <div className="top-bar">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 d-md-block d-none mr-0">
                        <p>Contactános en <i className="fas fa-phone"></i>   +54 3442 425688 </p>
                        <p> o <i className="fas fa-envelope"></i> soporte-indumentariaonline@hotmail.com </p>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-md-end justify-content-end">
                            
                                {(isLogged) ? (
                                    <Fragment>
                                    <div className="login">
                                    <Link to="/shop-cart" className="signup-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span className="d-none d-md-inline-block">Carrito</span>
                                    </Link>
                                    <Link to="/registro" className="signup-btn">
                                    <i className="fa fa-user"></i>
                                    <span className="d-none d-md-inline-block">Registrarse</span>
                                </Link>
                                <Link onClick={handleModalOpen} className="login-btn">
                                    <i className="fa fa-sign-in"></i>
                                    <span class="d-none d-md-inline-block">Acceder</span>
                                </Link>
                                
                                </div>
                                
                                <ul className="social-custom list-inline">
                                {/* {Implementar lógica de redes sociales} */}
                                <li className="list-inline-item"><Link to="#"><i className="fab fa-facebook"></i></Link></li>
                                <li className="list-inline-item"><Link to="#"><i className="fab fa-google-plus"></i></Link></li>
                                </ul>
                                </Fragment>
                                ) : 
                                (<Fragment> 
                                <div className="login"> 
                                
                                <Link to="/customer-wishlist" className="signup-btn">
                                    <i class="fas fa-heart"></i>
                                    <span className="d-none d-md-inline-block">Mis deseos</span>
                                </Link>
                                <Link to="/shop-cart" className="signup-btn">
                                    <i class="fas fa-shopping-cart"></i>
                                    <span className="d-none d-md-inline-block">Carrito</span>
                                </Link>
                                </div>
                                
                                <ul className="social-custom list-inline">
                                <li className="nav-item dropdown active"><a href="javascript: void(0)" data-toggle="dropdown" className="dropdown-toggle"><span className="d-none d-md-inline-block">UsernameXXX</span></a>
                                    <ul class="dropdown-menu">
                                        <li className="dropdown-item"><Link to="/customer-account" class="nav-link">Mi cuenta</Link></li>
                                        <li className="dropdown-item"><Link to="/customer-orders" class="nav-link">Mis compras</Link></li>
                                        <li className="dropdown-item"><Link to="/customer-wishlist" class="nav-link">Mis deseos</Link></li>
                                        <li className="dropdown-item"><Link to="/" class="nav-link" onClick={handleDrop}>Salir</Link></li>
                                    </ul>
                                </li>
                                </ul>
                                </Fragment>
                                
                                 )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <LoginModal
           modalOpen={modalOpen}
           handleModalOpen={handleModalOpen}
           setIsLogged={setIsLogged}
        />

        </Fragment>
    );
}

export default TopBar;
