import React, { useState } from "react";
import { useColorStore } from "@/lib/useColorStore";

type Props = {};

export default function Css({}: Props) {
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
      <div className="w-full h-full flex justify-between">
        <pre className="">
          {`${Object.entries(shades)
            .map(
              ([label, value]) =>
                `--${name
                  .toLowerCase()
                  .replace(/[\W_]+/g, "-")
                  .replace(/\s+/g, "-")}-${label}: ${value};`
            )
            .join("\n")}`}
        </pre>

        <div>
          <button
            className="bg-gray-700 text-sm rounded p-2"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
    </div>
  );
}
