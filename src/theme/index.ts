import type { Theme } from 'theme-ui'

const makeTheme = <T extends Theme>(t: T) => t

const theme = makeTheme({
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: 'Roboto, system-ui, sans-serif',
    heading: 'Roboto, system-ui, sans-serif',
    monospace: '"Roboto Mono", monospace',
    primary: 'Roboto, system-ui, sans-serif',
    secondary: 'Roboto, system-ui, sans-serif',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    grayMedium: '#B5B5B5',
    gray: '#F4F4F4',
    successToast: '#04802E',
    errorToast: '#CB1A14',
    warningToast: '#ffcc4d',
    red: '#F00',
    black: '#141414',
    white: '#FFF',
    whiteMedium: '#FCFBFB',
    backgroundWhite: '#F0F2F5',
    green: '#B9FAA7',
    text: '#141414',
    background: '#FFF',
    altBackground: '#E0EEEF',
    primary: '#215732',
    secondary: '#38A169',
    accent: '#7C8034',
    muted: '#F0FFF4',
    errorDark: '#B30909',
    borderGray: '#E4E7EC',
  },
  styles: {
    root: {
      variant: 'text.body',
      a: { color: 'inherit', textDecoration: 'none' },
      '-webkit-font-smoothing': 'antialiased',
    },
  },
  buttons: {
    primary: {
      backgroundColor: 'primary',
      borderRadius: '0',
      color: 'neutral',
      cursor: 'pointer',
      fontFamily: 'secondary',
      fontSize: ['12px', '12px', '16px'],
      letterSpacing: '2px',
      height: ['48px', null, '64px'],
      lineHeight: ['3rem', '46px', '4rem'],
      padding: '0 2.5rem',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: 'accent',
      },
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: '#cccccc',
      },
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  layout: {
    container: {
      margin: 'auto',
      // maxWidth: 'calc(1600px + 8rem)',
      padding: ['0 10px', null, '0 64px'],
      overflow: 'hidden',
      width: '100%',
    },
    tablet: {
      margin: 'auto',
      maxWidth: 'calc(1600px)',
      padding: [0, null, null],
      overflow: 'hidden',
      width: '100%',
    },
    fullWidth: {
      padding: [0, null, null],
      overflow: 'hidden',
      width: '100%',
    },
  },
  // responsive is not in the theme-ui docs, but it works and is used everywhere
  // in this app as a variant for viewport sizes.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  responsive: {
    mobile: {
      display: ['block', 'none', 'none'],
    },
    mobileTablet: {
      display: ['block', 'block', 'none'],
    },
    tablet: {
      display: ['none', 'block', 'none'],
    },
    desktop: {
      display: ['none', 'none', 'block'],
    },
    tabletDesktop: {
      display: ['none', 'block', 'block'],
    },
  },
  text: {
    body: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    small: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    caps: {
      textTransform: 'uppercase',
    },
    formInput: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    formLabel: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      textTransform: 'uppercase',
    },
    formError: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      textTransform: 'uppercase',
      color: 'errorDark',
    },
    link: {
      color: 'inherit',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      textDecoration: 'none',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    navLink: {
      color: 'inherit',
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
      textDecoration: 'none',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
  },
})

export type AppTheme = typeof theme

export default theme
