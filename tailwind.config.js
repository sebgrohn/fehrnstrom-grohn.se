// https://tailwindcss.com/docs/customizing-colors
// https://palettte.app/
const colorPalettes = [
  {
    paletteName: "blue",
    swatches: [
      { name: "50", color: "EFF6FF" },
      { name: "100", color: "DBEAFE" },
      { name: "200", color: "BFDBFE" },
      { name: "300", color: "93C5FD" },
      { name: "400", color: "60A5FA" },
      { name: "500", color: "3B82F6" },
      { name: "600", color: "2563EB" },
      { name: "700", color: "1D4ED8" },
      { name: "800", color: "1E40AF" },
      { name: "900", color: "1E3A8A" },
      { name: "950", color: "0E1C41" },
      { name: "975", color: "070D1F" },
      { name: "990", color: "03050C" },
    ],
  },
  {
    paletteName: "teal",
    swatches: [
      { name: "50", color: "F0FDFA" },
      { name: "100", color: "CCFBF1" },
      { name: "200", color: "99F6E4" },
      { name: "300", color: "5EEAD4" },
      { name: "400", color: "2DD4BF" },
      { name: "500", color: "14B8A6" },
      { name: "600", color: "0D9488" },
      { name: "700", color: "0F766E" },
      { name: "800", color: "115E59" },
      { name: "900", color: "134E4A" },
      { name: "950", color: "0A2A28" },
      { name: "975", color: "051514" },
      { name: "990", color: "020A09" },
    ],
  },
];

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: Object.fromEntries(
        colorPalettes.map(({ paletteName, swatches }) => [
          paletteName,
          Object.fromEntries(
            swatches.map(({ name, color }) => [name, `#${color}`])
          ),
        ])
      ),
    },
  },
  plugins: [],
};
