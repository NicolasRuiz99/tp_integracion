import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './../../css/default.css';
import logo from './../../assets/logo.png';

const NavBar = ({setSearch, history}) => {

    const sendSearch = (event) => {
      event.preventDefault();
      history.push('/shop-category');
   
    }



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
                  <Link to="/shop-category" className="nav-link ">Tienda</Link>
                </li>
                <li className="nav-item">
                  <Link to="/populars" className="nav-link ">Top ventas</Link>
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
                  <input 
                  type="search" placeholder="Buscar" 
                  className="form-control" style={{'border-color':'#F4F6F6'}}
                  onChange={({ target: { value } }) => setSearch(value)}
                  onKeyPress={event => event.key === 'Enter' ? sendSearch(event) : null}
                  /><span className="input-group-btn"></span>
                    <button type="submit" className="btn btn-main" onClick={e => sendSearch(e)}><i className="fa fa-search"></i></button>
                </div>
              </form> 
          </div>
        </div>
      </header>
            
    );
  }

export default withRouter(NavBar);