import React, {useState, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './../../css/default.css';
import LoginModal from './../LoginModal';


const TopBar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
     }

    return (
        <Fragment>
        <div className="top-bar">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 d-md-block d-none">
                        <p>Contactános en +54 3442 425688 o soporte-indumentariaonline@hotmail.com.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex justify-content-md-end justify-content-end">
                            <ul className="list-inline contact-info d-block d-md-none">
                            <li className="list-inline-item"><i className="fab fa-phone"></i></li>
                            <li className="list-inline-item"><i className="fab fa-envelope"></i></li>
                            </ul>
                            <div className="login">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <LoginModal
           modalOpen={modalOpen}
           handleModalOpen={handleModalOpen}
        />
        </Fragment>
    );
}

export default TopBar;
