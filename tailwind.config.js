/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      "general": "#292738",
      "secondary": "#3C3955",
      "active": "#00FF66",
      "white": "#FFFFFF",
      "grey": "#BDBDBD",
      "google": "#DB4437",
    },
    borderRadius: {
      "default": "32px"
    },
    fontWeight: {
      "rg": "400",
      "sb": "500",
      "b": "600"
    },
    margin: {
      "s": "10px",
      "rg": "15px",
      "b": "20px"
    },
    padding: {
      "s": "10px",
      "rg": "15px",
      "b": "20px"
    },
    
  }
}
