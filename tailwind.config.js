/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			gradient_light: "#162149",
			gradient_dark: "#080A0D",

			custom_dark: "#1A202E",
			custom_blue: "#25495C",
			custom_blue_x: "	rgba(37,73,92,0.500)",
			custom_indigo: "#283669",
			custom_gray: "#D9D9D9",
			custom_dark_gray: "#747474",
			custom_steel_blue: "#2E8AA4",
		},
		extend: {
			screens: {
				"3xl": "2000px",
			},
		},
	},
	plugins: [],
};
