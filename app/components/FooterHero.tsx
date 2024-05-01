'use client'
import React from 'react'
import { footerHero} from '../constants/resuable'


const FooterHero = () => {
  return (
    <div className="xxs:px-[10px] sm:px-[50px] lg:px-[120px] py-[42px]">
        <div className="grid grid-cols-1 lg:gap-4 sm:gap-0 xxs:gap-0 pb-12">
  {footerHero.map((foot) => (
     <div key={foot.id} className="overflow-hidden lg:max-w-auto sm:max-w-auto xxs:max-w-auto h-auto max-h-max mx-[5px] cursor-pointer xxs:pb-6 ">
      <h4 className=" xxs:text-[14px] text-[10px] text-gray-500 cursor-pointer" > {foot.title} </h4>
        <p className="text-gray-500 font-normal xxs:text-[14px] sm:text-[10px] text-[10px]">
         {foot.content}<br />
        </p>
    </div>
  ))}

</div>
    </div>
  )
}

export default FooterHero