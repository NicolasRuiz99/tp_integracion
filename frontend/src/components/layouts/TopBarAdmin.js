import React, {useState, Fragment, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import './../../css/default.css';
import LoginModal from './../modals/LoginModal';
import LogoutModal from './../modals/LogoutModal';


const TopBarAdmin = ({user_id,setUser, isLogged, setIsLogged, handleDrop, history, setRole}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);

    useEffect (()=>{
        if (user_id !== null){
            setIsLogged (true);
        }else{
            setIsLogged (false)
        }
    },[user_id])

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
     }
    
    const handleModalOpen2 = () => {
        setModalOpen2(!modalOpen2);
     }
    

    return (
        <Fragment>
        <div className="top-bar">
            <div className="d-flex justify-content-md-end justify-content-end">
                <div className="row d-flex align-items-center" >
                    <div className="col-md-12" style={{paddingRight: '2.5rem'}}>
                                <div className="login"> 
                                <Link to="/admin-page/sales" className="signup-btn">
                                    <i class="fas fa-money-check-alt"></i>
                                    <span className="d-none d-md-inline-block">Ventas</span>
                                </Link>
                                <Link to="/admin-page/addproduct" className="signup-btn">
                                    <i class="fas fa-plus-circle"></i>
                                    <span className="d-none d-md-inline-block">Cargar producto</span>
                                </Link>
                                <Link className="nav-item dropdown active"><Link onClick={e => {
                                e.preventDefault()
                                }} data-toggle="dropdown" className="dropdown-toggle signup-btn" style={{color: "#fff"}}><span className="d-none d-md-inline-block">{`Opciones`}</span></Link>
                                    <ul class="dropdown-menu">
                                        <li className="dropdown-item"><Link to="/admin-page/account" class="nav-link" style={{color: "#fff"}}>Cuenta</Link></li>
                                        <li className="dropdown-item"><Link to="/admin-page/products" class="nav-link" style={{color: "#fff"}}>Productos</Link></li>
                                        <li className="dropdown-item"><Link to="/admin-page/customers" class="nav-link" style={{color: "#fff"}}>Clientes</Link></li>
                                        <li className="dropdown-item"><Link to="/admin-page/sales" class="nav-link" style={{color: "#fff"}}>Ventas</Link></li>
                                        <li className="dropdown-item"><Link to="/admin-page/reviews" class="nav-link" style={{color: "#fff"}}>Reseñas</Link></li>
                                        <li className="dropdown-item"><Link to="/admin-page/chats" class="nav-link" style={{color: "#fff"}}>Chats</Link></li>
                                        <li className="dropdown-item"><Link class="nav-link" onClick={handleModalOpen2} style={{color: "#fff"}}>Salir</Link></li>
                                    </ul>
                                </Link>
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

export default withRouter(TopBarAdmin);