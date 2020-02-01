import React, {Fragment} from 'react'
import {capitalize} from './../../utils/adminFunctions';

export default function ProductItem({item}) {
    return (
        <Fragment>
            <tr>
            <td style={{textAlign:'center'}}>{item.id}</td>
            <td style={{textAlign:'center'}}>{capitalize(item.name)}</td>
            <td style={{textAlign:'center'}}>{item.genre}</td>
            <td style={{textAlign:'center'}}>{capitalize(item.material)}</td>
            <td style={{textAlign:'center'}}>$ {item.price}</td>
            </tr>
        </Fragment>
    )
}
