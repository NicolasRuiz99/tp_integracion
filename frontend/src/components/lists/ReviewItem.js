import React, { Fragment } from "react";
import './../../css/default.css';
import Rating from "../pages/shop/Rating";
import moment from 'moment';

const ReviewItem = ({item}) => {
    //Conversion de fecha GMT
    const fecha = moment(item.date).utc().format('DD/MM/YYYY');
    //console.log(fecha);
    return (
        <Fragment>
            <span className="m_text">{item.title}</span>
            <p className="m_text">{item.commentary}  <Rating stars={item.stars} change={false}/></p>
            <p className="m_text">Fecha: {fecha} </p>
        </Fragment>    
    );
};

export default ReviewItem;