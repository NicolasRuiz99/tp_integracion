import React, {useState} from 'react'
import './../../../../css/default.css';
import ProductItem from './ProductItem';
import Search from './../Search';
import Paginacion from './../../../pages/shop/Paginacion';
import Info from '../../../messages/Info';
import {Link, withRouter} from 'react-router-dom';
import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from './PdfDocument';
import moment from 'moment';

function ProductList({copyList, setSearch, list, changeList, toDelete, isCheck, clean, handleModalOpen, lista, show, history}) {
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
          <Info texto="Actualmente no hay productos" />
         ) 
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
                {show && <PDFDownloadLink
                  document={<PdfDocument data={lista} />}
                  fileName={`productos-${moment(new Date()).utc().format('DD-MM-YYYY')}.pdf`}
                  style={{
                    textDecoration: "none",
                    padding: "11px",
                    color: "red",
                    marginTop:'0.3rem',
                    backgroundColor: "#f2f2f2",
                    border: "1px solid #4a4a4a"
                  }}
                >
                  {({ blob, url, loading, error }) =>
                    loading ? "Cargando" : (<i className="far fa-file-pdf" title="Productos con bajo stock"></i>)
                  }
                </PDFDownloadLink>}
                <Search setSearch={setSearch} />
                <div className="col-sm-6 col-md-2" style={{float: 'left', paddingRight:'4rem', padding:'0.75rem', marginLeft: '6rem', color:'#fff'}}>
                <div type="button" onClick={() => history.push("/admin-page/addproduct")} className="btn btn-primary">
                    Nuevo Producto
                </div>
                </div>
                {currentList.length === 0 ? (
                <p className="lead" style={{padding:'8rem', textAlign:'center'}}>No se encontraron resultados...</p>
                ) : (
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
                      <th style={{textAlign:'center'}}>Nombre</th>
                      <th style={{textAlign:'center'}}>Stock</th>
                      <th style={{textAlign:'center'}}>Estado</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </thead>
                  <tfoot>
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
                      <th style={{textAlign:'center'}}>Nombre</th>
                      <th style={{textAlign:'center'}}>Stock</th>
                      <th style={{textAlign:'center'}}>Estado</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {currentList.map(item => (
                        <ProductItem 
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
              </div>
            )}
            </div>
          )}
      </div>
    )
}

export default withRouter(ProductList); 