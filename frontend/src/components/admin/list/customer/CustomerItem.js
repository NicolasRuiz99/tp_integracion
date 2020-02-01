import React, {Fragment} from 'react';
import {capitalize} from './../../utils/adminFunctions';

export default function CustomerItem({item}) {
    return (
        <Fragment>
            <tr>
            <td style={{textAlign:'center'}}>{item.id_user}</td>
            <td style={{textAlign:'center'}}>{item.e_mail}</td>
            <td style={{textAlign:'center'}}>{item.dni}</td>
            <td style={{textAlign:'center'}}>{capitalize(item.name)}</td>
            <td style={{textAlign:'center'}}>{capitalize(item.surname)}</td>
            <td style={{textAlign:'center'}}><span>{item.genre}</span></td>
            <td style={{textAlign:'center'}}>{item.phone_no}</td>
            </tr>
        </Fragment>
    )
}
