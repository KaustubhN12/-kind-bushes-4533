import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './trend.css';
import {  Link } from '@chakra-ui/react';
// import imgGirl from './assets/images/defaultImage.jpg';
 const dataDigitalBestSeller = [
    {
      id: 1,
      color:2,
      title: "Men's Nike Air Force 1 Low Casual Shoes",
      price: '$59.99',
      rating: 4,
      ratingcount:555,
      linkImg:
        'https://content.stylitics.com/images/collage/782482cca23f3b1c33127d97eb44a1cf514427549b89ad?png=true&background=f2f2f2',
    },
    {
      id: 2,
      color:2,
      title: "Men's Nike Air Force 1 Low Casual Shoes",
      price: '$59.99',
      rating: 4,
      ratingcount:555,
      linkImg:
        'https://content.stylitics.com/images/collage/782482cca53e3b05ee9ffded89ada73b45072255e0cec0?png=true&background=f2f2f2',
    },
    {
      id: 3,
      color:2,
      title: "Men's Nike Air Force 1 Low Casual Shoes",
      price: '$59.99',
      rating: 4,
      ratingcount:555,
      linkImg:
        'https://content.stylitics.com/images/collage/782482cca43d3c9f30fb30b134475964e9b54b6c9347d9?png=true&background=f2f2f2',
    },
    {
      id: 4,
      color:2,
      title: "Men's Nike Air Force 1 Low Casual Shoes",
      price: '$59.99',
      rating: 4,
      ratingcount:555,
      linkImg:
        'https://content.stylitics.com/images/collage/782482cca53c3f085e9e5f0756509dd09bd094b31d7a31?png=true&background=f2f2f2',
    },
    {
      id: 5,
      color:2,
      title: "Men's Nike Air Force 1 Low Casual Shoes",
      price: '$59.99',
      rating: 4,
      ratingcount:555,
      linkImg:
        'https://content.stylitics.com/images/collage/782482cca2383e91c85ed1104b2da5672ff89ac176d1c5?png=true&background=f2f2f2',
    },
    {
      id: 6,
      color:2,
      title: "Men's Nike Air Force 1 Low Casual Shoes",
      price: '$59.99',
      rating: 4,
      ratingcount:555,
      linkImg:
        'https://content.stylitics.com/images/collage/782482cfa63f3cc32af3d9547b8135352ecf6c5724e241?png=true&background=f2f2f2',
    },
    {
      id: 7,
      color:2,
      title: "Men's Nike Air Force 1 Low Casual Shoes",
      price: '$59.99',
      rating: 4,
      ratingcount:555,
      linkImg:
        'https://content.stylitics.com/images/collage/782482cfa63b3b69412f274bb1e07badeb6742c7a6f78f?png=true&background=f2f2f2',
    },
    {
      id: 8,
      color:2,
      title: "Men's Nike Air Force 1 Low Casual Shoes",
      price: '$59.99',
      rating: 4,
      ratingcount:555,
      linkImg:
        'https://content.stylitics.com/images/collage/782482ccae3a3c431f8eac62952d1b0c3d62999a61903f?png=true&background=f2f2f2',
    },
    {
        id: 9,
        color:2,
        title: "Men's Nike Air Force 1 Low Casual Shoes",
        price: '$59.99',
        rating: 4,
        ratingcount:555,
        linkImg:
          'https://content.stylitics.com/images/collage/782482cfa03f30fc92c48d520ee4cc3a30eef5d4a8e4e8?png=true&background=f2f2f2',
      },
      {
        id: 9,
        color:2,
        title: "Men's Nike Air Force 1 Low Casual Shoes",
        price: '$59.99',
        rating: 4,
        ratingcount:555,
        linkImg:
          'https://content.stylitics.com/images/collage/782482cca33b30f0193c1602b4527b0e34b1317de61648?png=true&background=f2f2f2',
      },
      {
        id: 9,
        color:2,
        title: "Men's Nike Air Force 1 Low Casual Shoes",
        price: '$59.99',
        rating: 4,
        ratingcount:555,
        linkImg:
          'https://content.stylitics.com/images/collage/782482cfa63e3ae90a622926ce7445ee4b0c49b4b61b16?png=true&background=f2f2f2',
      },
      {
        id: 9,
        color:2,
        title: "Men's Nike Air Force 1 Low Casual Shoes",
        price: '$59.99',
        rating: 4,
        ratingcount:555,
        linkImg:
          'https://content.stylitics.com/images/collage/782482ceae323f4fbc4d7ee24e341fdac317e939b46147?png=true&background=f2f2f2',
      }
  ];
function Trending() {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
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
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="cards">
            <div className="card-tops">
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
            <Link textDecoration={"underline"}>View details</Link>
          </div>
          
        ))}
      </Slider>
    </div>
  );
}
export default Trending;