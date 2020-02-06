import React, {useState} from 'react'
import './../../../../css/default.css';
import SaleItem from './SaleItem';
import Search from './../Search';
import Paginacion from './../../../pages/shop/Paginacion';
import Info from './../../../messages/Info';


export default function SaleList({copyList, setSearch, list}) {
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
          <Info texto="Actualmente no hay ventas" />
         ) : (
              <div className="table-responsive"> 
                <Search setSearch={setSearch} />
                {currentList.length === 0 ? (
                <p className="lead" style={{padding:'8rem', textAlign:'center'}}>No se encontraron resultados...</p>) : (
                  <div>
                <table className="table table-bordered table table-hover" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th style={{textAlign:'center'}}>ID</th>
                      <th style={{textAlign:'center'}}>Fecha</th>
                      <th style={{textAlign:'center'}}>Total</th>
                      <th style={{textAlign:'center'}}>Estado</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th style={{textAlign:'center'}}>ID</th>
                      <th style={{textAlign:'center'}}>Fecha</th>
                      <th style={{textAlign:'center'}}>Total</th>
                      <th style={{textAlign:'center'}}>Estado</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {currentList.map(item => (
                        <SaleItem 
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
            </div>)} 
            </div>
            )}
      </div>
    )
}