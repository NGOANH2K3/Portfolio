// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './modules/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '600px',
            md: '728px',
            lg: '1024px',
            xl: '1240px',
            '2xl': '1536px',
            '3xl': '2160px',
            '4xl': '3024px',
          },
          container: {
            center: true,
            padding: {
              DEFAULT: '1rem',
              sm: '2rem',
              lg: '4rem',
              xl: '5rem',
              '2xl': '6rem',
            },
          },
          
      
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        title: ['DM Sans', 'sans-serif'],
      },
      extend: {
        colors: {
          background: '#151b21',
          background2: '#13161c',
          light: '#EEEEEE',
          light2: '#adb0b1',
          primary: '#4F43F5',
          primary2: '#504B9B',
          dark1: '#393E46',
          dark2: '#2D3137',
        },
        aspectRatio: {
          '5/6': '5/6',
          '4/3': '4/3',
          '3/4': '3/4',
          '3/2': '3/2',
          '6/5': '6/5',
        },
      },
    
    
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        plugins: [require('@tailwindcss/forms')],
  }
}
  