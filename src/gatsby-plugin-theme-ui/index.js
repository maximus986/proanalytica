export default {
  initialColorModeName: 'light',
  useBodyStyles: true,
  colors: {
    textPassive: '#666',
    primary: '#006877',
    secondary: '#D1EBE3',
    tertiary: '#004452',
    textPrimary: '#0c0d24',
    primaryBackground: '#fff',
    secondaryBackground: '##f9f7ff',
    muted: '#e9e9e9',
    primaryOpacity2: 'rgba(0, 103, 119, 0.2)',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      },
    },
  },
  buttons: {
    primary: {
      color: 'primaryBackground',
      fontWeight: 'bold',
      bg: 'primary',
      width: '220px',
      height: '55px',
      boxShadow: `0 15px 15px rgba(0, 103, 119, 0.2)`,
      position: 'relative',
      transition: 'link',
      '&:hover': {
        transform: 'translateY(-5px)',
      },
    },
    secondary: {
      bg: 'primary',
      color: 'white',
      fontWeight: 'bold',
      width: '170px',
      height: '55px',
      transition: 'link',
      '&:hover': {
        bg: 'tertiary',
      },
    },
    link: {
      display: 'inline-block',
      color: 'muted',
      transition: 'link',
      '&:hover': {
        color: 'primary',
      },
    },
    outlineLarge: {
      bg: 'transparent',
      width: '260px',
      height: '60px',
      color: 'primaryBackground',
      fontWeight: 'bold',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'primaryBackground',
      textTransform: 'uppercase',
      transition: 'link',
      '&:hover': {
        borderColor: 'primary',
        bg: 'primary',
      },
    },
    outlineRegular: {
      bg: 'transparent',
      width: '190px',
      height: '55px',
      color: 'primary',
      fontWeight: 'normal',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'muted',
      textTransform: 'capitalize',
      transition: 'link',
      '&:hover': {
        borderColor: 'primary',
        bg: 'primary',
        color: 'primaryBackground',
      },
    },
    outlineSmall: {
      bg: 'transparent',
      width: '127px',
      height: '40px',
      color: 'textPrimary',
      fontWeight: 'normal',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'muted',
      textTransform: 'capitalize',
      transition: 'link',
      '&:hover': {
        borderColor: 'primary',
        bg: 'primary',
        color: 'primaryBackground',
      },
    },
  },
  fonts: {
    body: 'Ubuntu, sans-serif',
    heading: 'Ubuntu, sans-serif',
  },
  breakpoints: ['576px', '768px', '992px', '1280px'],
  space: [0, 8, 16, 24, 32, 40, 48, 56, 64],
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 32, 36, 40, 48, 60],
  fontWeights: {
    body: 300,
    normal: 400,
    medium: 500,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    reset: 1,
    body: 1.6,
    heading: 1.3,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      color: 'textPrimary',
      fontWeight: 'bold',
      lineHeight: 'heading',
    },
    heading1: {
      variant: 'text.heading',
      fontSize: [10, 11], // 36, 40
      mb: 3, // 8
    },
    heading2: {
      variant: 'text.heading',
      fontSize: [7, 8], // 36, 40
      mb: 1, // 8
    },
    heading3: {
      variant: 'text.heading',
      fontSize: 5, // 24
      mb: 1, // 8
    },
    paragraph: {
      mt: 0, // 0
      mb: 7, // 20
    },
    link: {
      textDecoration: 'none',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'normal',
      fontSize: 2,
      color: 'textPassive',
      bg: 'primaryBackground',
      lineHeight: 'body',
      h1: {
        variant: 'text.heading1',
      },
      h2: {
        variant: 'text.heading2',
      },
      h3: {
        variant: 'text.heading3',
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
    },
  },
  radii: {
    reset: 0,
  },
  transition: {
    link: '0.5s ease',
    imageLink: '0.4s ease',
  },
};
