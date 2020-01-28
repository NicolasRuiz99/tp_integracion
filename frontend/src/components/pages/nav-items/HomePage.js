import React, { Fragment,useEffect,useState } from 'react';
import Slider from '../../Slider';
import {Link} from 'react-router-dom';
import './../../../css/default.css';
//Imagenes
import product1 from "./../../../assets/product1.jpg"
import product2 from "./../../../assets/product2.jpg"
import product3 from "./../../../assets/product3.jpg"
import product4 from "./../../../assets/product4.jpg"
import product5 from "./../../../assets/product5.jpg" 
import { listHighRatedProducts, listNewProducts } from '../shop/utils/shopFunctions';
import Spinner from 'react-bootstrap/Spinner';
import ProductList from '../../lists/ProductList';
import Error from '../../messages/Error';

const HomePage = ({user_id}) => {

    const [list1,setList1] = useState ([]);
    const [list2,setList2] = useState ([]);
    const [error,setError] = useState (false);
    const [loading,setLoading] = useState (false);

    useEffect (()=>{
        setLoading (true);
        listNewProducts ()
        .then (res=>{
            setList1 (res);
        })
        .catch (err=>{
            setError (true);
            return;
        })
        listHighRatedProducts ()
        .then (res=>{
            setList2 (res);
            setLoading (false);
        })
        .catch (err=>{
            setError (true);
            return;
        })
        setError (false);
    },[user_id])

    return (
        <Fragment>
        <Slider />
        {(loading)?
            <div className="col-md-13 text-center"> 
            <Spinner animation="border" variant="info" size="lg"  />
            </div>
        :
        
        <div className="box row">
            <div className="col-md-6">
            <div class="heading text-center">
            <h2>Novedades</h2>
            </div>
            {(error)?
            <Error texto={'Hubo un error al recuperar los datos'}/>
            :
            <ProductList list={list1}/>
            }
            </div>
       
      
 
        <div className="col-md-6" style={{borderLeft: '1px solid #cccccc'}}>
        <div class="heading text-center">
            <h2>Mejor valorados</h2>
        </div>
            {(error)?
            <Error texto={'Hubo un error al recuperar los datos'}/>
            :
            <ProductList list={list2} />
            }
            </div>
        </div>
      
        }
        </Fragment>
        
    );
    
}

export default HomePage;
