import React, { useState } from 'react';
import './Style.css'
import econ from './Images/left-arrow.svg'
import econ2 from './Images/right-arrow.svg'
import image1 from './Images/image 1.jpg'
import image2 from './Images/image2.jpg'
import image3 from './Images/image3.jpg'
import image4 from './Images/image 4.jpg'





const sliderData = [
  {
    id: 1,
    image: image1,
    caption: 'Image 1',
  },
  {
    id: 2,
    image: image2,
    caption: 'Image 2',
  },
  {
    id: 2,
    image: image3,
    caption: 'Image 3',
  },
  {
    id: 1,
    image: image4,
    caption: 'Image 4',
  }
  // Ajoutez d'autres URL d'images si nécessaire
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  return (
    <center>
    <div className="slider" id='a'>
      <div id='b' style={{width :'25px'}} onClick={prevSlide}><img src={econ}></img></div>
      <img id='img'  src={sliderData[currentImageIndex].image} alt={sliderData[currentImageIndex].caption} />
      <div id='c' style={{width :'25px'}} onClick={nextSlide}><img src={econ2}></img></div>
    </div>
    </center>
  );
};

export default Slider;