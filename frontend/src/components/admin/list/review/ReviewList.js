import React, {useState} from 'react'
import './../../../../css/default.css';
import ReviewItem from './ReviewItem';
import Search from './../Search';
import Paginacion from './../../../pages/shop/Paginacion';

//Cada tabla tendrá su propia barra de búsqueda
export default function ReviewList({copyList, setSearch}) {
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
              <div className="table-responsive">
                <Search setSearch={setSearch} />
                <table className="table table-bordered table table-hover" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th style={{textAlign:'center'}}>ID</th>
                      <th style={{textAlign:'center'}}>Fecha</th>
                      <th style={{textAlign:'center'}}>Producto</th>
                      <th style={{textAlign:'center'}}>Valoración</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
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
            </div>
    )
}