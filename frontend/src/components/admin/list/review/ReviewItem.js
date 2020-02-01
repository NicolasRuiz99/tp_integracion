import React, { Fragment,useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import './../../../../css/default.css';
import './../../../../css/review.css';
import {capitalize} from './../../utils/adminFunctions';
import moment from 'moment';
import Rating from "../../../pages/shop/Rating";

const ReviewItem = ({item}) => {

    //const [link,setLink] = useState ('');
    const date = moment(item.date).utc().format('DD/MM/YYYY');
    const [stars] = useState (item.stars);

    useEffect (()=> {
        //setLink (`/review-detail/${item.id}`);
    } ,[]);

 

    return (
        <Fragment>
            <tr>
                <td style={{textAlign:'center'}}>{item.id}</td>
                <td style={{textAlign:'center'}}>{date}</td>
                <td style={{textAlign:'center'}}>{capitalize(item.name)}</td>
                <td style={{textAlign:'center', maxWidth: '25px'}}><div className="reserve"><label><span><Rating change={false} stars={stars}  /></span></label></div></td>
                <td style={{textAlign:'center'}}>
                    <Link to="" className="btn btn-outlined btn-sm" >Ver</Link>
                </td>
            </tr>
        </Fragment>    
    );
};

export default ReviewItem;