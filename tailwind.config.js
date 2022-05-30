module.exports = {
  content: [
    './resources/**/*.antlers.html',
    './resources/**/*.blade.php',
    './resources/**/*.vue',
    './content/**/*.md'
  ],
  important:true,
  theme: {
    extend: {
        gridTemplateColumns: {
            'auto-fit': 'repeat(auto-fit, minmax(170px, 1fr))',
            '1-2fr': '0.6fr 1.3fr',

        },
        fontFamily: {
            'sans': ['Alegreya', 'sans-serif'],
            'serif': ['Alegreya', 'serif'],
            'ale-sans': ['Alegreya Sans', 'sans-serif']
            },
        fontSize: {
            '28px': ['28px', '38px'],
            '16-24px': ['16px', '24px'],
            '16-20px': ['16px', '20px'],
            '18-24px': ['18px', '24px'],

        },
        letterSpacing: {
            '002em': '0.02em',
        },
        colors:{
            'orange': '#F2946B',
            'dark-orange': '#C6876C',
        },
        screens:{
            'xs': {'max': '850px'},
        }



    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
