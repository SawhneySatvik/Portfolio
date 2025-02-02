// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	container:{
		center: true,
		padding: '1rem',
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
	},
	fontFamily:{
		primary: ['var(--font-jetbrainsMono)', 'JetBrains Mono', 'monospace'],
	},
  	extend: {
  		colors: {
			primary: '#1c1c22',
			accent:{
				DEFAULT: '#36affa',
				dark: '#0077cc',
			}
  		},
		keyframes: {
			"accordian-down": {
				from: {height: "0"},
				to: {height: "var(--radix-accordion-content-height)"},
			},
			"accordian-up": {
				from: {height: "var(--radix-accordion-content-height)"},
				to: {height: "0"},
			},
		},
		animation:{
			"accordian-down": "accordian-down 0.5s ease-out",
			"accordian-up": "accordian-up 0.5s ease-out",
		},
  	},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
