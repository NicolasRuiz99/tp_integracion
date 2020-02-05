import React, { Fragment,useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import './../../../../css/default.css';
import './../../../../css/review.css';
import moment from 'moment';

const CouponItem = ({item}) => {

    const [link,setLink] = useState ('');
    const date = moment(item.cad_date).utc().format('DD/MM/YYYY');

    useEffect(() => {
        setLink (`/admin-page/coupon-detail/${item.id}`);
    }, []);

    return (
        <Fragment>     
            <tr>
                <td style={{textAlign:'center'}}>{item.id}</td>
                <td style={{textAlign:'center'}}>{date}</td>
                <td style={{textAlign:'center'}}>{item.pc}%</td>
                <td style={{textAlign:'center'}}>
                    {(item.used) ? 
                    (<span className='badge badge-danger'>No</span>) : 
                    (<span className='badge badge-success'>Sí</span>)
                    }
                </td>
                <td style={{textAlign:'center'}}>
                    {(item.used) ? 
                    (<Link to={link} className="btn btn-outlined btn-sm" >Ver</Link>) :
                    (<Link to={link} className="btn btn-outlined btn-sm" >Editar</Link>)}
                </td>
            </tr>
        </Fragment>    
    );
};

export default CouponItem;