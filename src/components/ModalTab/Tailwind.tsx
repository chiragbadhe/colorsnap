import React from "react";
import { useColorStore } from "@/lib/useColorStore";

type Props = {};

export default function Tailwind({}: Props) {
  const { colorData } = useColorStore();

  console.log(colorData?.name)

  return (
    <div>
      <div className="w-full h-full "></div>
    </div>
  );
}
