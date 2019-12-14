import React from 'react';
import './../../../css/default.css';
import {Link} from 'react-router-dom';


const CustomerSection = () => {
    
    return (
        <div className="col-lg-3 mt-4 mt-lg-0">
              {/* Menu del cliente */}
              <div className="panel panel-default sidebar-menu">
                <div className="panel-heading">
                  <hr />
                  <h3 className="h4 panel-title">Sección del cliente</h3>
                </div>
                <div className="panel-body">
                  <ul className="nav nav-pills flex-column text-sm">
                    <li className="nav-item"><Link to="/customer-orders"  ClassName="nav-link"    ><i className="fa fa-list"></i> Mis compras</Link></li>
                    <li className="nav-item"><Link to="/customer-wishlist" ClassName="nav-link" ><i className="fa fa-heart"></i> Mis deseos</Link></li>
                    <li className="nav-item"><Link to="/customer-account" ClassName="nav-link"><i className="fa fa-user"></i> Mi cuenta</Link></li>
                    <li className="nav-item"><Link to="/customer-chat" ClassName="nav-link"><i class="fas fa-comments"></i> Chat</Link></li>
                    <li className="nav-item"><Link to="/" ClassName="nav-link" ><i className="fa fa-sign-out"></i> Salir</Link></li>
                  </ul>
                </div>
              </div>
            </div>
    );
}

export default CustomerSection;
