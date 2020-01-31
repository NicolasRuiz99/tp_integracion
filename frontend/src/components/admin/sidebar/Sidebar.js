import React from 'react';
import { Fragment } from 'react';
import './sidebar.css';
import './../../../css/default.css';
import {Link} from 'react-router-dom';

const Sidebar = () => (
  
    <Fragment>
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Administración </div>
      <div className="list-group list-group-flush">
        <Link to="/admin-page/products" className="list-group-item list-group-item-action bg-light">Productos</Link>
        <Link to="admin-page/" className="list-group-item list-group-item-action bg-light">Clientes</Link>
        <Link to="admin-page/" className="list-group-item list-group-item-action bg-light">Reservas</Link>
        <Link to="admin-page/" className="list-group-item list-group-item-action bg-light">Ventas</Link>
        <Link to="admin-page/" className="list-group-item list-group-item-action bg-light">Chats</Link>
        <Link to="admin-page/" className="list-group-item list-group-item-action bg-light">Salir</Link>
      </div>
    </div>
    </Fragment>
);

export default Sidebar;