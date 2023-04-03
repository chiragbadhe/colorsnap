import { generateColorShades, hexToHSL, hslToHex } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import FollowCard from "./cards/FollowCard";
import AppCard from "./cards/AppCard";
import AtmCard from "./cards/AtmCard";
import toast, { Toaster } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {};

function Hero({}: Props) {
  const [color, setColor] = useState("#000000");
  const [hsl, setHSL] = useState({ h: 0, s: 0, l: 0 });
  const [shade, setShade] = useState(generateColorShades("000000"));

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    setColor(newColor);
    const hslColor = hexToHSL(newColor);
    setHSL(hslColor);
    const newShades = generateColorShades(newColor);
    setShade(newShades);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === "color-text") {
      const newColor = e.target.value;
      setColor(newColor);
      const hslColor = hexToHSL(newColor);
      setHSL(hslColor);
      const newShades = generateColorShades(newColor);
      setShade(newShades);
    } else {
      setHSL({ ...hsl, [e.target.id]: parseInt(e.target.value) });
      const hexColor = hslToHex({
        ...hsl,
        [e.target.id]: parseInt(e.target.value),
      });
      setColor(hexColor);
    }
  };

  return (
    <main className="container mx-auto border-l border-r border-black/10 min-h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <section className="p-11 py-16 border-b">
        <div>
          <p className="font-bold text-4xl opacity-80">
            tailwind shade generator
          </p>
          <p className="w-1/3 mt-3 opacity-60">
            craft your own color palette: mix and match hexcodes, tweak HSL
            values, or press enter for a fresh color!
          </p>
        </div>
        <div className="flex space-x-4 mt-4">
          <div className="flex py-[12px]">
            <div className="flex border px-3.5 py-2.5">
              <input
                className="focus:outline-none text-black/50 "
                type="text"
                id="color-text"
                name="color-text"
                value={color}
                onChange={handleTextChange}
              />
            </div>
            <div className="border flex items-center px-3.5">
              <input
                type="color"
                id="color-picker"
                name="color-picker"
                value={color}
                onChange={handleColorChange}
                className="rounded-full appearance-none border-none bg-transparent"
                style={{ padding: 0, width: "1.6rem", height: "1.6rem" }}
              />
            </div>
          </div>

          <div className="flex py-[12px]">
            <div className="flex border px-3.5 py-2.5 border-r text-black/50 ">
              <form className="w-full flex">
                <div className="flex space-x-3">
                  <p>H</p>
                  <input
                    type="number"
                    id="h"
                    name="hue-input"
                    placeholder="H"
                    className="focus:outline-none  mr-1"
                    value={hsl.h.toFixed()}
                    onChange={handleTextChange}
                    min={0}
                    max={360}
                  />
                </div>
              </form>
            </div>
            <div className="flex border px-3.5 py-2.5 border-r">
              <form className="w-full flex">
                <div className="flex space-x-3 text-black/50 ">
                  <p>S</p>
                  <input
                    type="number"
                    id="s"
                    name="saturation-input"
                    placeholder="S"
                    className="focus:outline-none mr-1"
                    value={hsl.s.toFixed()}
                    onChange={handleTextChange}
                    min={0}
                    max={100}
                  />
                </div>
              </form>
            </div>
            <div className="flex border px-3.5 py-2.5 text-black/50 ">
              <form className="w-full flex">
                <div className="flex space-x-3">
                  <p>L</p>
                  <input
                    type="number"
                    id="l"
                    name="lightness-input"
                    placeholder="L"
                    className="focus:outline-none "
                    value={hsl.l.toFixed()}
                    onChange={handleTextChange}
                    min={0}
                    max={100}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="px-11 py-11 border-b">
        <div className="flex justify-between">
          <p>color name</p>
          <div className="flex">
            <p>export</p>
          </div>
        </div>

        <div className="flex justify-center grid grid-cols-11 gap-3 mt-5">
          {Object.values(shade).map((shadeValue, index) => {
            const hex = `${shadeValue}`;

            return (
              <CopyToClipboard
                text={hex}
                key={index}
                onCopy={() =>
                  toast(`${hex.toUpperCase()} copied to clipboard !`)
                }
              >
                <div
                  key={index}
                  style={{ backgroundColor: `${shadeValue}` }}
                  className="h-40 rounded-md flex justify-center items-end border"
                >
                  <div className="flex flex-col items-center mb-4">
                    <p className="text-md">{50 * index * 2}</p>
                    <p className="text-sm">{hex}</p>
                  </div>
                </div>
              </CopyToClipboard>
            );
          })}
        </div>
      </section>

      <section className="py-11 px-11">
        <div className="grid grid-cols-4 gap-5">
          <div className="border rounded-[10px] h-[450px]"></div>
          <div className="border rounded-[10px] h-[450px] col-span-2"></div>
          {/* <div className="border rounded-[10px] h-[450px]"></div> */}
          <div className="border rounded-[10px] h-[450px]"></div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
