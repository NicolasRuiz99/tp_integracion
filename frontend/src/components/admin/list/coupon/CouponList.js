import React, {useState, Fragment} from 'react'
import './../../../../css/default.css';
import CouponItem from './CouponItem';
import Paginacion from './../../../pages/shop/Paginacion';
import { Link } from 'react-router-dom';
import Info from './../../../messages/Info';
import Search from '../Search';

export default function ReviewList({copyList, list, handleModalOpen, setSearch}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage] = useState(8);
  //Obtener lista de productos actual
  const indexOfLastList = currentPage * listPerPage;
  const indexOfFirstList = indexOfLastList - listPerPage;
  const currentList = copyList.slice(indexOfFirstList, indexOfLastList);
 
  //Cambiar de pagina
  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
    return (
        <div>
          {(list.length === 0) ? (
          <Info texto="Actualmente no hay cupones" />
         ) 
          : ( 
            <div className="table-responsive">
                <Search setSearch={setSearch} />
                <div className="col-sm-6 col-md-2" style={{float: 'left', paddingRight:'4rem', padding:'0.75rem'}}>
                <div type="button" className="btn btn-warning">
                    Nuevo cupón
                </div>
                </div>
                {currentList.length === 0 ? (
                <p className="lead" style={{padding:'8rem', textAlign:'center'}}>No se encontraron resultados...</p>
                ) : (
                    <div>
                    <table className="table table-bordered table table-hover" width="100%" cellspacing="0">
                    <thead>
                      <tr>
                        <th style={{textAlign:'center'}}>ID</th>
                        <th style={{textAlign:'center'}}>Vencimiento</th>
                        <th style={{textAlign:'center'}}>Descuento</th>
                        <th style={{textAlign:'center'}}>Disponible</th>
                        <th style={{textAlign:'center'}}>Acciones</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th style={{textAlign:'center'}}>ID</th>
                        <th style={{textAlign:'center'}}>Vencimiento</th>
                        <th style={{textAlign:'center'}}>Descuento</th>
                        <th style={{textAlign:'center'}}>Disponible</th>
                        <th style={{textAlign:'center'}}>Acciones</th>
                      </tr>
                    </tfoot>
                    <tbody>
                    {currentList.map(item => (
                          <CouponItem 
                              key = {item.id}
                              item = {item}
                          />
                      ))}
                    </tbody>
                  </table>
                   <Paginacion 
                   listPerPage={listPerPage} 
                   totalList={copyList.length} 
                   paginate={paginate} 
                   setCurrentPage={setCurrentPage} 
                   currentPage={currentPage}
                   />   
                   </div>
                )}
               
            </div>
          )}
      </div>
    )
}