import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './../../../../css/reservation.css';
import {capitalize} from './../../utils/adminFunctions';

export default function ColorSizeItem({item, handleModalOpen}) {
  
    return (
        <Fragment>
            <tr>
            <td style={{textAlign:'center'}}>{item.id}</td>
            <td style={{textAlign:'center'}}><div className="reserve"><label title={capitalize(item.color)}><span className={`color ${item.color}`} ></span></label></div></td>
            <td style={{textAlign:'center'}}>{item.size}</td>
            <td style={{textAlign:'center'}}>{item.stock}</td>
            <td style={{textAlign:'center'}}>
                <div className="btn btn-primary btn-sm" onClick={() => handleModalOpen(item)}  style={{marginBottom:'0rem'}}>Editar</div>
            </td>
            </tr>
        </Fragment>
    )
}