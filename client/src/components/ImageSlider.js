import React from 'react'
import styled from 'styled-components'
// import "~slick-carousel/slick/slick.css";  not work
// import "~slick-carousel/slick/slick-theme.css"; not work
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'



function ImageSlider() {

  // slider setting----------------
  let settings = 
  {
      dots:true,
      infinite:true,
      speed:570,
      slidesToShow:1,
      slidesToScroll:1,
      autoplay:true
  }
    // slider setting----------------

  return (
    // this ...setting concpet is called destructuring it mean 
    // we put all the settings in this Carousal div. for slider
    <Carousel {...settings}>
      <Wrap>
      <img src= "/images/slider-badging.jpg"/>
      </Wrap>
      <Wrap>
      <img src= "/images/slider-badag.jpg"/>
      </Wrap>
      
      
    </Carousel>
  )
}

export default ImageSlider
const Carousel =  styled(Slider)
`
margin : 30px;

ul li button{
  &:before
  {

      font-size:10px;
      color:rgb(150,158,171); 
  }
}
li.slick-active button : before{
  color:white;
}

.slick-list{
  overflow: visible;
}
button 
{
  z-index: 1;
}
`
const Wrap = styled.div
`
img 
{
  border : 4px solid transparent;
  border-radius:4px;
  width:100%;
  height:100%;
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 38px -10px,
  rgb(0 0 0/73%) 0px 16px 10px 10px;
  transition : 300ms;
&:hover{
  border:4px solid rgba(249,249,249,0.8);
}
}
`