import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" class="navbar-brand">Indumentaria Online</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/categorias" className="nav-link">Categorias</Link>
            </li>
            <li className="nav-item">
              <Link to="/historial" className="nav-link">Historial</Link>
            </li>
            <li className="nav-item">
              <Link to="/ofertas" className="nav-link">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
          </form>
          <ul className="navbar-nav justify-content-end">
            <li className="nav-item">
              <Link to="/registro" className="nav-link">Crear Cuenta</Link>
            </li>
            <li className="nav-item">
              <Link to="/ingresar" className="nav-link">Ingresar</Link>
            </li>
          </ul>
        </div>
      </nav>
       
         
    );
  }

export default NavBar;