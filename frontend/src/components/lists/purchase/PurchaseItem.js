import React, { Fragment,useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import './purchase.css';
import moment from 'moment';

const PurchaseItem = ({item, handleModalOpen}) => {

    const [link,setLink] = useState ('');
    const [estado,setEstado] = useState ('');
    const [clase,setClase] = useState ('');
    const date = moment(item.date).utc().format('DD/MM/YYYY');
    

    useEffect (()=> {
        setLink (`/customer-order/${item.id}`);
        switch (item.state) {
            case 'success':
                setEstado ('exitosa')
                setClase ('badge badge-success')
                break;
            case 'pending': 
                setEstado ('en proceso')
                setClase ('badge badge-info')
                break;
            case 'pending-pay': 
                setEstado ('pendiente de pago')
                setClase ('badge badge-warning')
                break;
            case 'cancelled': 
                setEstado ('cancelada')
                setClase ('badge badge-danger')
                break;
        }
    } ,[item.state]);

    return (
        <Fragment>
            <tr>
                <th>#{item.id}</th>
                <td>{date}</td>
                <td>$ {item.price}</td>
                <td><span className={clase} style={{color:"white"}}>{estado}</span></td>
                <td>
                <Link to={link} className="btn btn-outlined btn-sm">Ver</Link>
                    { (estado === 'pendiente de pago') ? 
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

export default PurchaseItem;