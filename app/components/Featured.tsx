'use client';
import React from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineStar} from 'react-icons/ai'
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai'
import Card from "../constants/sCard";
import { useProductsQuery } from '../services/storeApi';

const style = {
  main_div: `xxs:pl-[10px] py-[25px]`,
}

const Featured = () => {
  const {data, error, isLoading, isFetching, isSuccess} = useProductsQuery();
  const settings = {
      infinite:false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
    prevArrow:  <AiFillCaretLeft color="#b91453" />,
    nextArrow: <AiFillCaretRight color="#b91453" />,
        swipeToSlide: true,        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.4,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.7,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows:false
          }
        },
        {
          breakpoint: 340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
          }
        }
      ]
  };
  return (
    <>
      <div className={`${style.main_div}`} >
       <div className="flex items-center pb-[18px] ">
        <div className="flex  "><AiOutlineStar style={{fontSize:'20px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold xxs:text-[20px] ">FEATURED EVENTS</div>
       </div>
       <Slider {...settings}>
        {isLoading  && <h1 className="text-center" >Loading..</h1> }
     {error && <h1>Something went wrong</h1> }
        { isSuccess && data.slice(0,7).map((product) => (
        <Card
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          category={product.category}
          ratings={product.rating}
        />
      ))}
        </Slider>
      </div>
    </>
  );
};

export default Featured;