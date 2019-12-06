import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const RouteError = () => {
    return (
        <ComponentNotFound className="container">
            <div className="row">
                <div className="col-md-12">
                   <div className="error-template">
                        <h1>Oops!</h1>
                        <h2>Error 404 Not Found</h2>
                        <div className="error-details">
                            Perdón, un error ocurrió. La página requerida no fue encontrada!
                        </div>
                        <div className="error-actios">
                            <Link className="btn btn-outline-primary btn-lg" to="/">
                                <i className="fas fa-home" />&nbsp; Volver a la página principal
                            </Link>
                        </div>
                    </div> 
                </div>
            </div>
        </ComponentNotFound>  
    );
}

export default RouteError;

const ComponentNotFound = styled.div`
  .error-template {
      padding: 40px 15px;
      text-align: center;
  }

  .error-actions {
      margin-top: 15px;
      margin-bottom: 15px;
  }

  .btn {
      margin-right: 10px;
  }
`;