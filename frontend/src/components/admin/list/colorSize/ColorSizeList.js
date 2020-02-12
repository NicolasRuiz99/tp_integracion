import React from 'react'
import './../../../../css/default.css';
import ColorSizeItem from './ColorSizeItem';

export default function ColorSizeList({list, handleModalOpen}) {

    return (
        <div>
              <div className="table-responsive">
                <table className="table table-bordered table table-hover" width="100%" cellspacing="0">
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
                  {list.map(item => (
                        <ColorSizeItem 
                            key = {item.id}
                            item = {item}
                            handleModalOpen={handleModalOpen}
                        />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
    )
}