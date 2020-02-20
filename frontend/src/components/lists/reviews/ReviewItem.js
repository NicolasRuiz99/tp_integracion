import React, { Fragment,useEffect,useState } from "react";
import product1 from "./../../../assets/product1.jpg";
import {Link} from 'react-router-dom';
import './../../../css/default.css';
import './../../../css/review.css';
import moment from 'moment';
import Rating from "../../pages/shop/Rating";

const ReviewItem = ({item, handleModalOpen}) => {

    const [link,setLink] = useState ('');
    const [link2,setLink2] = useState ('');
    const date = moment(item.date).utc().format('DD/MM/YYYY');
    const [stars] = useState (item.stars);

    useEffect (()=> {
        setLink (`/shop-detail/${item.id_product}`);
        setLink2 (`/review-detail/${item.id}`);
    } ,[]);

    const capitalize = (cadena) => {
        return (cadena.charAt(0).toUpperCase() + cadena.slice(1));
    }

    return (
        <Fragment>
            <tr>
                <td><Link to={link}><img src={product1} title={capitalize(item.name)} className="img-fluid" /></Link></td>
                <td>{date}</td>
                <td><div className="reserve"><label><span><Rating change={false} stars={stars}  /></span></label></div></td>
                <td>
                    <Link to={link2}  className="btn btn-outlined btn-sm">Ver/Editar</Link>
                    {
                    <button type="button"
                    className="cancelar"
                    style={{float: 'right', marginRight:'25px', display:'inline-block'}} 
                    title="Eliminar"
                    onClick={() => handleModalOpen(item)}
                    >
                    <i class="fas fa-times-circle"></i>
                    </button>
                    }
                </td>
            </tr>
        </Fragment>    
    );
};

export default ReviewItem;