"use client";
import React from "react";
import { useState } from "react";
import { FaServicestack } from "react-icons/fa";
import { genreCards, showMoreCards } from "../constants/resuable";
import Image from "next/image";

const style = {
  main_div: `xxs:px-[10px] sm:px-[50px] lg:px-[120px] py-[42px]`,
  title_div: `flex items-center pb-[18px]`,
  grid_dev: `grid grid-cols-4 sm:grid-cols-8 md:grid-cols-8 lg:gap-4 sm:gap-0 xxs:gap-0`,
  grid_card: `overflow-hidden lg:max-w-[100px] sm:max-w-[100px] xxs:max-w-[120px] h-auto max-h-max mx-[5px] cursor-pointer`,
  grid_img: `rounded-xl w-full xxs:h-[80px] sm:h-[70px] lg:h-[96px] border border-gray-300 hover:border-[#EC1066] object-fill `,
  grid_subdiv: `px-2 py-2 flex flex-col items-center text-center`,
  grid_p: `text-black font-normal xxs:text-[14px] sm:text-[12px] text-[16px]`,
  gird_h4: `xxs:text-[10px] text-[14px] text-gray-500`,
  show_btn: `border border-gray-500 mx-[10px] my-[10px] text-black font-light py-1 px-1 rounded-lg text-[12px]`,
  show_div: `grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-0 pt-4`,
  show_cardDiv: `overflow-hidden max-w-[180px] h-auto max-h-max mb-[10px] mx-2 border border-gray-300 rounded-xl cursor-pointer `,
  show_cardSubDiv: `px-2 py-2 flex flex-col items-center`,
  show_cardP: `text-black font-normal xxs:text-[14px] sm:text-[12px] text-[16px]`,
  show_cardH4: `xxs:text-[10px] text-[14px] text-gray-500`,
};

const Genre = () => {
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  };
  return (
    <div className={`${style.main_div}`}>
      <div className={`${style.title_div}`}>
        <div className="flex  ">
          <FaServicestack
            style={{ fontSize: "20px", color: "black", marginRight: "8px" }}
          />
        </div>
        <div className="flex font-bold xxs:text-[20px] ">
          BROWSE EVENTS BY GENRE
        </div>
      </div>

      <div className={`${style.grid_dev}`}>
        {genreCards.map((genre) => (
          <div key={genre.id} className={`${style.grid_card}`}>
            <Image
              className={`${style.grid_img}`}
              src={genre.img}
              alt="Your Image"
            />
            <div className={`${style.grid_subdiv}`}>
              <p className={`${style.grid_p}`}>
                {genre.eventTitle}
                <br />
              </p>
              <h4 className={`${style.gird_h4}`}>
                {" "}
                {genre.noOfEvents} events{" "}
              </h4>
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* SHOW MORE SECTION HERE */}
        <button onClick={handleClick} className={`${style.show_btn}`}>
          {showData ? "Show less" : "Show more"}
        </button>
        <div className={`${style.show_div}`}>
          {showData && (
            <>
              {showMoreCards.map((showCards) => (
                <div key={showCards.id} className={`${style.show_cardDiv}`}>
                  <div className={`${style.show_cardSubDiv}`}>
                    <p className={`${style.show_cardP}`}>
                      {showCards.eventTitle}
                      <br />
                    </p>
                    <h4 className={`${style.show_cardH4}`}>
                      {" "}
                      {showCards.noOfEvents} events{" "}
                    </h4>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Genre;
