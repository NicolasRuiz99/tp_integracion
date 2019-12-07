import React from 'react';
import {Link} from 'react-router-dom';
import './../../css/default.css';

const RouteError = () => {
    return (
        <div id="content">
        <div class="container">
          <div id="error-page" class="col-md-8 mx-auto text-center">
            <div class="box">
                {/* Logo pendiente */}
              <p class="text-center"><Link to="/">Indumentaria-Online</Link></p>
              <h3>Oops! - La página solicitada no se encuentra disponible</h3>
              <h4 class="text-muted">Error 404 - Página no encontrada</h4>
              <p class="buttons"><Link to="/" class="btn btn-outlined"><i class="fa fa-home"></i> Ir al Home</Link></p>
            </div>
          </div>
        </div>
      </div> 
    );
}

export default RouteError;

