import React, { Fragment,useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import './../../../../css/default.css';
import './../../../../css/review.css';
import {capitalize} from './../../utils/adminFunctions';
import moment from 'moment';
import Rating from "../../../pages/shop/Rating";

const ReviewItem = ({item, changeList, clean}) => {

    const [link,setLink] = useState ('');
    const date = moment(item.date).utc().format('DD/MM/YYYY');
    const [stars] = useState (item.stars);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setLink (`/admin-page/review-detail/${item.id}`);
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
                <td style={{textAlign:'center'}}>{date}</td>
                <td style={{textAlign:'center'}}>{capitalize(item.name)}</td>
                <td style={{textAlign:'center', maxWidth: '25px'}}>
                    <div className="reserve">
                        <label>
                            <span><Rating change={false} stars={stars}  /></span>
                        </label>
                    </div>
                </td>
                <td style={{textAlign:'center'}}>
                    <Link to={link} className="btn btn-outlined btn-sm" >Ver</Link>
                </td>
            </tr>
        </Fragment>    
    );
};

export default ReviewItem;