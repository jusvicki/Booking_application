import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lexend"', "sans-serif"],
      },
      colors: {
        primary: {
          bg: "#EDB046",
          gray: "#B5B5B5",
          DEFAULT: "#BA5112",
        },
        backgroundImage: {
          "bg-mobile": "url('/auth-bg-mobile.png')",
          "footer-texture": "url('/img/footer-texture.png')",
        },
        secondary: "#251814",
      },
      content: {
        "add-icon": "url('/add-icon.png')",
        "logout-icon": "url('/logout-icon.svg')",
      },
    },

    screens: {
      md: "950px",
      tablet: "650px",
      sm: "500px",
      mobile: "320px",
    },
  },
  plugins: [],
};
export default config;
