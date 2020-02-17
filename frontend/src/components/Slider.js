import React from 'react';
import './../css/slider.css';
import image1 from './../assets/slider1.jpg';
import image2 from './../assets/slider2.jpg';
import image3 from './../assets/slider3.jpg';

const Slider = () => {
    return (
      <div id="carouselControls" className="carousel slide home-carousel" data-ride="carousel" >
      <div id="home" className="carousel-inner homepage owl-carousel">
        <div className="dark-mask mask-primary"></div>
        <div className="carousel-item active item">
          <div className="row">
              <img className="d-block w-1920" src={image1} alt="pantalon"/>
            </div>
          </div>
        <div className="carousel-item item">
        <div className="row">
          <img className="d-block w-1920" src={image2} alt="ropa"/></div>
        </div>
        <div className="carousel-item item">
        <div className="row">
          <img className="d-block w-1920" src={image3} alt="calzado"/></div>
      </div>
      </div>
      <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a className="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Siguiente</span>
      </a>
    </div>  
    );
}

export default Slider;
