import React from 'react';
import { FaHeart, FaVideo } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const style = {
  card_div: `rounded overflow-hidden relative shadow-lg max-w-[200px] max-h-[500px] mx-[10px]`,
  card_divTwo: `text-black font-light text-lg mb-0 z-[2]`,
  card_divThree: `px-4 pt-0 pb-2 w-[240px] flex flex-row`,
  card_divFour: `flex items-center text-center py-[6px] bg-[#ffeaf2]`,
}

const Card = ({image,title,category,price, ratings}) => {
  const rate = ratings?.rate; 
  return (
    
       <div className={`${style.card_div}`}>
      <div className='' >
        <Image alt={title} height={230} width={240} className='h-[190px] w-[200px]' src={image}/>
      </div>

      <div className="px-4 py-2 w-[240px] ">
        <div className={`${style.card_divTwo}`}> {title.substring(0,20)} </div>
        {/* <p className="text-gray-700 text-[14px] hidden ">
          Movie in demand. <br />
          <a href="price" className="font-semibold" >Rs: {price}</a>
        </p> */}
        <h4 className="text-[12px] text-[#EC1066] flex flex-row items-center " >People rate this &nbsp; <FaHeart/> &nbsp; 4.7 / 5</h4>

      </div>
      <div className={`${style.card_divThree}`}>
      <div className='flex flex-1 items-center text-[14px] font-semibold text-md ' >
       Rs: 899 /-
        </div>
     <div className="flex flex-1">
     <Link href='/events/golmaal' >  <button className=" bg-[#EC1066] hover:bg-[#b91453] text-white font-normal px-2 py-1 text-[14px] rounded-lg">
          Buy Now
        </button> </Link>
     </div>
      </div>

      <div className={`${style.card_divFour}`}>
        <div className="flex">
          <FaVideo
            style={{
              fontSize: "12px",
              color: "#EC1066",
              marginRight: "8px",
              marginLeft: "18px",
            }}
          />
        </div>
        <h1 className="flex font-light text-[12px] text-[#ec1066] ">
          {" "}
          CONTENT &nbsp; <span>NEW</span>{" "}
        </h1>
      </div>
    </div>
  );
};

export default Card;