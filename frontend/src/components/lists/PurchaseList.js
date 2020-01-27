import React,{Fragment} from "react";
import {withRouter} from 'react-router-dom';
//Ésta lista tiene el boton close
import './../../css/default.css';
import PurchaseItem from "./PurchaseItem";

const PurchaseList = ({list, handleModalOpen}) => {
    return (
        <Fragment>
            <div className="box mt-0 mb-lg-0">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Fecha</th>
                        <th>Total</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                    {list.map(item => (
                        <PurchaseItem 
                            key = {item.id}
                            item = {item}
                            handleModalOpen= {handleModalOpen}
                        />
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>         
        </Fragment>
    );
};

export default withRouter(PurchaseList);