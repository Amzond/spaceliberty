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
            'sans2': ['Alegreya', 'sans'],
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
            '38-51px': ['38px', '51px'],
            '20-28px': ['20px', '28px'],
            '14-17px': ['14px', '17px'],


        },
        letterSpacing: {
            '002em': '0.02em',
            '006em': '0.06em',
            '003em': '0.03em',
        },
        colors:{
            'orange': '#F2946B',
            'dark-orange': '#C6876C',
            'lang-bg': 'rgba(0, 0, 0, 0.02)',
            'lang-bg-h': 'rgba(242, 148, 107, 0.05)',
            'lang-bg-a': 'rgba(198, 135, 108, 0.1)',
            'cover-bg': 'rgba(0, 0, 0, 0.5)',
            'grey-card': 'rgba(194, 194, 194, 1)',
            'clicked-card-bg': '#FFFDFB',
            'toolTip-bg': 'rgba(0, 0, 0, 0.02)',
            'post-share': 'rgba(0, 0, 0, 0.02)',
            'cta-bg': '#F4EFEF',
            'warm-grey': '#F5F4F2',
        },
        screens:{
            'xs': {'max': '1235px'},
            'lg': '851px',
            'bp-footer': '1234px',
        },
        boxShadow:{
            'lang-box': '16px 16px 44px rgba(0, 0, 0, 0.25)',
            'card': '24px 33px 100px rgba(188, 121, 60, 0.1)',
            'card-hover': ' 24px 33px 100px rgba(188, 121, 60, 0.15)',
            'toolTip': '12px 12px 16px rgba(188, 121, 60, 0.03)',

        },
        width: {
            '378': '378px',
            '335': '335px',
            '1215px': '1215px',
        },
        height:{
            '378': '378px',
            '335': '335px',
        },
        maxHeight:{
            '380': '378px',
            '675': '675px',
            '748': '748px',
        },
        minHeight:{
            '48': '48px',

        },
        margin:{
            '306': '306px',
            '218': '218px',
            '30': '30px',
            '467': '467px',
            '175': '175px',

        },
        maxWidth:{
            '1215px': '1215px',
            '648px': '648px',
        },



    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),

  ],
}
