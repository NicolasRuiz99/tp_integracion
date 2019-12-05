import React from 'react';
import Footer from './Footer';
import Slider from './Slider';

const HomePage = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                <Slider />
                </div>
            
            </div>
                    
           <div className="row fixed-bottom">
               <div className="col-12">
               <Footer />
               </div>
            </div> 
        </div>
    );
    
}

export default HomePage;
