import React, {Fragment, useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function ColorSizeItem({item, handleModalOpen}) {
  
    return (
        <Fragment>
            <tr>
            <td style={{textAlign:'center'}}>{item.id}</td>
            <td style={{textAlign:'center'}}>{item.color}</td>
            <td style={{textAlign:'center'}}>{item.size}</td>
            <td style={{textAlign:'center'}}>{item.stock}</td>
            <td style={{textAlign:'center'}}>
                <Link className="btn btn-outlined btn-sm" onClick={() => handleModalOpen(item)}  style={{marginBottom:'2rem'}}>Editar</Link>
            </td>
            </tr>
        </Fragment>
    )
}