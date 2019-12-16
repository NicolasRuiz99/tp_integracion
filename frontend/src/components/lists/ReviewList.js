import React,{Fragment} from "react";
import ReviewItem from "./ReviewItem";

const ReviewList = ({list}) => {
    return (
        <Fragment>
                
            <div className="box mb-4 mt-4">
                <h3 className="m_3">Reseñas del producto</h3>
                {list.map(item => (
                        <ReviewItem 
                            key = {item.id}
                            item = {item}
                        />
                ))}
            </div>
        </Fragment>
    );
};

export default ReviewList;