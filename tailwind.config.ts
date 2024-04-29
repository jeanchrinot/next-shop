import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#9BD511",
          ".toaster-con": {
            "background-color": "white",
            color: "black",
          },
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#9BD511",
          ".toaster-con": {
            "background-color": "black",
            color: "white",
          },
        },
      },
    ],
  },
  darkMode: ["class", '["dark"]'],
  plugins: [require("daisyui")],
}
export default config
