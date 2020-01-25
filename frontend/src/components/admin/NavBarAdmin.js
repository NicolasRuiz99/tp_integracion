import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './../../css/default.css';
import logo from './../../assets/logo.png';

const NavBarAdmin = ({history}) => {

 
    return (
      <header className="nav-holder make-sticky">
        <div id="navbar" role="navigation" className="navbar navbar-expand-lg navbar-light">
        <Link to="/" class="navbar-brand home"><img src={logo} alt="Indumentaria Online logo" class="d-none d-md-inline-block" /><span class="sr-only">Indumentaria Online- Ir al Home</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
            <div id="navbarSupportedContent" class="collapse navbar-collapse">
              <ul className="nav navbar-nav m-auto">
                <li className="nav-item">
                  <Link to="/admin-sells" className="nav-link ">Ventas</Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-reservations" className="nav-link ">Reservas</Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-products" className="nav-link ">Productos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin-customers" className="nav-link ">Clientes</Link>
                </li>
              </ul> 
          </div>
        </div>
      </header>        
    );
  }

export default withRouter(NavBarAdmin);