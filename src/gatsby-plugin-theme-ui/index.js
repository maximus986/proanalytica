export default {
  initialColorModeName: 'light',
  useBodyStyles: true,
  colors: {
    text: '#656565',
    primary: '#006877',
    primaryDarker: '#e06908',
    secondary: '#212121',
    background: '#fff',
    mainDark: '#323232',
    white: '#fff',
    grey: '#d2d2d2',
    grey50: '#d9d9d9',
    grey100: '#eaeaea',
    grey150: '#efefef',
    grey200: '#b6b6b6',
    grey300: '#ccc',
    grey400: '#686868',
    grey500: '#808080',
    grey600: '#898989',
    grey700: '#999',
    rgbaWhite: 'rgba(255, 255, 255, 0.9)',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
    },
  },
  buttons: {
    common: {
      fontFamily: 'heading',
      fontWeight: 'normal',
      px: [7, null, 5, 7],
      py: 4,
      textTransform: 'uppercase',
      letterSpacing: '1px',
      appearance: 'none',
      display: 'inline-block',
      textAlign: 'center',
      lineHeight: 'inherit',
      textDecoration: 'none',
      border: 0,
      cursor: 'pointer',
      transition: 'link',
      borderWidth: '1px',
      borderStyle: 'solid',
      mx: 'auto',
      '&:focus': {
        outline: 'none',
      },
      a: {
        border: 'none',
        lineHeight: '30px',
        transition: 'none',
        display: 'flex',
        placeItems: 'center',
      },
      'a:hover': {
        border: 'none',
        bg: 'transparent',
      },
    },
    primary: {
      variant: 'buttons.common',
      color: 'white',
      bg: 'primary',
      borderColor: 'primary',
      '&:hover': {
        bg: 'primaryDarker',
      },
    },
    secondary: {
      variant: 'buttons.common',
      bg: 'secondary',
      color: 'white',
    },
    internal: {
      variant: 'buttons.common',
      borderColor: 'grey100',
      bg: 'grey100',
      color: 'grey400',
      '&:hover': {
        color: 'grey400',
        bg: 'grey',
      },
    },
    outline: {
      variant: 'buttons.common',
      bg: 'transparent',
      color: 'primary',
      borderColor: 'primary',
      '&:hover': {
        color: 'white',
        bg: 'primary',
      },
    },
  },
  fonts: {
    body: 'Ubuntu, sans-serif',
    heading: 'Ubuntu',
    author: 'Ubuntu',
  },
  breakpoints: ['576px', '768px', '1030px', '1280px', '1600px'],
  space: [
    0,
    3,
    5,
    8,
    10,
    16,
    18,
    20,
    23,
    25,
    30,
    40,
    45,
    47,
    48,
    60,
    90,
    128,
    135,
    256,
    301,
    512,
    616,
  ],
  fontSizes: [13, 15, 16, 18, 20, 24, 28, 32, 36, 40, 48, 60, 96],
  fontWeights: {
    body: 300,
    normal: 400,
    medium: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    reset: 1,
    body: 1.75,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      color: 'mainDark',
      fontWeight: 'normal',
    },
    heading1: {
      variant: 'text.heading',
      fontSize: [9, 10], // 40, 48
      fontFamily: 'body',
      fontWeight: 'body',
      m: 0, // 0
    },
    heading2: {
      variant: 'text.heading',
      fontSize: [8, null, 10], // 36, 48
      fontFamily: 'body',
      fontWeight: 'body',
      m: 0, // 0
      lineHeight: 'reset',
    },
    heading3: {
      variant: 'text.heading',
      fontSize: [3], // 36, 48
      fontFamily: 'body',
      fontWeight: 'body',
      m: 0, // 0
      lineHeight: 'reset',
    },
    heading4: {
      variant: 'text.heading',
      fontSize: 3, //18
      mt: 0, // 0
      mb: 7, // 20
    },
    heading5: {
      variant: 'text.heading',
      fontSize: 1, // 15
      mt: 0, // 0
      mb: 7, // 20
    },
    paragraph: {
      mt: 0, // 0
      mb: 7, // 20
    },
    list: {
      pl: 7, // 20
      mt: 0, // 0
      mb: 9, // 25
    },
    listItem: {
      mb: 2, // 5
      listStyleType: 'circle',
    },
    link: {
      bg: 'transparent',
      borderWidth: '1px',
      borderBottomStyle: 'solid',
      borderColor: 'primary',
      transition: 'link',
      textDecoration: 'none',
      color: 'inherit',
      '&:hover': {
        bg: 'rgba(0, 0, 0, 0.05)',
        borderColor: 'mainDark',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      fontSize: 3,
      h1: {
        variant: 'text.heading1',
      },
      h2: {
        variant: 'text.heading2',
      },
      h3: {
        variant: 'text.heading3',
      },
      h4: {
        variant: 'text.heading4',
      },
      h5: {
        variant: 'text.heading5',
      },
      p: {
        variant: 'text.paragraph',
      },
      ul: {
        variant: 'text.list',
      },
      li: {
        variant: 'text.listItem',
      },
      a: {
        variant: 'text.link',
      },
      table: {
        fontSize: [1, 3],
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        mx: 0,
        my: 15,
      },
      th: {
        textAlign: 'left',
        borderWidth: '1px',
        borderBottomStyle: 'solid',
        borderColor: 'grey700',
        py: 4,
        px: [null, 5],
      },
      td: {
        textAlign: 'left',
        borderWidth: '1px',
        borderBottomStyle: 'solid',
        borderColor: 'grey700',
        py: 4,
        px: [null, 5],
      },
    },
  },
  radii: {
    reset: 0,
  },
  transition: {
    link: '0.2s linear',
    header: '0.3s linear',
    imageLink: '0.4s linear',
  },
};
