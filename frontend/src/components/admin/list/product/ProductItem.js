import React, {Fragment, useEffect, useState} from 'react'
import {capitalize} from './../../utils/adminFunctions';

export default function ProductItem({item}) {
    const [clase, setClase] = useState('');

    useEffect(() => {
        switch (item.genre) {
            case 'M':
                setClase('#250EF4');          
                break;
            case 'F':
                setClase('#F40EA0');
                break;
            case 'U':
                setClase('#12C364');
                break;
        }
    }, []);

    return (
        <Fragment>
            <tr>
            <td style={{textAlign:'center'}}>{item.id}</td>
            <td style={{textAlign:'center'}}>{capitalize(item.name)}</td>
            <td style={{textAlign:'center'}}><span style={{color:`${clase}`}}>{item.genre}</span></td>
            <td style={{textAlign:'center'}}>{capitalize(item.material)}</td>
            <td style={{textAlign:'center'}}>$ {item.price}</td>
            </tr>
        </Fragment>
    )
}
