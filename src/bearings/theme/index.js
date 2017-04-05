/**
 * Theme
 */

import { makeColorVersions } from '../utils/color'


// Color palette

const palette = makeColorVersions({
  // Standard colors
  black: '#000000',
  white: '#ffffff',
  gray: '#e3e3e3',

  // Theme colors
  background: '#F6F6F3',
  text: '#232C33',
  primary: '#7EB0D3',
  success: '#00A676',
  info: '#AFA2FF',
  warning: '#DB9D47',
  danger: '#A24936',
  moody: '#585563',
  dark: '#2B4141',
})

// Component colors
Object.assign(palette, {
  badge: palette.white,
})


// Distance

const distance = {
  // Border width
  borderWidth: '1px',

  // Border radius
  borderRadius: '0.25rem',
  borderRadiusLg: '0.3rem',
  borderRadiusSm: '0.15rem',
}

// Component distances
Object.assign(distance, {
  // Component: Badge
  badgePaddingX: '0.4em',
  badgePaddingY: '0.25em',
  badgeBorderRadius: distance.borderRadiusSm,
  // ensure completely rounded edges regardless of font-size
  badgePilledBorderRadius: '10rem',
  badgePilledPaddingX: '0.6em',

  // Component: Alert
  alertBorderWidth: distance.borderWidth,
  alertBorderRadius: distance.borderRadius,
  alertPaddingX: '1.25rem',
  alertPaddingY: '0.75rem',
  alertMarginBottom: '1rem',
})


// Font

const fontFamilyProximaNova = '\'proxima-nova\', \'Helvetica Neue\', Helvetica, Arial, sans-serif'

const fontWeightNormal = 300
const fontWeightBold = 700

const font = {
  base: {
    family: fontFamilyProximaNova,
    size: '16px',
    weight: fontWeightNormal,
  },
  heading: {
    family: fontFamilyProximaNova,
  },
  textField: {
    family: fontFamilyProximaNova,
  },
  badge: {
    size: '75%',
    weight: fontWeightBold,
  },
}


export default {
  palette,
  distance,
  font,
}
