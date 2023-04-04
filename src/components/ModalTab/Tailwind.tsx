import React, { useState } from "react";
import { useColorStore } from "@/lib/useColorStore";

type Props = {};

export default function Tailwind({}: Props) {
  const { name, shades } = useColorStore();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `'${name
        .toLowerCase()
        .replace(/[\W_]+/g, "-")
        .replace(/\s+/g, "-")}' : { ${Object.entries(shades)
        .map(([label, value]) => `'${label}': '${value}'`)
        .join(", ")} }`
    );
    setCopied(true);
  };

  return (
    <div>
      <div className="w-full h-full flex justify-between">
        <pre className="pl-5">
          {`'${name
            .toLowerCase()
            .replace(/[\W_]+/g, "-")
            .replace(/\s+/g, "-")}' : {\n  ${Object.entries(shades)
            .map(([label, value]) => `'${label}': '${value}'`)
            .join(",\n  ")}\n} `}
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
