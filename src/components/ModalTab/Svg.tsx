import React, { useState } from "react";
import { useColorStore } from "@/lib/useColorStore";

type Props = {};

export default function Svg({}: Props) {
  const { name, shades } = useColorStore();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `${Object.entries(shades)
        .map(
          ([label, value]) =>
            `--${name
              .toLowerCase()
              .replace(/[\W_]+/g, "-")
              .replace(/\s+/g, "-")}-${label}: ${value};`
        )
        .join("\n")}`
    );
    setCopied(true);
  };

  return (
    <div>
      <div className="w-full h-full flex justify-between overflow-x-scroll">
        <pre className="">
          {`<svg width="1100" height="100" viewBox="0 0 1100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    ${Object.entries(shades)
      .map(
        ([label, value]) =>
          `\n  <rect width="100" height="100" fill="${value}" x="${
            parseInt(label) * 100
          }" y="0" />`
      )
      .join("")}
</svg>
  `}
        </pre>

        <div>
          <button
            className="bg-gray-300 text-sm rounded p-2"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
