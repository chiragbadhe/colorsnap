import tinycolor from "tinycolor2";
import namer from "color-namer";

type Shades = {
  [key: string]: string;
};


type ColorData = {
  name: string;
  shades: Shades;
}

export function generateColorShades(hex: string): ColorData {
  const shades = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950",
  ];

  const lightestColor = tinycolor(hex).lighten(50).toHexString();
  const darkestColor = tinycolor(hex).darken(10).toHexString();

  const generatedShades: Shades = {};

  shades.forEach((shade, index) => {
    const ratio = index / (shades.length - 2);
    const interpolatedColor = tinycolor.mix(lightestColor, darkestColor, ratio * 100).toHexString();
    generatedShades[shade] = interpolatedColor;
  });

  const name = namer(hex).ntc[0].name;

  return {
    name,
    shades: generatedShades,
  };
}



  