import React from 'react';
import './../../../css/default.css';
import {Link} from 'react-router-dom';


const Paginacion = () => {
    return (
        <div className="pages">
            <p className="loadMore text-center"><Link to="#" className="btn btn-outlined"><i className="fa fa-chevron-down"></i> Cargar más</Link></p>
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination">
                <li className="page-item"><Link to="#" className="page-link"> <i className="fa fa-angle-double-left"></i></Link></li>
                <li className="page-item active"><Link to="#" className="page-link">1</Link></li>
                <li className="page-item"><Link to="#" className="page-link">2</Link></li>
                <li className="page-item"><Link to="#" className="page-link">3</Link></li>
                <li className="page-item"><Link to="#" className="page-link">4</Link></li>
                <li className="page-item"><Link to="#" className="page-link">5</Link></li>
                <li className="page-item"><Link to="#" className="page-link"><i className="fa fa-angle-double-right"></i></Link></li>
            </ul>
            </nav>
        </div>
    );
}

export default Paginacion;
