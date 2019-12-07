import React from 'react';
import {Link} from 'react-router-dom';
import './../../css/default.css';

//Importación de imágenes
import img1 from "./../../assets/detailsquare.jpg";
import img2 from "./../../assets/detailsquare2.jpg";
import img3 from "./../../assets/detailsquare3.jpg";

const Footer = () => {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="row">
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
            <div className="col-lg-3">
              <ul className="list-inline photo-stream">
                <li className="list-inline-item"><Link to="/product:id"><img src={img1} alt="..." className="img-fluid"/></Link></li>
                <li className="list-inline-item"><Link to="/product:id"><img src={img2} alt="..." className="img-fluid"/></Link></li>
                <li className="list-inline-item"><Link to="/product:id"><img src={img3} alt="..." className="img-fluid"/></Link></li>
                <li className="list-inline-item"><Link to="/product:id"><img src={img3} alt="..." className="img-fluid"/></Link></li>
                <li className="list-inline-item"><Link to="/product:id"><img src={img3} alt="..." className="img-fluid"/></Link></li>
                <li className="list-inline-item"><Link to="/product:id"><img src={img1} alt="..." className="img-fluid"/></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyrights">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 text-center-md">
                <p>&copy; {new Date().getFullYear()}. Indumentaria Online / Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
