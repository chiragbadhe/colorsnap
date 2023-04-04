/* eslint-disable @next/next/no-img-element */
import { useColorStore } from "@/lib/useColorStore";
import { Facebook, Dribbble, Instagram } from "lucide-react";
import React from "react";

type Props = {};

function RightCard({}: Props) {
  const { shades } = useColorStore();
  return (
    <div
      style={{ backgroundColor: shades[300] }}
      className="border bg-cyan-300 bg-opacity-40 rounded-[10px] h-[450px] overflow-hidden"
    >
      <div className=" flex items-center justify-center h-full flex flex-col space-y-[20px] ">
        <img
          className="h-[150px] rounded-full"
          src="https://www.nicesnippets.com/demo/following1.jpg"
          alt=""
        />
        <p className="text-[25px] font-bold opacity-80">Emily Parker</p>
        <div className="flex space-x-[10px]">
          <p
            style={{ backgroundColor: shades[200] }}
            className="h-[40px] w-[40px] rounded-full  bg-opacity-50 flex items-center justify-center"
          >
            <Facebook color={shades[700]} />
          </p>
          <p
            style={{ backgroundColor: shades[200] }}
            className="h-[40px] w-[40px] rounded-full  bg-opacity-50 flex items-center justify-center"
          >
            <Dribbble color={shades[700]} />
          </p>
          <p
            style={{ backgroundColor: shades[200] }}
            className="h-[40px] w-[40px] rounded-full  bg-opacity-50 flex items-center justify-center"
          >
            <Instagram color={shades[700]} />
          </p>
        </div>
        <div className="mt-7">
          <button
            style={{ backgroundColor: shades[700] }}
            className="px-[60px] text-white py-[7px] rounded-[6px] "
          >
            follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCard;
