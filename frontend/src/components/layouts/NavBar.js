import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link to="/" class="navbar-brand text-white text-uppercase">Indumentaria Online&nbsp;<i class="fas fa-tshirt"></i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span>
            <i className="fas fa-bars" style={{color: '#fff'}}></i>
          </span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto ">
            <li className="nav-item">
              <Link to="/categorias" className="nav-link text-white text-uppercase m1-5">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link to="/historial" className="nav-link text-white text-uppercase m1-5">Historial</Link>
            </li>
            <li className="nav-item">
              <Link to="/ofertas" className="nav-link text-white text-uppercase m1-5">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white text-uppercase m1-5">Contáctanos</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
          </form>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <Link to="/registro" className="nav-link text-white text-uppercase">Crear Cuenta</Link>
            </li>
            <li className="nav-item">
              <Link to="/ingresar" className="nav-link text-white text-uppercase">Ingresar</Link>
            </li>
          </ul>
        </div>
      </nav>
       
         
    );
  }

export default NavBar;