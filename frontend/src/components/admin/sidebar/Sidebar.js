import React from 'react';
import { Fragment, useState } from 'react';
import './sidebar.css';
import './../../../css/default.css';
import {Link} from 'react-router-dom';
import LogoutModal from './../../modals/LogoutModal';

const Sidebar = ({handleDrop}) => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  }

  return(
    <Fragment>
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading lead text-uppercase" style={{color:'black'}}><i class="fas fa-tools"></i>Administración</div>
      <div className="list-group list-group-flush">
        <Link to="/admin-page/products" className="list-group-item list-group-item-action bg-light"><i class="fas fa-th-list"></i> Productos</Link>
        <Link to="/admin-page/customers" className="list-group-item list-group-item-action bg-light"><i class="fas fa-users"></i> Clientes</Link>
        <Link to="/admin-page/reservations" className="list-group-item list-group-item-action bg-light"><i class="fas fa-calendar-alt"></i> Reservas</Link>
        <Link to="/admin-page/sales" className="list-group-item list-group-item-action bg-light"><i class="fas fa-money-check-alt"></i> Ventas</Link>
        <Link to="/admin-page/reviews" className="list-group-item list-group-item-action bg-light"> <i class="fas fa-star"></i> Reseñas</Link>
        <Link to="/admin-page/coupons" className="list-group-item list-group-item-action bg-light"> <i class="fas fa-ticket-alt"></i> Cupones</Link>
        <Link to="/admin-page/chats" className="list-group-item list-group-item-action bg-light"><i class="fas fa-comments"></i> Chats</Link>
        <button type="button" onClick={handleModalOpen} className="list-group-item list-group-item-action bg-light"><i className="fa fa-sign-out"></i> Salir</button>
      </div>
    </div>
    <LogoutModal
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        handleDrop = {handleDrop}
     />
    </Fragment>
  )
};

export default Sidebar;