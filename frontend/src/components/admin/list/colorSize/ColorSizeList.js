import React, {useState} from 'react'
import './../../../../css/default.css';
import ColorSizeItem from './ColorSizeItem';
import Search from '../Search';

export default function ColorSizeList({copyList, handleModalOpen, setSearch}) {
    return (
        <div>
              <div className="table-responsive">
                <Search setSearch={setSearch} />
                {copyList.length === 0 ? (
                <p className="lead" style={{padding:'8rem', textAlign:'center'}}>No se encontraron resultados...</p>
                ) : (
                    <div >
                <table className="table table-bordered table table-hover" width="100%" cellspacing="0" >
                  <thead>
                    <tr>
                      <th style={{textAlign:'center'}}>ID</th>
                      <th style={{textAlign:'center'}}>Color</th>
                      <th style={{textAlign:'center'}}>Talle</th>
                      <th style={{textAlign:'center'}}>Stock</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th style={{textAlign:'center'}}>ID</th>
                      <th style={{textAlign:'center'}}>Color</th>
                      <th style={{textAlign:'center'}}>Talle</th>
                      <th style={{textAlign:'center'}}>Stock</th>
                      <th style={{textAlign:'center'}}>Acciones</th>
                    </tr>
                  </tfoot>
                  <tbody>
                  {copyList.map(item => (
                        <ColorSizeItem 
                            key = {item.id}
                            item = {item}
                            handleModalOpen={handleModalOpen}
                        />
                    ))}
                  </tbody>
                </table>
                </div>)}
              </div>
            </div>
    )
}