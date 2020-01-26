import React, { Fragment} from "react";
import './../../css/default.css';

const ProvinceItem = ({item}) => {
        return (
            <Fragment>
                <option value={item.nombre}>{item.nombre}</option>
            </Fragment> 
        );   
    
};

export default ProvinceItem;