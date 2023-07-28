/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    /*
    extend: {
      colors: {
          'yellowColor': '#FFECB3'
      }

    },*/
    
    screens:{ 
      "short" : '400px',
      'mobile' : '640px',
      'tablet' : '768px',
      'laptop' : '1024px'

    }
  
  },
  plugins: [],
}

