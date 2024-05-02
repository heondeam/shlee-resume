import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      darkNavy: "#020c1b",
      navy: "#0a192f",
      lightNavy: "#112240",
      lightestNavy: "#233554",
      navyShadow: "rgba(2, 12, 27, 0.7)",
      darkSlate: "#495670",
      slate: "#8892b0",
      lightSlate: "#a8b2d1",
      lightestSlate: "#ccd6f6",
      white: "#e6f1ff",
      green: "#64ffda",
      greenTint: "rgba(100,255,218,0,1)",
      pink: "#f57dff",
      blue: "#57cbff",
    },
    borderRadius: {
      md: "4px",
    },
  },
  plugins: [],
};
export default config;
