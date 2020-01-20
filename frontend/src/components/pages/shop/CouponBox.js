import React,{useState,useEffect} from 'react';
import './../../../css/default.css';
import { getCoupon } from '../customer/utils/CustomerFunctions';

const CouponBox = ({setCoupon}) => {

    const [id,setID] = useState ('');
    const [error,setError] = useState (false);
    const [success,setSuccess] = useState (false);

    const handleSubmit = () => {
        if (id === ''){
            setSuccess (false);
            setError (true);
            return;
        }
        getCoupon (id)
        .then (res =>{
            if (res.result === 'used'){
                setError (true);
                setSuccess (false);
                return;
            }else{
                setSuccess (true);
                setCoupon (res.data);
            }
        })
        .catch (err =>{
            setError (true);
            setSuccess (false);
            return;
        })
        setError (false);
    }
    
    return (
        <div className="box box mt-0 mb-4 p-0">
            <div className="box-header mt-0">
                <h4>Código de cupón</h4>
            </div>
            <p className="text-muted">Si tenés un código de cupón, por favor, ingresalo en la caja de abajo.</p>
            <div className="input-group">
            <input type="text" className="form-control" onChange = {(e)=>setID(e.target.value)} /><span className="input-group-btn">
            <button type="button" className="btn btn-main" onClick = {handleSubmit} title="Aplicar cupón" ><i className="fa fa-gift"></i></button></span>
            </div>
            {(error)?
            <div className="alert alert-danger mt-2 mb-5 text-center">
              Cupón inválido
            </div>
            :
            null
            }
            {(success)?
            <div className="alert alert-success mt-2 mb-5 text-center">
              Cupón aplicado
            </div>
            :
            null
            }
        </div>
    );
}

export default CouponBox;
