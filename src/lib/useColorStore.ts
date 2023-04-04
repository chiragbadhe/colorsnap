
import { create } from "zustand";
import { generateColorShades } from "@/lib/utils";

type ColorState = {
  name: string;
  shades: Shades;
  generateColors: (hex: string) => void;
};

type Shades = {
  [key: string]: string;
};

const useColorStore = create<ColorState>((set) => ({
  name: "",
  shades: {},
  generateColors: (hex) => {
    const colorData = generateColorShades(hex);
    set({ name: colorData.name, shades: colorData.shades });
  },
}));

export { useColorStore };
