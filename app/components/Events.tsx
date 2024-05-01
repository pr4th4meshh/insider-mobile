"use client";
import React from "react";
import { FaServicestack } from "react-icons/fa";
import { eventsThisWeek } from "../constants/resuable";

const Events = () => {
  return (
    <div className="xxs:pl-[10px] py-[20px]">
      <div className="flex items-center pb-[18px] ">
        <div className="flex  ">
          <FaServicestack
            style={{ fontSize: "20px", color: "black", marginRight: "8px" }}
          />
        </div>
        <div className="flex font-bold text-[20px] ">EVENTS THIS WEEK</div>
      </div>

      <div className="grid grid-cols-3 gap-0 pt-4 ">
        <>
          {eventsThisWeek.map((event) => (
            <div key={event.id} className="overflow-hidden max-w-[170px] h-auto max-h-max mb-[10px] mx-2 border border-gray-300 hover:border-[#EC1066] rounded-xl cursor-pointer ">
              <div className="px-4 py-2 flex flex-col items-start ">
                <p className="text-[#EC1066] font-bold xxs:text-[12px] sm:text-[22px] text-[16px]">
                  {event.dayOfTheEvent}
                  <br />
                </p>
                <h4 className="xxs:text-[12px] sm:text-[12px] lg:text-[16px] text-gray-500">
                  {" "}
                  {event.dateOfTheEvent}
                </h4>
              </div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default Events;
