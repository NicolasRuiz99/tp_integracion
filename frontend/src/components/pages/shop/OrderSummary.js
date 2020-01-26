import React from 'react';
import './../../../css/default.css';

const OrderSummary = ({price,setCoupon,coupon}) => {

    return (
        <div id="order-summary" className="box mt-0 mb-4 p-0">
            <div className="box-header mt-0">
            <h3>Resumen del pedido</h3>
            </div>
            <p className="text-muted">Los costos de envío no se incluyen aquí.</p>
            <div className="table-responsive">
            <table className="table">
                <tbody>
                <tr>
                <td>Subtotal de la compra</td>
                <th>${price}</th>     
                </tr>
                {(coupon !== '')?
                <tr>
                    <td>Descuento</td>
                    <th>${(coupon.pc*price)/100}</th><button type="button" className="fa fa-trash-o" onClick={()=> setCoupon ('')} ></button>
                </tr>
                :
                <tr>
                    <td>Descuento</td>
                    <th>$0.00</th>
                </tr>
                }   
                <tr className="total">
                <td>Total</td>
                {(coupon !== '')?<th>${price-((coupon.pc*price)/100)}</th>:<th>${price}</th>}
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default OrderSummary;
