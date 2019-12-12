import React from 'react';
import './../../../css/default.css';
import {Link} from 'react-router-dom';
import img from "./../../../assets/detailsquare.jpg";
import img2 from "./../../../assets/basketsquare.jpg";
import './../../../css/default.css';

const Basket = () => {
    return (
        <div className="box mt-0 pb-0 no-horizontal-padding">
            <form method="get" action="/shop-checkout1">
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
                    <tr>
                        <td><Link to="/shop-detail"><img src={img} alt="zapatos" className="img-fluid" /></Link></td>
                        <td><Link to="/shop-detail">Zapatos de cuero negro</Link></td>
                        <td>
                        <input type="number" value="2" className="form-control" />
                        </td>
                        <td>$123.00</td>
                        <td>$0.00</td>
                        <td>$246.00</td>
                        <td><Link to="#"><i className="fa fa-trash-o"></i></Link></td>
                    </tr>
                    <tr>
                        <td><Link to="/shop-detail"><img src={img2} alt="pantalon deportivo" className="img-fluid"/></Link></td>
                        <td><Link to="/shop-detail">Pantalón deportivo</Link></td>
                        <td>
                        <input type="number" value="1" className="form-control"/>
                        </td>
                        <td>$200.00</td>
                        <td>$0.00</td>
                        <td>$200.00</td>
                        <td><Link to="#"><i className="fa fa-trash-o"></i></Link></td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colspan="5">Total</th>
                        <th colspan="2">$446.00</th>
                    </tr>
                    </tfoot>
                </table>
                </div>
                <div className="box-footer d-flex justify-content-between align-items-center">
                <div className="left-col"><Link to="/shop-category" className="btn btn-secondary mt-0"><i className="fa fa-chevron-left"></i> Continuar comprando</Link></div>
                <div className="right-col">
                    <Link to="/shop-cart" className="btn btn-secondary"><i className="fa fa-refresh"></i> Actualizar el carrito</Link>
                    <button type="submit" className="btn btn-outlined">Proceder al pago <i className="fa fa-chevron-right"></i></button>
                </div>
                </div>
            </form>
        </div>
    );
}

export default Basket;
