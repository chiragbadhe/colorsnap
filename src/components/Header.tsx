/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Twitter } from "lucide-react";
import { useColorStore } from "@/lib/useColorStore";

type Props = {};

function Header({}: Props) {
  const { shades } = useColorStore();
  const [url, setUrl] = useState("");

  function handleClick() {
    const tweetText =
      "Just discovered the Tailwind Shades Generator and I'm in love! It's such an easy way to create beautiful color palettes for my projects. \n \nCheck it out here: colorsnap-ch1rag.vercel.app \n \n  #tailwindcss #webdesign";
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    setUrl(twitterUrl);
  }

  const hover = `[${shades[900]}]`;
  return (
    <div className="border border-b border-black/10">
      <div className="container mx-auto h-14 items-center flex justify-between">
        <div className="flex items-center space-x-3">
          <p className="font-bold text-20 -mt-2">
            colorsnap{" "}
            <span style={{ color: shades[700] }} className="text-3xl">
              .
            </span>
          </p>
          {/* <p className="text-black/50 text-sm">@ch1rag</p> */}
        </div>
        <div>
          <a
            href={url}
            target="_blank"
            className={`flex space-x-1 items-center hover:${hover} duration-300 transition cursor-pointer`}
            onClick={handleClick}
          >
            <Twitter size={20} />
            <span>Share on Twitter</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
