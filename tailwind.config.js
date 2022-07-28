module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scroll-behavior")(),
    // ...
  ],
};