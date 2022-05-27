import { bodyFontFamily, typeStyles } from './globalTypography';
import { parseTheme } from './utils';

const {
  typeDefaults,
  displayXXLargeBase,
  displayXLargeBase,
  displayLargeBase,
  displayMediumBase,
  displaySmallBase,
  bodyBase,
  headingBase,
  subheadingBase,
  captionBase,
  emailBase,
} = typeStyles;

const theme = {
  spacing: 5,
  palette: {
    brandEmail: {
      primary: '#041249',
      secondary: '#FFFFFF',
    },
    common: {
      border: '#D2D2D2',
      borderLight: '#F3F3F3',
      borderEmail: '#D9D9D9',
    },
    primary: {
      main: '#2244CE',
      contrastText: '#FFFFFF',
    },
    treat: {
      brand: '#FFC062',
      text: '#FFFFFF',
    },
    background: {
      paper: '#FFFFFF',
      white: '#FFFFFF',
      default: '#F3F3F3',
      blue: '#041249',
      yellow: '#FFC062',
      cyan: '#74C9D4',
      light: '#FAFAFA',
      backdrop: '#080D25',
    },
    text: {
      primary: '#080D25',
      default: '#080D25', // alt name for primary
      secondary: '#080D25',
      subdued: '#757575',
      disabled: '#C5C5C5',
      inactive: '#C5C5C5', // alt name for disabled
      highlight: '#9BD5DD',
      white: '#FFFFFF',
    },
    interactive: {
      focus: '#2244CE',
      hover: '#082494',
      pressed: '#001E61',
      disabled: '#D2D2D2',
      inverse: '#F3F3F3',
      subdued: '#EDF5FF',
      white: '#FFFFFF',
      darkblue: '#080D25',
    },
    success: {
      main: '#00A44B',
    },
    error: {
      main: '#D72C0D',
    },
    action: {
      disabledBackground: '#D2D2D2',
    },
  },
  typography: {
    fontFamily: bodyFontFamily,
    fontSize: typeDefaults.fontSize,
    fontWeightRegular: typeDefaults.fontWeightRegular,
    fontWeightMedium: typeDefaults.fontWeightMedium,
    fontWeightBold: typeDefaults.fontWeightBold,
    // Remove the default typography variants.
    h1: undefined,
    h2: undefined,
    h3: undefined,
    h4: undefined,
    h5: undefined,
    h6: undefined,
    body1: undefined,
    body2: undefined,
    subtitle1: undefined,
    subtitle2: undefined,
    // Add Treat typography variants.
    displayXXLarge: {
      ...displayXXLargeBase,
    },
    displayXLarge: {
      ...displayXLargeBase,
    },
    displayXLargeSubdued: {
      ...displayXLargeBase,
      color: 'palette.text.subdued',
    },
    displayLarge: {
      ...displayLargeBase,
    },
    displayLargeSubdued: {
      ...displayLargeBase,
      color: 'palette.text.subdued',
    },
    displayMedium: {
      ...displayMediumBase,
    },
    displayMediumSubdued: {
      ...displayMediumBase,
      color: 'palette.text.subdued',
    },
    displaySmall: {
      ...displaySmallBase,
    },
    displaySmallSubdued: {
      ...displaySmallBase,
      color: 'palette.text.subdued',
    },
    body: {
      ...bodyBase,
    },
    bodySemibold: {
      ...bodyBase,
      fontWeight: 600,
    },
    bodyPowered: {
      ...bodyBase,
      ...emailBase,
      fontSize: '1rem',
      strong: {
        fontSize: '1.2rem',
        fontWeight: 700,
      },
    },
    bodySubdued: {
      ...bodyBase,
      color: 'palette.text.subdued',
    },
    heading: {
      ...headingBase,
    },
    headingSubdued: {
      ...headingBase,
      color: 'palette.text.subdued',
    },
    subheading: {
      ...subheadingBase,
    },
    subheadingSubdued: {
      ...subheadingBase,
      color: 'palette.text.subdued',
    },
    caption: {
      ...captionBase,
    },
    captionSubdued: {
      ...captionBase,
      color: 'palette.text.subdued',
    },
    captionSemibold: {
      ...captionBase,
      fontWeight: 600,
    },
    captionPublicSubdued: {
      ...captionBase,
      fontWeight: 400,
      color: 'palette.text.subdued',
      a: {
        fontWeight: 600,
        color: 'palette.interactive.focus',
        textDecoration: 'none',
      },
    },
    emailHeadline: {
      ...emailBase,
      fontSize: '3.4rem',
      lineHeight: 1.2,
    },
    emailSubheading: {
      ...emailBase,
      fontSize: '2.1rem',
      lineHeight: 1.2,
    },
    emailBody: {
      ...emailBase,
      fontSize: '1.7rem',
      lineHeight: 1.5,
      strong: {
        fontWeight: 700,
      },
    },
    emailBodyInactive: {
      ...emailBase,
      fontSize: '1.7rem',
      lineHeight: 1.5,
      color: 'palette.text.inactive',
      strong: {
        fontWeight: 700,
      },
    },
    emailCaption: {
      ...emailBase,
      fontSize: '1.6rem',
      lineHeight: 1,
      fontWeight: 700,
      textTransform: 'uppercase',
      '&,&:hover,&:focus': {
        textDecoration: 'none',
      },
    },
  },
  transitions: {
    easing: {
      bounce: 'cubic-bezier(.15,.7,.95,1.1)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: '62.5%', // 1rem = 10px.
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '50px',
          borderWidth: '1px',
          fontSize: typeDefaults.fontSize,
          fontWeight: typeDefaults.fontWeightBold,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          minWidth: '160px',
          padding: '15px 30px',
        },
        text: {
          borderRadius: '0',
          display: 'inline-block',
          textTransform: 'none',
          letterSpacing: 0,
          padding: 0,
          '&:hover, &:focus': {
            backgroundColor: 'transparent',
            textDecoration: 'underline',
          },
          '&.MuiButton-sizeMedium, &.MuiButton-sizeSmall, &.MuiButton-sizeLarge':
            {
              minWidth: 0,
              padding: 0,
            },
        },
        outlined: {
          backgroundColor: 'palette.interactive.white',
          '&:hover': {
            backgroundColor: 'palette.interactive.focus',
            color: 'palette.text.white',
          },
          '&:focus': {
            backgroundColor: 'palette.interactive.focus',
            color: 'palette.text.white',
          },
        },
        contained: {
          '&:hover': {
            backgroundColor: 'palette.interactive.hover',
            borderColor: 'palette.interactive.hover',
          },
          '&:focus': {
            backgroundColor: 'palette.interactive.pressed',
            borderColor: 'palette.interactive.pressed',
          },
          '&.Mui-disabled': {
            color: 'palette.interactive.white',
            borderColor: 'palette.action.disabledBackground',
          },
        },
        containedPrimary: {
          '&.with-thick-border': {
            borderWidth: '4px',
            borderStyle: 'solid',
            borderColor: 'palette.primary.main',
            padding: '11px 26px',
          },
        },
        sizeSmall: {
          fontSize: '1.2rem',
          minWidth: '120px',
          padding: '8px 23px',
        },
        containedSizeSmall: {
          '&.with-thick-border': {
            borderWidth: '4px',
            borderStyle: 'solid',
            borderColor: 'palette.primary.main',
            padding: '4px 19px',
          },
        },
        sizeMedium: {
          minWidth: '120px',
          padding: '9px 25px',
        },
        containedSizeMedium: {
          '&.with-thick-border': {
            borderWidth: '4px',
            borderStyle: 'solid',
            borderColor: 'palette.primary.main',
            padding: '5px 21px',
            '&.Mui-disabled': {
              borderColor: 'palette.action.disabledBackground',
            },
            '&:hover': {
              borderColor: 'palette.interactive.hover',
            },
            '&:focus': {
              borderColor: 'palette.interactive.pressed',
            },
          },
        },
      },
      variants: [
        {
          props: { variant: 'brandEmail' },
          style: {
            borderRadius: '6px',
            backgroundColor: 'palette.brandEmail.primary',
            color: 'palette.brandEmail.secondary',
            '&:hover, &:focus': {
              backgroundColor: 'palette.brandEmail.primary',
              color: 'palette.brandEmail.secondary',
            },
          },
        },
      ],
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: {
          shrink: false,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderColor: 'palette.common.border',
          '.component-input & .MuiOutlinedInput-input': {
            height: '26px',
            padding: '15px 14px 5px',
          },
          '&:hover:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
            borderColor: 'palette.common.border',
            borderWidth: '1px',
          },
          '&.Mui-focused:not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
            borderColor: 'palette.primary.main',
            borderWidth: '2px',
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline, &.Mui-disabled:hover .MuiOutlinedInput-notchedOutline':
            {
              borderColor: 'palette.interactive.inverse',
            },
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: 'palette.text.subdued',
          top: '-3px',
          '&.Mui-disabled': {
            color: 'palette.interactive.disabled',
          },
          '.component-input &.Mui-focused, .component-input &.MuiFormLabel-filled':
            {
              color: 'palette.text.subdued',
              top: '-10px',
              transform: 'translate(14px, 14px) scale(0.85)',
            },
          '.component-textarea &': {
            color: 'palette.text.primary',
            fontWeight: '600',
            fontSize: '1.2rem',
            top: '-4rem',
            left: '-1.3rem',
            '&.Mui-disabled': {
              color: 'palette.interactive.disabled',
            },
            '&.Mui-focused': {
              color: 'palette.text.primary',
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: '1.4rem',
          fontWeight: 400,
          marginLeft: 0,
          marginTop: '5px',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          displayXLarge: 'h1',
          displayLarge: 'h2',
          displayMedium: 'h3',
          displaySmall: 'h4',
          h5: 'h4',
          h6: 'h4',
          heading: 'h4',
          subheading: 'h4',
          caption: 'span',
          captionSemibold: 'span',
          captionPublicSubdued: 'span',
          bodyPowered: 'p',
          bodySemibold: 'p',
          emailHeadline: 'h1',
          emailSubheading: 'h2',
          emailBody: 'p',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          fontWeight: typeDefaults.fontWeightMedium,
          '&:hover, &:focus': {
            cursor: 'pointer',
          },
        },
      },
    },
  },
  mixins: {
    treat: {
      // sidebar elements positioning (left margins) depend on the sidebar width
      // and elements' sizes
      // therefore they are all moved here for easier manipulation
      sidebar: {
        opened: {
          width: '240px',
        },
        closed: {
          width: '68px',
        },
        avatar: {
          ml: '14px',
          '.MuiAvatar-root': {
            width: '30px',
            height: '30px',
          },
        },
        logo: {
          pl: '17px',
          pr: '15px',
        },
        navItem: {
          pl: '17px',
          pr: '15px',
          '.MuiListItemIcon-root > svg': {
            width: '20px',
            height: 'auto',
          },
        },
      },
    },
  },
  dropShadows: {
    topNav: '0px 3px 4px rgba(0, 0, 0, 0.05)',
    leftNav: '3px 3px 4px rgba(0, 0, 0, 0.05)',
    cardSoft: '2px 2px 6px rgba(0, 0, 0, 0.03)',
    callout: '1px 2px 7px rgba(0, 0, 0, 0.15)',
    preview: '6px 6px 20px rgba(0, 0, 0, 0.06)',
  },
};

parseTheme(theme);

export default theme;
