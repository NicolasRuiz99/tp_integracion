import React from 'react';
import { Link } from 'react-router-dom';
import './../../css/default.css';

const NavBar = () => {
    return (
      <header className="nav-holder make-sticky">
        <div id="navbar" role="navigation" className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand home"><span>Indumentaria - Online</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul className="nav navbar-nav m-auto">
                <li className="nav-item">
                  <Link to="/categorias" className="nav-link ">Categorias</Link>
                </li>
                <li className="nav-item">
                  <Link to="/historial" className="nav-link ">Historial</Link>
                </li>
                <li className="nav-item">
                  <Link to="/ofertas" className="nav-link ">Ofertas</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link ">Contáctanos</Link>
                </li>
              </ul>
              <form role="search" className="navbar-form">
                <div className="input-group">
                  <input type="search" placeholder="Buscar" className="form-control"/><span className="input-group-btn"/ >
                    <button type="submit" className="btn btn-main"><i className="fa fa-search"></i></button>
                </div>
              </form> 
          </div>
        </div>
      </header>
            
    );
  }

export default NavBar;