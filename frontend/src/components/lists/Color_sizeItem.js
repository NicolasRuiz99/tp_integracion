import React, { Fragment,useEffect,useState } from "react";
import './../../css/default.css';
import { stringify } from "query-string";

const Color_sizeItem = ({item,type}) => {

    switch (type){
        case 1:
            return (
                <Fragment>
                    <option value={item.size}>{item.size}</option>
                </Fragment>    
            );
            break;
        case 2:
            return (
                <Fragment>
                    <option value={item}>{item}</option>
                </Fragment>    
            );
            break;
    }

    
};

export default Color_sizeItem;