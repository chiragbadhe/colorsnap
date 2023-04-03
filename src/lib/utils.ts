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


export const generateColorShades = (baseColor: string): ColorShades => {
  // Convert the base color to an RGB value
  const hexToRgb = (hex: string): number[] => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };

  const rgbToHex = (rgb: number[]): string => {
    const hex = rgb.map((color) => {
      const hexColor = color.toString(16);
      return hexColor.length === 1 ? `0${hexColor}` : hexColor;
    });
    return `#${hex.join('')}`;
  };

  const baseRgb = hexToRgb(baseColor);

  // Calculate the difference between each shade
  const difference = Math.floor(baseRgb[0] / 11);

  // Generate 11 shades, from lightest to darkest
  const shades: ColorShades = {
    shade1: rgbToHex([baseRgb[0], baseRgb[1] - difference * 5, baseRgb[2] + difference * 5]),
    shade2: rgbToHex([baseRgb[0], baseRgb[1] - difference * 4, baseRgb[2] + difference * 4]),
    shade3: rgbToHex([baseRgb[0], baseRgb[1] - difference * 3, baseRgb[2] + difference * 3]),
    shade4: rgbToHex([baseRgb[0], baseRgb[1] - difference * 2, baseRgb[2] + difference * 2]),
    shade5: rgbToHex([baseRgb[0], baseRgb[1] - difference, baseRgb[2] + difference]),
    shade6: baseColor,
    shade7: rgbToHex([baseRgb[0] - difference, baseRgb[1] + difference, baseRgb[2] + difference]),
    shade8: rgbToHex([baseRgb[0] - difference * 2, baseRgb[1] + difference * 2, baseRgb[2] + difference * 2]),
    shade9: rgbToHex([baseRgb[0] - difference * 3, baseRgb[1] + difference * 3, baseRgb[2] + difference * 3]),
    shade10: rgbToHex([baseRgb[0] - difference * 4, baseRgb[1] + difference * 4, baseRgb[2] + difference * 4]),
    shade11: rgbToHex([baseRgb[0] - difference * 5, baseRgb[1] + difference * 5, baseRgb[2] + difference * 5]),
  };

  return shades;
};


