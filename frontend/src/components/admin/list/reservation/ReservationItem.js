import React, { Fragment,useEffect,useState } from "react";
//import product1 from "./../../../assets/product1.jpg";
import {Link} from 'react-router-dom';
import './../../../../css/default.css';
import './../../../../css/reservation.css';
import {capitalize} from './../../utils/adminFunctions';
import moment from 'moment';

const ReservationItem = ({item, handleModalOpen}) => {

    //const [link,setLink] = useState ('');
    const [estado,setEstado] = useState ('');
    const [clase,setClase] = useState ('');
    const date = moment(item.date).utc().format('DD/MM/YYYY');

    useEffect (()=> {
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

    return (
        <Fragment>
            <tr>
                <td style={{textAlign:'center'}}>{item.id}</td>
                <td style={{textAlign:'center'}}>{date}</td>
                <td style={{textAlign:'center'}}>{capitalize(item.name)}</td>
                <td style={{textAlign:'center'}}><div className="reserve"><label title={capitalize(item.color)}><span className={`color ${item.color}`} ></span></label></div></td>
                <td style={{textAlign:'center'}}>{item.size}</td>
                <td style={{textAlign:'center'}}>{item.stock} uds.</td>
                <td style={{textAlign:'center'}}>$ {item.price}</td>
                <td style={{textAlign:'center'}}><span className={clase}>{estado}</span></td>
                <td style={{textAlign:'center'}}>
                    <div onClick={() => handleModalOpen(item)} className="btn btn-outlined btn-sm" style={{width: '40%'}} >Ver</div>
                </td>
            </tr>
        </Fragment>    
    );
};

export default ReservationItem;