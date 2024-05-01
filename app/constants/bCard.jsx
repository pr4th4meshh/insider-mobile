import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { FaHeart, FaServicestack } from 'react-icons/fa';

const style= {
    title_div: `flex flex-1 flex-row items-center pb-[18px]`,
    view_btn: `border border-black rounded-lg px-2 py-2 float-right `,
    card_div: `rounded overflow-hidden shadow-lg xxs:max-w-[320px] max-h-[500px] mx-[10px] relative`,
    card_img: `w-full h-[178px] dark-overlay`,
    card_subDiv: `text-black font-thin text-lg z-[2] `,
    card_subDivTwo: `flex items-center py-[10px] bg-[#ffeaf2]`,
  }

const Card = ({image,title,category,price}) => {
    return (
        
            <div className={`${style.card_div}`}>    
            <div>
            <Image className={`h-[230px] w-full`} height={200} width={300} src={image} alt="Your Image"/>
            </div>
             <div className="px-4 py-2 w-[320px] ">
               <div className={`${style.card_subDiv}`}> {title.substring(0, 28)} </div>
        <h4 className="text-[16px] text-[#EC1066] flex flex-row items-center " >People rate this &nbsp; <FaHeart/> &nbsp; 4.7 / 5</h4>

           <div className='flex flex-row px-2 py-2 items-center ' >
            <div className='flex-1' >
            <div className='flex flex-1 items-center text-[14px] font-semibold text-md ' >
       Rs: 899 /-
        </div>
            </div>
            <div className='flex-1' >
            <Link href='/' >  <button className=" bg-[#EC1066] hover:bg-[#b91453] text-white font-normal px-2 py-1 text-[14px] rounded-lg ml-[45px] ">
          Buy Now
        </button> </Link>
            </div>
           </div>
             </div>
             <div className={`${style.card_subDivTwo}`}>
                   <div className="flex"><FaHeart style={{fontSize:'12px', color: '#EC1066', marginRight:'8px', marginLeft: '18px'}}  /></div>
                   <div className="flex font-light text-[12px] text-[#ec1066] "> CONTENT &nbsp; <span>NEW</span> </div>
                  </div>
           </div>
    )
}

export default Card;