import React, {useEffect, useState, Fragment} from 'react'
import './../../../css/default.css';
import { getCoupon } from '../../pages/customer/utils/CustomerFunctions';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { withRouter, Link } from 'react-router-dom';
import Error from '../../messages/Error';
import moment from 'moment';
import { EditCouponModal } from '../utils/modals';
import { modCoupon } from '../utils/adminFunctions';
import BreadCrumbs from '../../BreadCrumbs';

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
        setRefresh (false);
        setLoading(true);
        getCoupon(id)
        .then(res => {
            console.log(res);
            setCoupon(res);
            setPorc(res.pc);
            setDate(moment(res.cad_date).utc().format('YYYY-MM-DD'));
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            return;
        })
        setError(false)
    },[refresh]);

    const editarCupon = (date, pc, used) => {
        let cad_date = moment(date).format('MM/DD/YYYY');
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
        <Fragment>

            <BreadCrumbs name={`Detalles del cupón #${id}`} isAdmin={true}/>

        <div className="row addresses" >
            {(loading) ? (
                <div className="col-md-12 text-center" style={{top:'40%',left:'5%', position:'absolute'}}> 
                    <Spinner animation="border" variant="dark" size="lg" role="status" />
                </div> 
            ): ( (error) ? (<Error texto="Ha ocurrido un error interno en el servidor" />) : (
                (coupon.used) ?
                (<div className="card shadow" style={{left:'32%',position:'absolute',bottom:'48%', width:'35%'}}>
                    <div className="card-header">
                        <h3 className="text-center">
                            <label>
                                <span>Cupón #{id}</span>
                            </label>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 text-center">
                            <div className="card-title text-uppercase row">
                                <label>
                                <h5>Obtuvo un descuento de un {coupon.pc}% </h5>
                                <h5>con fecha de vencimiento: {moment(date).utc().format('DD/MM/YYYY')}.</h5>
                                <p className="text-muted float-right" style={{margin:'0'}}>Actualmente no se encuentra disponible</p>
                                </label>
                            </div>
                        </div>   
                    </div>
                </div>) : (
                    <div className="card shadow" style={{left:'32%',position:'absolute',bottom:'48%', width:'32%'}}>
                    <div className="card-header">
                        <h3 className="text-center">
                            <label>
                                <span>Cupón #{id}</span>
                            </label>
                        </h3>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 text-center">
                            <div className="card-title text-uppercase">
                                <label>
                                    <h5>Tiene un descuento de un {coupon.pc}% </h5>
                                    <h5>y vence el: {moment(date).utc().format('DD/MM/YYYY')}.</h5>
                                </label>
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
        </div>
        <EditCouponModal 
        modalOpen={modalOpen}
        handleModalOpen={handleModalOpen}
        fecha={date}
        porc={coupon.pc}
        editarCupon={editarCupon}
        />
        </Fragment>
    )
}

export default withRouter(CouponDetail);

