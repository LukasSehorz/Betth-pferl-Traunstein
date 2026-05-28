/** @type {import('tailwindcss').Config} */
import relumePreset from "@relume_io/relume-tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "./startseite/**/*.{js,jsx}",
    "./shared/**/*.{js,jsx}",
    "./damen/**/*.{js,jsx}",
    "./herren/**/*.{js,jsx}",
    "./nachtwäsche/**/*.{js,jsx}",
    "./unterwäsche/**/*.{js,jsx}",
    "./dessous-&-lingerie/**/*.{js,jsx}",
    "./italienische-mode/**/*.{js,jsx}",
    "./bademode/**/*.{js,jsx}",
    "./looks/**/*.{js,jsx}",
    "./produkt/**/*.{js,jsx}",
    "./boutique/**/*.{js,jsx}",
    "./marken/**/*.{js,jsx}",
    "./journal/**/*.{js,jsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,jsx}",
  ],
  presets: [relumePreset],
  theme: {
    extend: {},
  },
  plugins: [],
};
