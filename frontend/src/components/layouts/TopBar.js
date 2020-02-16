import React, {useState, Fragment, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './../../css/default.css';
import LoginModal from './../modals/LoginModal';
import LogoutModal from './../modals/LogoutModal';
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';

const TopBar = ({user_id,setUser, isLogged, setIsLogged, handleDrop, history, setRole,unreadMSG,msjs}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    useEffect (()=>{
        if (user_id !== null){
            setIsLogged (true);
        }else{
            setIsLogged (false)
        }
    },[user_id])

    //UseEffect de mensajes no leídos
    useEffect(() => {
        unreadMSG ()
    }, [user_id]);

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
     }
    
    const handleModalOpen2 = () => {
        setModalOpen2(!modalOpen2);
     }
    
    //Método para evitar que se acceda al carrito si el usuario no está logeado
    const toCart = () => {
        if (isLogged) {
            history.push('/shop-checkout/cart');
        }else{
            history.push('/registro');
        }
    }

    return (
        <Fragment>
        <div className="top-bar">
            <div className="d-flex justify-content-md-end justify-content-end" >
                <div className="row d-flex align-items-center">
                    <div className="col-md-12" style={{paddingRight:'2.5rem'}}>
                        <div >
                                {(!isLogged) ? (
                                    <Fragment>
                                    <div className="login">
                                    <Link to={(isLogged)?"/shop-checkout/cart":"/registro"} className="signup-btn">
                                    <i className="fas fa-shopping-cart"></i>
                                    <span className="d-none d-md-inline-block">Carrito</span>
                                    </Link>
                                    <Link to="/registro" className="signup-btn">
                                    <i className="fa fa-user"></i>
                                    <span className="d-none d-md-inline-block">Registrarse</span>
                                </Link>
                                <Link onClick={handleModalOpen} className="login-btn">
                                    <i className="fa fa-sign-in"></i>
                                    <span className="d-none d-md-inline-block">Acceder</span>
                                </Link>
                                </div>
                                </Fragment>
                                ) : 
                                (<Fragment> 
                                <div className="login"> 
                                <Link to="/customer-wishlist" className="signup-btn">
                                    <i className="fas fa-heart fa-lg"></i>
                                    <span className="d-none d-md-inline-block">Mis deseos</span>
                                </Link>
                                <Link onClick={toCart} className="signup-btn">
                                    <i className="fas fa-shopping-cart fa-lg"></i>
                                    <span className="d-none d-md-inline-block">Carrito</span>
                                </Link>
                                <Link to={`/customer-chat?chatID=usuario&room=${user_id}`}  className="signup-btn" title="Chat con administrador">
                                    <i class="fas fa-envelope fa-lg">
                                        <NotificationBadge count={msjs} effect={Effect.SCALE} style={{margin:'-1rem'}}/>
                                    </i>
                                </Link>
                                <Link className="nav-item dropdown active"><Link onClick={e => {
                                e.preventDefault() 
                                }} data-toggle="dropdown" className="dropdown-toggle signup-btn" style={{color: "#fff"}}><span className="d-none d-md-inline-block">{`Mi Cuenta`}</span></Link>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown-item"><Link to="/customer-account" className="nav-link" style={{color: "#fff"}}>Mi cuenta</Link></li>
                                        <li className="dropdown-item"><Link to="/customer-orders" className="nav-link" style={{color: "#fff"}}>Mis compras</Link></li>
                                        <li className="dropdown-item"><Link to="/customer-wishlist" className="nav-link" style={{color: "#fff"}}>Mis deseos</Link></li>
                                        <li className="dropdown-item"><Link to="/customer-reservations" className="nav-link" style={{color: "#fff"}}>Mis reservas</Link></li>
                                        <li className="dropdown-item"><Link to="/customer-reviewlist" className="nav-link" style={{color: "#fff"}}>Mis reseñas</Link></li>
                                        <li className="dropdown-item"><Link to={`/customer-chat?chatID=usuario&room=${user_id}`} className="nav-link" style={{color: "#fff"}}>Chat</Link></li>
                                        <li className="dropdown-item"><Link className="nav-link" onClick={handleModalOpen2} style={{color: "#fff"}}>Salir</Link></li>
                                    </ul>
                                </Link>
                                </div>
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
           setUser = {setUser}
           setRole={setRole}
        />
        <LogoutModal
           modalOpen={modalOpen2}
           handleModalOpen={handleModalOpen2}
           handleDrop = {handleDrop}
        />
        </Fragment>
    );
}
export default withRouter(TopBar);
