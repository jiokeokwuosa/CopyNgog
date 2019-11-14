import React, { Component } from "react";
import Slider from "react-slick";
import myImage from '../../assets/img/partner.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
    };
    return (
      <div>        
        <Slider {...settings}>
          <div>
            <img src={myImage} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage} alt="Our Partners"/> 
          </div>
          <div>
            <img src={myImage} alt="Our Partners"/> 
          </div> 
          <div>
            <img src={myImage} alt="Our Partners"/> 
          </div>          
        </Slider>
      </div>
    );
  }
}