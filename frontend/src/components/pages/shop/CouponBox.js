import React from 'react';
import './../../../css/default.css';

const CouponBox = () => {
    return (
        <div className="box box mt-0 mb-4 p-0">
            <div className="box-header mt-0">
                <h4>Código de cupón</h4>
            </div>
            <p className="text-muted">Si tenés un código de cupón, por favor, ingresalo en la caja de abajo.</p>
            <form>
                <div className="input-group">
                <input type="text" className="form-control"/><span className="input-group-btn">
                    <button type="button" className="btn btn-main"><i className="fa fa-gift"></i></button></span>
                </div>
            </form>
        </div>
    );
}

export default CouponBox;
