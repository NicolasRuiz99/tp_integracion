import React from 'react';
import './../../../css/default.css';

const OrderSummary = ({cartInfo}) => {
    return (
        <div id="order-summary" className="box mt-0 mb-4 p-0">
            <div className="box-header mt-0">
            <h3>Resumen del pedido</h3>
            </div>
            <p className="text-muted">Los costos de envío y adicionales se calculan en función de los valores ingresados.</p>
            <div className="table-responsive">
            <table className="table">
                <tbody>
                <tr>
                    <td>Subtotal de la compra</td>
                    <th>${cartInfo.price}</th>
                </tr>
                <tr>
                    <td>Descuento</td>
                    <th>$10.00</th>
                </tr>
                <tr className="total">
                    <td>Total</td>
                    <th>$456.00</th>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default OrderSummary;
