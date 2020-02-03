import React from 'react';
import {Link} from 'react-router-dom';
import './../../css/default.css';


const Footer = ({isLogged, role}) => {
    return (
      <footer className="main-footer">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-3">
              <h4 className="h6">Sobre nosotros</h4>
              <p>Somos una empresa que se dedica a la venta de todo tipo de indumentaria con los mejores precios en el mercado.</p>
              <hr className="d-block d-lg-none" />
            </div>
            <div className="col-lg-3">
              <h4 className="h6">Contacto</h4>
              <p className="text-uppercase"><strong>Indumentaria Online</strong><br/>En frente de la Plaza Ramirez <br/>San Martín  <br/>455 <br/>Argentina <br/><strong>Concepción del Uruguay, Entre Ríos</strong>
              </p><Link to="/contact" className="btn btn-main">Ir a la página de contacto</Link>
              <hr className="d-block d-lg-none" />
            </div>
            {(isLogged) ? (
              (role) ? null :
              (<div className="col-lg-3">
              <h4 className="h6">Mi Cuenta</h4>
                <ul className="list-inline">
                  <li className="list-inline-item"><Link to="/customer-orders"><p>Mis compras</p></Link></li>
                  <br/>
                  <li className="list-inline-item"><Link to="/customer-wishlist"><p>Mis deseos</p></Link></li>
                  <br/>
                  <li className="list-inline-item"><Link to="/customer-reservations"><p>Mis reservas</p></Link></li>
                  <br/>
                  <li className="list-inline-item"><Link to="/customer-reviewlist"><p>Mis reseñas</p></Link></li>
                  <br/>
                  <li className="list-inline-item"><Link to="/customer-account"><p>Mi perfil</p></Link></li>
                </ul>
              </div>)
            ) : null}
          </div>
        </div>
        <div className="copyrights">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 text-center-md">
                <p>&copy; {new Date().getFullYear()}. Indumentaria Online / Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
