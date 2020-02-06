import React, {useState} from 'react'
import './../../../../css/default.css';
import ReviewItem from './ReviewItem';
import Search from './../Search';
import Paginacion from './../../../pages/shop/Paginacion';
import { Link } from 'react-router-dom';
import Info from './../../../messages/Info';

//Cada tabla tendrá su propia barra de búsqueda
export default function ReviewList({copyList, setSearch, changeList, toDelete, isCheck, clean, handleModalOpen, list}) {
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
          <Info texto="Actualmente no hay reviews" />) 
          : ( 
            <div className="table-responsive">
              <div className="col-sm-8 col-md-4" style={{float: 'left', paddingBottom:'0rem', paddingTop: '0rem', padding: '0.4rem'}}>
                {(toDelete.length > 0) ? (
                  (toDelete.length === 1 ? ( 
                      <p className="text-muted">1 item seleccionado
                      &nbsp; 
                      <Link onClick={isCheck}> Borrar la selección</Link></p>
                      
                    ) : (    
                    <p className="text-muted">{toDelete.length} items seleccionados
                    &nbsp;
                    <Link onClick={isCheck}> Borrar la selección</Link></p>
                    
                  ))
                ) : null}
                </div>
                <Search setSearch={setSearch} />
                {currentList.length === 0 ? (
                <p className="lead" style={{padding:'8rem', textAlign:'center'}}>No se encontraron resultados...</p>) : (
                  <div>
                <table className="table table-bordered table table-hover" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th style={{
                        textAlign:'center', 
                        borderTop: '0px',
                        borderRight: '0px',
                        borderLeft: '0px'}}>
                          {(toDelete.length > 0) ? (
                            <Link onClick={handleModalOpen}><i className="fa fa-trash-o" title="Eliminar elementos"></i></Link>
                          ): null}
                      </th>
                      <th style={{textAlign:'center'}}>ID</th>
                      <th style={{textAlign:'center'}}>Fecha</th>
                      <th style={{textAlign:'center'}}>Producto</th>
                      <th style={{textAlign:'center'}}>Valoración</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th style={{
                        textAlign:'center', 
                        borderTop: '0px',
                        borderRight: '0px',
                        borderBottom: '0px',
                        borderLeft: '0px'}}>
                          {(toDelete.length > 0) ? (
                            <Link onClick={handleModalOpen}><i className="fa fa-trash-o" title="Eliminar elementos"></i></Link>
                          ): null}
                      </th>
                      <th style={{textAlign:'center'}}>ID</th>
                      <th style={{textAlign:'center'}}>Fecha</th>
                      <th style={{textAlign:'center'}}>Producto</th>
                      <th style={{textAlign:'center'}}>Valoración</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {currentList.map(item => (
                        <ReviewItem 
                            key = {item.id}
                            item = {item}
                            changeList={changeList}
                            clean={clean}

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
             </div>)} 
            </div>
          )}
      </div>
    )
}