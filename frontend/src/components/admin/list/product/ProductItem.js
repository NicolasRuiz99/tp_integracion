import React, {Fragment, useEffect, useState} from 'react'
import {capitalize} from './../../utils/adminFunctions';

export default function ProductItem({item, changeList, clean}) {
    const [clase, setClase] = useState('');
    const [checked, setChecked] = useState(false);

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
            <td style={{textAlign:'center'}}><p style={{color:`${clase}`, fontWeight: 'bolder'}}>{item.genre}</p></td>
            <td style={{textAlign:'center'}}>{capitalize(item.material)}</td>
            <td style={{textAlign:'center'}}>$ {item.price}</td>
            </tr>
        </Fragment>
    )
}
