// tailwind.config.ts
import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

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
			primary: {
				DEFAULT: '#1c1c22',
				light: '#f5f5f7'
			},
			secondary: {
				DEFAULT: '#ffffff',
				dark: '#e0e0e0',
				light: '#1c1c22'
			},
			accent:{
				DEFAULT: '#36affa',
				dark: '#0077cc',
				light: '#36affa'
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
  plugins: [tailwindAnimate],
} satisfies Config;
