/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      fontFamily: {
        rubikMono: ["Rubik Mono One", "monospace"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
      },
      colors: {
        primary: "#131424",
        blue: "#081424",
        richBlack: "#020D19",
        secondary: "#393A47",
        accent: "#F13024",
        green: "#43b282",
        greent: "#328561",
        blurGreen: "#43b2821a",
      },
    },
  },
  plugins: [],
};
