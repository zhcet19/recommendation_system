import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Pic from "../images/img-1.jpg";
import ac from '../images/AC_image.jpeg';
import tv from '../images/TV_image.webp';
import washing from '../images/Washing_machine_image.png';
import micro from '../images/Microwave_image.jpeg';
import ref from '../images/Ref_image.jpeg';
import Button from '@mui/material/Button';

import "./style.css";



const Carousel = () => {
  
  return (
    <div>
      <OwlCarousel
        items={5}
        className="owl-theme"
        loop
        nav
        margin={8}
        autoplay={true}
      >
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={ref} alt="Img1" />
            <h1>Tailored Jeans</h1>
            {/* <p class="price">$999</p> */}
            
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={tv} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <Button variant="contained" color="primary">
              Add to cart
            </Button>  
            
            
           
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={washing} alt="Img1" />
            <h1>Tailored Jeans</h1>
            {/* <p class="price">$19.99</p> */}
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={micro} alt="Img1" />
            <h1>Tailored Jeans</h1>
           
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={ac} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </div>
        </div>
        <div className="carousel-box">
          <div class="card">
            <img className="img" src={ref} alt="Img1" />
            <h1>Tailored Jeans</h1>
            <Button variant="contained" color="primary">
              Add to cart
            </Button>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default Carousel;