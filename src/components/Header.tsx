import React from "react";
import { Twitter } from "lucide-react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="border bordr-b borderblack/10">
      <div className="container mx-auto h-14 items-center flex justify-between">
        <div className="flex items-center space-x-3">
          <p className="font-bold text-[20px] -mt-2">
            colorsnap <span className="text-3xl text-cyan-500">.</span>
          </p>
          {/* <p className="text-black/50 text-sm">@ch1rag</p> */}
        </div>
        <div>
          <p className="flex space-x-1 items-center">
            <Twitter  size={20} />
            <span>share on twitter</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
