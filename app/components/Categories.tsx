import React from "react";
import catOne from '../../public/images/wrks.png'
import catTwo from '../../public/images/two.png'
import catThree from '../../public/images/three.png'
import catFour from '../../public/images/four.png'
import catFive from '../../public/images/five.png'
import Image from "next/image";
import { FaSearchLocation } from "react-icons/fa";

const style = {
  col__img: `w-full h-30 rounded-xl object-contain pointer`,
  main_div: `xl:max-w-[1280px] w-full xxs:px-[10px]`,
  sub_div: `grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4`,
  h1: `font-bold xxs:text-[20px] `,
  p: `xxs:text-[15px]`
}

const Categories = () => {
  return (
    <div className={`${style.main_div}`}>
      <div className="pb-[24px]" >
        <h1 className={`${style.h1}`} >FIND NEW EXPERIENCES</h1>
        <p className={`${style.p}`} >Step out or stay in. Make a plan!</p>
      </div>
      <div >
      <div className={`${style.sub_div}`}>
  <div className="col cursor-pointer">
    <Image src={catOne} alt="Image 1" className={`${style.col__img}`}  />
  </div>
  <div className="col cursor-pointer">
    <Image src={catTwo} alt="Image 2" className={`${style.col__img}`} />
  </div>
  <div className="col cursor-pointer">
    <Image src={catThree} alt="Image 3" className={`${style.col__img}`}  />
  </div>
  <div className="col cursor-pointer">
    <Image src={catFour} alt="Image 4" className={`${style.col__img}`}  />
  </div>
  <div className="col cursor-pointer">
    <Image src={catFive} alt="Image 5" className={`${style.col__img}`}  />
  </div>
</div>
      </div>
    </div>
  );
};

export default Categories;
