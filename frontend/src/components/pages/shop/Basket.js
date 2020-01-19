import React,{Fragment, useEffect} from 'react';
import './../../../css/default.css';
import {Link} from 'react-router-dom';
import BasketItem from '../../lists/BasketItem';
import uuid from 'uuid';

const Basket = ({list}) => {

    return (
            <Fragment>
                <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th colspan="2">Producto</th>
                        <th>Cantidad</th>
                        <th>Precio unitario</th>
                        <th>Descuento</th>
                        <th colspan="2">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map(item => (
                        <BasketItem 
                            key = {uuid()}
                            item = {item}
                        />
                    ))}
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colspan="5">Total</th>
                        <th colspan="2">$446.00</th>
                    </tr>
                    </tfoot>
                </table>
                </div>
        </Fragment>
    );
}

export default Basket;
