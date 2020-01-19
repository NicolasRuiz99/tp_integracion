import React, { Fragment,useEffect,useState } from "react";
import product1 from "./../../assets/product1.jpg";
import {Link, withRouter} from 'react-router-dom';
import './../../css/default.css';


const ProductItemCostumer = ({item, handleModalOpen}) => {
    const [link,setLink] = useState ('');
    const [isHovering, setIsHovering] = useState(false);
    const [id] = useState(item.id);


    useEffect (()=> setLink (`/shop-detail/${id}`) ,[]);

    return (
        <Fragment>
        <div  className="col-lg-4 col-md-4" style={{paddingRight: '30px'}}>
        
            <div 
            className="product" 
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            >
                {(isHovering) ? (
                    <div 
                    className="close pull-right btn" 
                    aria-label="Close"
                    onClick={() => handleModalOpen(id)}
                    title="Quitar de la lista"
                    style={{'margin-left': '190px',
                    display: 'block',
                    position:'absolute',
                    color: 'white',
                    'background-color': '#FF3333',
                    border: '3px inset rgba(28,110,164,0.18)',
                    'border-radius': '10px'
                    }}
                    >
                       <span aria-hidden="true">&times;</span>
                    </div>
                ) : null}
            <div className="image" style={{'border-radius': '100%'}} ><Link to={link}><img src={product1} alt="" className="img-fluid image1" style={{position: 'relative', 'z-index': '-1', display: 'inline-block' }}/></Link></div>
                <div className="text">
                    <h3 className="h5"><Link to={link}>{item.name}</Link></h3>
                    <p className="price"> {(item.discount !== 0)?<del> ${item.price} </del> : null} ${item.price-((item.discount*item.price)/100)}</p> 
                </div>
            </div>
        </div>
        

        </Fragment>
    );
};

export default withRouter(ProductItemCostumer);

                    