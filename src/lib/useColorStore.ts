
import {create} from "zustand";

type ColorState = {
  colorData: ColorData | null;
  setColorData: (colorData: ColorData) => void;
};

type Shades = {
    [key: string]: string;
  };
  
  type ColorData = {
    name: string;
    shades: Shades;
  }
  

export const useColorStore = create<ColorState>((set) => ({
  colorData: null,
  setColorData: (colorData) => set({ colorData }),
}));



// import { create } from "zustand";
// import { generateColorShades } from "./generateColorShades";

// type ColorState = {
//   name: string;
//   shades: Shades;
//   generateColors: (hex: string) => void;
// };

// type Shades = {
//   [key: string]: string;
// };

// const useColorStore = create<ColorState>((set) => ({
//   name: "",
//   shades: {},
//   generateColors: (hex) => {
//     const colorData = generateColorShades(hex);
//     set({ name: colorData.name, shades: colorData.shades });
//   },
// }));

// export { useColorStore };
