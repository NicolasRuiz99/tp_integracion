import React,{Fragment} from "react";
import {withRouter} from 'react-router-dom';
import './../../../css/default.css';
import ReservationItem from "./ReservationItem";

const ReservationList = ({list, handleModalOpen}) => {
    return (
        <Fragment>
            <div className="box mt-0 mb-lg-0">
                <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Fecha</th>
                        <th>Cantidad</th>
                        <th>Talle</th>
                        <th>Color</th>
                        <th>Precio</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                    {list.map(item => (
                        <ReservationItem 
                            key = {item.id}
                            item = {item}
                            handleModalOpen={handleModalOpen}
                        />
                    ))}
                    </tbody>
                  </table>
                </div>
              </div>         
        </Fragment>
    );
};

export default withRouter(ReservationList);