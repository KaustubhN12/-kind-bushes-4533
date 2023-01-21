import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StarIcon } from '@chakra-ui/icons'
import './rec.css';
import {dataDigitalBestSeller} from '../brandData'
import { Box } from '@chakra-ui/react';
// import imgGirl from './assets/images/defaultImage.jpg';

function Recommended() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
    dotsClass: "slick-dots slick-thumb",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: "https://media.finishline.com/i/finishline/FNL_060822_B&W-Styles_3Up_Homepage_Tile_604x604",
    }));
  };

  return (
    <div style={{marginBottom:"40px",marginTop:"20px"}}>
      <Slider {...settings} className="customSlide">
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              
            </div>
            <div className="card-bottom">
            <p style={{fontSize:"12px"}}>{item.color} Colors</p>
            <h1 style={{fontWeight:"500",marginBottom:"10px"} }>{item.title}</h1>
            <h3>{item.price}</h3>
            <Box display='flex' mt='2' alignItems='center'>
          {Array(5)
            .fill('')
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < item.rating ? 'black.500' : 'gray.300'}
              />
            ))}
            </Box>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
export default Recommended;