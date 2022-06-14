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
            'ale-sans': ['Alegreya Sans', 'sans-serif'],
            'playfair':['Playfair Display', 'serif'],
            },
        fontSize: {
            '28px': ['28px', '38px'],
            '16-24px': ['16px', '24px'],
            '16-20px': ['16px', '20px'],
            '16-22px': ['16px', '22px'],
            '18-24px': ['18px', '24px'],
            '28-37px': ['28px', '37px'],
            '14-19px': ['14px', '19px'],
            '12-14px': ['12px', '14px'],

        },
        letterSpacing: {
            '002em': '0.02em',
            '006em': '0.06em',
        },
        colors:{
            'orange': '#F2946B',
            'dark-orange': '#C6876C',
            'lang-bg': 'rgba(0, 0, 0, 0.02)',
            'lang-bg-h': 'rgba(242, 148, 107, 0.05)',
            'lang-bg-a': 'rgba(198, 135, 108, 0.1)',
            'cover-bg': 'rgba(0, 0, 0, 0.5)',
        },
        screens:{
            'xs': {'max': '1280px'},
            'lg': '851px',
            'bp-footer': '1280px',
        },
        boxShadow:{
            'lang-box': '16px 16px 44px rgba(0, 0, 0, 0.25)',
        },
        width: {
            '378': '378px',
            '335': '335px',
        },
        height:{
            '378': '378px',
            '335': '335px',
        },
        maxHeight:{
            '378': '378px',
        },
        minHeight:{
            '48': '48px',
        },



    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
