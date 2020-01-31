import React from 'react'
import './../../../../css/default.css';
import ProductItem from './ProductItem';

export default function ProductList({list}) {
    return (
        <div>
            <div className="card shadow">
            <div className="card-body">
              <div className="table-responsive">
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
                  {list.map(item => (
                        <ProductItem 
                            key = {item.id}
                            item = {item}
                        />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    )
}
