import React, {useEffect, useState} from 'react'
import './../../../css/default.css';
import { getCoupon } from '../../pages/customer/utils/CustomerFunctions';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';
import Error from '../../messages/Error';
import moment from 'moment';
import { EditCouponModal } from '../utils/modals';
import { modCoupon } from '../utils/adminFunctions';

function CouponDetail({props}) {
    const [coupon, setCoupon] = useState({});
    const [modalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState(false);
    const [loading,setLoading] = useState (false);
    const [id] = useState(props.match.params.id);
    const [date, setDate] = useState('');
    const [refresh, setRefresh] = useState(false);
    const [porc, setPorc] = useState('');

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
        setError(false);  
    };

    useEffect(() => {    
        setLoading(true);
        getCoupon(id)
        .then(res => {
            console.log(res);
            if (res === 'used') {
                setCoupon(null);
            }
            setCoupon(res.data);
            setPorc(res.data.pc);
            setDate(res.cad_date);
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false)
    }, [refresh]);

    const editarCupon = (date, pc) => {
        let cad_date = moment(date).format('MM/DD/YYYY');
        let used = false;
        const cupon = {
            id: coupon.id,
            pc,
            cad_date,
            used
        }
        modCoupon(cupon)
        .then(res => {
            console.log(res);
            setRefresh(true);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false);
    }

    return (
        <div className="row addresses" >
            {(loading) ? (
                <div className="col-md-12 text-center" style={{top:'50%',left:'5%', position:'absolute'}}> 
                    <Spinner animation="border" variant="dark" size="lg" role="status" />
                </div> 
            ): ( (error) ? (<Error texto="Ha ocurrido un error interno en el servidor" />) : (
                (!coupon) ?
                (<div className="card shadow" style={{left:'35%',position:'absolute',bottom:'55%', width:'30%'}}>
                    <div className="card-header">
                        <h3 className="text-center">
                            <label>
                                <span>Cupón inhabilitado</span>
                            </label>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 text-center">
                            <div className="card-title text-uppercase">
                                <h4>Fecha de vencimiento: {moment(date).utc().format('DD/MM/YYYY')} </h4>
                            </div>
                            <div className="card-subtitle">
                                
                            </div>
                            <div className="card-text" style={{float: 'right'}}>
                          
                            </div>  
                        </div>
                        
                    </div>
                </div>) : (
                    <div className="card shadow" style={{left:'35%',position:'absolute',bottom:'55%', width:'30%'}}>
                    <div className="card-header">
                        <h3 className="text-center">
                            <label>
                                <span>{coupon.pc}% de descuento</span>
                            </label>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 text-center">
                            <div className="card-title text-uppercase">
                                <h4>Fecha de vencimiento: {moment(date).utc().format('DD/MM/YYYY')} </h4>
                            </div>
                            <div className="card-text" style={{float: 'right'}}>
                                <Button variant="warning" onClick={handleModalOpen} className="btn btn-warning">
                                    Editar
                                </Button> 
                            </div>  
                        </div>
                        
                    </div>
                </div>
                )
            ))}
        <EditCouponModal 
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        fecha={moment(date).utc().format('YYYY-MM-DD')}
        porc={coupon.pc}
        editarCupon={editarCupon}
        />
        </div>
    )
}

export default withRouter(CouponDetail);

