import React from 'react';

interface ColorShadesProps {
  baseColor: string;
}

const ColorShades: React.FC<ColorShadesProps> = ({ baseColor }) => {
  const shades = [];

  // Convert the base color to an RGB value
  const hexToRgb = (hex: string): number[] => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };

  const baseRgb = hexToRgb(baseColor);

  // Calculate the increment between each shade
  const increment = Math.floor(baseRgb[0] / 10);

  // Generate 11 shades, from lightest to darkest
  for (let i = 0; i < 11; i++) {
    const r = baseRgb[0] - i * increment;
    const g = baseRgb[1] - i * increment;
    const b = baseRgb[2] - i * increment;
    const shade = `rgb(${r}, ${g}, ${b})`;
    shades.push(shade);
  }

  return (
    <div>
      {shades.map((shade, index) => (
        <div key={index} style={{ backgroundColor: shade, height: '50px', width: '50px' }} />
      ))}
    </div>
  );
};

export default ColorShades;