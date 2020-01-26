import React, { Fragment } from "react";
import './../../css/default.css';

const Color_sizeItem = ({item,type}) => {

    switch (type){
        case 1:
            return (
                <Fragment>
                    <option value={item.size}>{item.size}</option>
                </Fragment>    
            );
        case 2:
            return (
                <Fragment>
                    <option value={item}>{item}</option>
                </Fragment>    
            );
    }

    
};

export default Color_sizeItem;