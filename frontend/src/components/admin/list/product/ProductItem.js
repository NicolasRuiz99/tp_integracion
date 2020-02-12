import React, {Fragment, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {capitalize} from './../../utils/adminFunctions';

export default function ProductItem({item, changeList, clean}) {
    const [checked, setChecked] = useState(false);
    const [link,setLink] = useState ('');

    useEffect(() => {
        setLink (`/admin-page/product-detail/${item.id}`);
    }, []);

    //UseEffect de limpieza de los checkboxes
    useEffect (()=> {
        if(clean) {
            setChecked(false);
        }
    } ,[clean]);

    const handleChange = () => {
        const id = item.id;
        setChecked(!checked);
        changeList(id, checked);
    }

    return (
        <Fragment>
            <tr>
            <td style={{textAlign:'center', width:'6%', borderLeft:'0px', borderTop:'0px'}}>
                    <div className="checkbox" >
                        <input  
                        style={{width:'18px'}}
                        type="checkbox"
                        checked={checked}
                        onChange= {() => handleChange()}
                        />    
                    </div>
            </td> 
            <td style={{textAlign:'center'}}>{item.id}</td>
            <td style={{textAlign:'center'}}>{capitalize(item.name)}</td>
            <td style={{textAlign:'center'}}>{capitalize(item.material)}</td>
            <td style={{textAlign:'center'}}>$ {item.price}</td>
            <td style={{textAlign:'center'}}> <Link to={link} className="btn btn-outlined btn-sm">Ver</Link> </td>
            </tr>
        </Fragment>
    )
}
