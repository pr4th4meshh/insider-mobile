"use client";
import React, { CSSProperties, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeart, FaServicestack } from "react-icons/fa";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import {IoIosArrowBack} from 'react-icons/io'
import Card from "@/app/constants/sCard";
import { useProductsQuery } from "@/app/services/storeApi";
import Image from "next/image";
import heroImage from '../../../public/images/carouselTwo.png'
import eventImage from '../../../public/images/event.jpg'
import { artistsCards } from "@/app/constants/resuable";
import { useRouter } from "next/navigation";

const style = {
  main_div: `xxs:pl-[15px]`,
};

const Featured = () => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };
  const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();
  const settingsA = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <AiFillCaretLeft color="#b91453" />,
    nextArrow: <AiFillCaretRight color="#b91453" />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1,
          initialSlide: 0,
          arrows:false,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingsB = {
    dots: true,
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
   <div className={`${style.main_div} px-[15px] xxs:text-black sm:text-white xxs:py-[10px] sm:py-[40px] sm:csz xxs:bg-none sm:bg-[url('/images/event.jpg')] bg-cover flex sm:flex-row xxs:flex-col`}>
     <div className="flex flex-1 flex-col">
    <div>
   <div className="flex flex-row text-center items-center pb-[10px] sm:z-[2] text-[#EC1066] " >
  <span> <IoIosArrowBack style={{fontSize: '16px'}}/> </span>
   <span className="cursor-pointer xxs:text-[16px] sm:text-[23px] text-center items-center" onClick={handleClick} > Go Back</span> 
   </div>
    </div>
       <Image
         src={eventImage}
         height={500}
         width={600}
         className="sm:h-[400px] xxs:h-[250px]"
         alt={""}
       />
     </div>
     <div className="flex flex-1 flex-col xxs:pt-[28px] sm:pt-[100px] xxs:pl-0 sm:pl-[60px] xxs:text-lg sm:text-xl sm:z-[2] xxs:flex-wrap">
       <h1 className=" text-pink-700 pb-4 xxs:text-[32px] sm:text-[42px] ">Event Title</h1>
       <h1 className="flex flex-row items-center">
         <FaHeart style={{ color: "red", marginRight: "10px" }} /> 4 / 5
       </h1>
       <h1 className="text-pink-700 max-w-max xxs:pb-2 sm:b-4 cursor-pointer ">
         Add your reviews and ratings..
       </h1>
       <h1 className="xxs:pb-1 sm:pb-2">2D,ICE 3D,IMAX 3D,4DX 3D ,3D</h1>
       <h1 className="xxs:pb-1 sm:pb-2">Languages: Hindi</h1>
       <h1 className="xxs:pb-1 sm:pb-4">
         2h 34m - Action, Drama, Thriller - UA - 30th March, 2023
       </h1>
       <button className="xxs:p-2 sm:p-4 bg-pink-700 sm:max-w-max text-white rounded-lg mb-4 ">
         Book Tickets
       </button>
     </div>
   </div>
   {/* More about the event  */}
   <div className={`${style.main_div} pt-[50px] `}>
     <div className="flex flex-col pb-[30px] ">
       <h1 className="text-3xl">More about the event:</h1>
       <p className=" xxs:text-md sm:text-xl" >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
         impedit dolores provident non earum nam porro vero explicabo
         voluptatibus placeat architecto eum, illum ipsa eos ipsam in hic
         quidem pariatur.
       </p>
     </div>
     {/* CAST OF THE EVENT */}
     <h1 className="text-3xl pb-[10px]" >Cast of the event:</h1>
     <Slider {...settingsA}>

     {artistsCards.map((artist) => (
  <div className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] cursor-pointer  ">    
   <div className="px-2 py-2 flex flex-col items-center text-center ">
   <Image src={artist.img} className='lg:h-[140px] lg:w-[140px] sm:h-[130px] sm:w-[130px] xxs:h-[90px] xxs:w-[90px] mb-2 rounded-full' alt="" />
     <p className="text-black font-normal xxs:text-[12px] sm:text-[14px] lg:text-[16px] text-[16px]">
      {artist.name}<br />
     </p>
     <h4 className="xxs:text-[12px] text-[14px] text-gray-500" > {artist.events} events </h4>
   </div>
 </div>
))}
     </Slider>
     {/* CREW OF THE EVENT */}
     <h1 className="text-3xl pt-[20px] pb-[10px]" >Crew of the event:</h1>
     <Slider {...settingsA}>

     {artistsCards.map((artist) => (
  <div className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] cursor-pointer  ">    
   <div className="px-2 py-2 flex flex-col items-center text-center ">
   <Image src={artist.img} className='lg:h-[140px] lg:w-[140px] sm:h-[130px] sm:w-[130px] xxs:h-[90px] xxs:w-[90px] mb-2 rounded-full' alt="" />
     <p className="text-black font-normal xxs:text-[12px] sm:text-[14px] lg:text-[16px] text-[16px]">
      {artist.name}<br />
     </p>
     <h4 className="xxs:text-[12px] text-[14px] text-gray-500" > {artist.events} events </h4>
   </div>
 </div>
))}
     </Slider>

     {/* FEATURED EVENTS CAROUSEL HERE  */}
     <h1 className="text-3xl pt-[50px] pb-[30px]">More events to look for:</h1>
     <Slider {...settingsB}>
        {isLoading  && <h1 className="text-center text-2xl" >Loading..</h1> }
     {error && <h1>Something went wrong</h1> }
        { isSuccess && data.slice(0,7).map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          price={card.price}
          category={card.category}
          ratings={card.rating}
        />
      ))}
        </Slider>
        <br />
        <br />
        <br />
   </div>
 </>
  );
};

export default Featured;