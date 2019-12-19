import React, { Fragment } from "react";
import './../../css/default.css';
import Rating from "../pages/shop/Rating";

const ReviewItem = ({item}) => {

    return (
        <Fragment>
            <span className="m_text">{item.title}</span>
            <p className="m_text">{item.commentary}  <Rating stars={item.stars} change={false}/></p>
        </Fragment>    
    );
};

export default ReviewItem;