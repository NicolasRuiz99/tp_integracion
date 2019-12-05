import React from 'react';
import './../css/slider.css';
import image1 from './../assets/cg4.jpg';
import image2 from './../assets/cg5.jpg';
import image3 from './../assets/cg6.jpg';



const Slider = () => {
    return (
        <div id="carouselControls" class="carousel slide" data-ride="carousel" >
      <div id="home" class="carousel-inner">
        <div class="carousel-item active"><img class="d-block w-100" src={image1} alt="pantalon"/></div>
        <div class="carousel-item item"><img class="d-block w-100" src={image2} alt="ropa"/></div>
        <div class="carousel-item item"><img class="d-block w-100" src={image3} alt="calzado"/></div>
      </div>
      <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Anterior</span>
      </a>
      <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Siguiente</span>
      </a>
    </div>  
    );
}

export default Slider;
