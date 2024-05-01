'use client';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FaServicestack} from 'react-icons/fa'
import { featuredCards } from '../constants/resuable'
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Card from "../constants/bCard";
import { useGetWomensClothingQuery } from "../services/storeApi";

const style= {
  main_div: `xxs:pl-[10px] py-[42px] `,
  title_div: `flex flex-[1.3] flex-row items-center pb-[18px]`,
  view_btn: `border border-gray-500 rounded-sm px-1 py-1 float-right `,
  card_div: `rounded overflow-hidden shadow-lg xxs:max-w-[240px] sm:max-w-[260px] lg:max-w-[335px] max-h-[500px] mx-[10px] relative`,
  card_img: `w-full h-[250px] dark-overlay`,
  card_subDiv: `text-white font-bold text-xl mb-2 absolute bottom-[200px] z-[2] `,
  card_btn: `bg-[#EC1066] hover:bg-[#b91453] text-white font-bold py-2 px-2 rounded`,
  card_subDivTwo: `flex items-center pt-[12px] pb-[4px] bg-[#ffeaf2]`,

}

const Theatre = () => {
  const { data, isLoading, error, isSuccess } = useGetWomensClothingQuery();
  const settings = {
      infinite:false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      prevArrow:  <AiFillCaretLeft color="#b91453" />,
    nextArrow: <AiFillCaretRight color="#b91453" />,
        swipeToSlide: true,        
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1.2,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows:false,
          }
        },
        {
          breakpoint: 340,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  };
  return (
    <>
         <div className={`${style.main_div}`} >
        <div className="flex" >
        <div className={`${style.title_div}`}>
        <div className="flex  "><FaServicestack style={{fontSize:'20px', color: 'black', marginRight:'8px'}}  /></div>
        <div className="flex font-bold xxs:text-[20px]">THEATRE & ARTS</div>
       </div>
       <div className="flex-[0.7] pr-[10px] " >
       <button className="border border-gray-500 px-2 py-1 float-right rounded-lg text-[10px] " >View All</button>
       </div>
        </div>
        <Slider {...settings}>
        {isLoading  && <h1 className="text-center text-2xl" >Loading..</h1> }
     {error && <h1>Something went wrong</h1> }
        { isSuccess && data.slice(0,7).map((product) => (
         <Card
         key={product.id}
         image={product.image}
         title={product.title}
         price={product.price}
         category={product.category}
       />
      ))}
        </Slider>
      </div>
    </>
  );
};

export default Theatre;