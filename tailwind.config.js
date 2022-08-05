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
            '1-3_0-7fr': '1.3fr 0.7fr',
            '0.9-1.10fr': '0.9fr 1.10fr',

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
            'active-orange': "#FCE0CD",
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
            'white-menu-bg-h': 'rgba(255, 255, 255, 0.15)',
            'white-menu-bg-a': 'rgba(255, 255, 255, 0.4)',
        },
        screens:{
            'desktop': {'min': '1025px'},
            'tablet': {'min': '751px' ,'max': '1024px'},
            'mobile': {'min': '300px' ,'max': '750px'},
            'lg': '851px',
            'bp-footer': '1234px',
        },
        boxShadow:{
            'lang-box': '16px 16px 44px rgba(0, 0, 0, 0.25)',
            'card': '24px 33px 100px rgba(188, 121, 60, 0.1)',
            'card-hover': ' 24px 33px 100px rgba(188, 121, 60, 0.15)',
            'toolTip': '12px 12px 16px rgba(188, 121, 60, 0.03)',
            'styles-box-shadow': '24px 33px 100px rgba(188, 121, 60, 0.1)',
            'styles-box-shadow-h': '24px 33px 100px rgba(188, 121, 60, 0.15)',
        },
        width: {
            '378': '378px',
            '335': '335px',
            '1215px': '1215px',
            '548': '548px',
        },
        height:{
            '378': '378px',
            '335': '335px',
            '675': '675px',
            '748': '748px',
            '268': '268px',
            '460': '460px',
            '380': '380px',
            '200': '200px',
            '720': '720px',
            '700': '700px',
            '80': '80px',
            '800': '800px',


        },
        maxHeight:{
            '380': '378px',
            '675': '675px',
            '748': '748px',
            '480': '480px',
        },
        minHeight:{
            '48': '48px',
            '480': '480px',

        },
        margin:{
            '306': '306px',
            '218': '218px',
            '30': '30px',
            '470': '470px',
            '175': '170px',
            '325': '325px',

        },
        maxWidth:{
            '1215px': '1215px',
            '648px': '648px',
        },
        inset:{
            '9': '9rem',
        },



    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),

  ],
}
