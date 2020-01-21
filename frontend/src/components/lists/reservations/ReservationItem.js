import React, { Fragment,useEffect,useState } from "react";
import product1 from "./../../../assets/product1.jpg";
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import './reservation.css';
import moment from 'moment';

const ReservationItem = ({item, handleModalOpen}) => {

    const [link,setLink] = useState ('');
    const [estado,setEstado] = useState ('');
    const [clase,setClase] = useState ('');
    const date = moment(item.date).utc().format('DD/MM/YYYY');

    useEffect (()=> {
        setLink (`/shop-detail/${item.prod_id}`);
        switch (item.state) {
            case 'reserved':
                setEstado ('reservada');
                setClase ('badge badge-info');
                break;
            case 'cancelled': 
                setEstado ('cancelada');
                setClase ('badge badge-danger');
                break;
        }
    } ,[]);

    const capitalize = (cadena) => {
        return (cadena.charAt(0).toUpperCase() + cadena.slice(1));
    }

    return (
        <Fragment>
            <tr>
                <td><Link to={link}><img src={product1} title={capitalize(item.name)} className="img-fluid" /></Link></td>
                <td>{date}</td>
                <td>{item.stock}</td>
                <td>{item.size}</td>
                <td><div className="reserve"><label title={capitalize(item.color)}><span className={`color ${item.color}`} ></span></label></div></td>
                <td>$ {item.price}</td>
                <td><span className={clase}>{estado}</span></td>
                <td>
                    <Link to={link} className="btn btn-outlined btn-sm">Ver</Link>
                    {(estado === 'reservada') ? 
                    (<Link 
                    className="cancelar" 
                    style={{float: 'right', marginRight:'25px', display:'inline-block'}} 
                    title="Cancelar"
                    onClick={() => handleModalOpen(item)}
                    >
                    <i class="fas fa-times-circle"></i>
                    </Link>)
                    : null}
                    </td>
            </tr>
        </Fragment>    
    );
};

export default ReservationItem;