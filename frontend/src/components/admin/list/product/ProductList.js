import React, {useState} from 'react'
import './../../../../css/default.css';
import ProductItem from './ProductItem';
import Search from './../Search';
import Paginacion from './../../../pages/shop/Paginacion';

//Cada tabla tendrá su propia barra de búsqueda
export default function ProductList({copyList}) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [listPerPage] = useState(6);
  //Obtener lista de productos actual
  const indexOfLastList = currentPage * listPerPage;
  const indexOfFirstList = indexOfLastList - listPerPage;
  const currentList = copyList.slice(indexOfFirstList, indexOfLastList);

  //Cambiar de pagina
  const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
            <div className="card shadow">
            <div className="card-body">
              <div className="table-responsive">
                <Search setSearch={setSearch} />
                <table className="table table-bordered table table-hover" width="100%" cellspacing="0">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Género</th>
                      <th>Material</th>
                      <th>Precio</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Género</th>
                      <th>Material</th>
                      <th>Precio</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {currentList.map(item => (
                        <ProductItem 
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
          </div>
        </div>
    )
}