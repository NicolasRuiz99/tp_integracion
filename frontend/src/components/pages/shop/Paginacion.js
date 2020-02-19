import React from 'react';
import './../../../css/default.css';
import {Link, withRouter} from 'react-router-dom';


const Paginacion = ({listPerPage, totalList, paginate, currentPage}) => {
    const pageNumbers = [];

    //devuelvo el entero mayor o igual más próximo al total de productos obtenidos entre los productos por página.
    for(let i=1; i <= Math.ceil(totalList / listPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pages" > 
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination">
                    <li className={`page-item ${(currentPage === pageNumbers[0])?'disabled':null}`}><div onClick={() => paginate(currentPage - 1)} className="page-link" style={{cursor:'pointer'}}> <i className="fa fa-angle-double-left"></i></div></li>
                    {
                    pageNumbers.map(number => (
                        <li key={number} className={`page-item ${(currentPage === number) ? 
                            'active' : null}`}><div onClick={() => paginate(number)} className="page-link" style={{cursor:'pointer'}}>{number}</div></li>
                    ))}
                    <li className={`page-item ${(currentPage === pageNumbers[pageNumbers.length - 1])? 'disabled':null}`}><div onClick={() => paginate(currentPage + 1)} className="page-link" style={{cursor:'pointer'}}><i className="fa fa-angle-double-right"></i></div></li>
                </ul>
            </nav>
        </div>
    );
}

export default withRouter(Paginacion);
