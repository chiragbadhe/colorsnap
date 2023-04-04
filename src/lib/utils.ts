export const hslToHex = (hsl: { h: any; s: number; l: number }) => {
    let h = hsl.h;
    if (h === 360) h = 0;
    const s = parseFloat((hsl.s / 100).toFixed(2));
    const l = parseFloat((hsl.l / 100).toFixed(2));
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;
    if (0 <= h && h < 60) {
      (r = c), (g = x), (b = 0);
    } else if (60 <= h && h < 120) {
      (r = x), (g = c), (b = 0);
    } else if (120 <= h && h < 180) {
      (r = 0), (g = c), (b = x);
    } else if (180 <= h && h < 240) {
      (r = 0), (g = x), (b = c);
    } else if (240 <= h && h < 300) {
      (r = x), (g = 0), (b = c);
    } else if (300 <= h && h < 360) {
      (r = c), (g = 0), (b = x);
    }
    r = parseInt(
      Math.round((r + m) * 255)
        .toString(16)
        .padStart(2, "0"),
      16
    );
    g = parseInt(
      Math.round((g + m) * 255)
        .toString(16)
        .padStart(2, "0"),
      16
    );
    b = parseInt(
      Math.round((b + m) * 255)
        .toString(16)
        .padStart(2, "0"),
      16
    );
  
    return "#" + r + g + b;
  };
  


  export const hexToHSL = (hex: string) => {
    // Convert hex to RGB first
    let r = 0,
      g = 0,
      b = 0;
    if (hex.length === 4) {
      r = parseInt(hex[1] + hex[1], 16);
      g = parseInt(hex[2] + hex[2], 16);
      b = parseInt(hex[3] + hex[3], 16);
    } else if (hex.length === 7) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
    // Then to HSL
    (r /= 255), (g /= 255), (b /= 255);
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0,
      s = 0,
      l = 0;
    if (delta === 0) {
      h = 0;
    } else if (cmax === r) {
      h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
      h = (b - r) / delta + 2;
    } else {
      h = (r - g) / delta + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h, s, l };
  };


  export function generateColorShadess(hexCode: string): string[] {
    const hexToInt = (hex: string) => parseInt(hex, 16);
    const intToHex = (int: number) => int.toString(16).padStart(2, '0');
    
    // Convert the hex code to RGB values
    const r = hexToInt(hexCode.slice(1, 3));
    const g = hexToInt(hexCode.slice(3, 5));
    const b = hexToInt(hexCode.slice(5, 7));
    
    // Calculate the increment for each shade based on linear interpolation
    const incrementR = r / 11;
    const incrementG = g / 11;
    const incrementB = b / 11;
    
    // Generate the 11 shades using linear interpolation between white (#FFFFFF) and the specified hex code
    const shades = [];
    for (let i = 1; i <= 11; i++) {
      const shadeR = Math.round(255 - (incrementR * i));
      const shadeG = Math.round(255 - (incrementG * i));
      const shadeB = Math.round(255 - (incrementB * i));
      const shadeHex = `#${intToHex(shadeR)}${intToHex(shadeG)}${intToHex(shadeB)}`;
      shades.push(shadeHex);
    }
    
    return shades;
  }

  
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



  