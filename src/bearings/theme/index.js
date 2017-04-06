/**
 * Theme
 */

import { makeColorVersions } from '../utils/color'


const theme = {}


// Color palette

const palette = makeColorVersions({
  // Standard colors
  black: '#000000',
  white: '#ffffff',
  gray: '#e3e3e3',

  // Theme colors
  backgroundColor: '#F6F6F3',
  textColor: '#232C33',

  brandPrimary: '#7EB0D3',
  brandSuccess: '#00A676',
  brandInfo: '#AFA2FF',
  brandWarning: '#DB9D47',
  brandDanger: '#A24936',
  brandMoody: '#585563',
  brandDark: '#2B4141',
})

Object.assign(theme, palette)

// Component colors
Object.assign(theme, {
  badgeColor: palette.white,
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

Object.assign(theme, distance)

// Component distances
Object.assign(theme, {
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
  baseFontFamily: fontFamilyProximaNova,
  baseFontSize: '16px',
  baseFontWeight: fontWeightNormal,

  headingFontFamily: fontFamilyProximaNova,
  textFieldFontFamily: fontFamilyProximaNova,

  badgeFontFamily: fontFamilyProximaNova,
  badgeFontWeight: fontWeightBold,
  badgeFontSize: '75%',
}

Object.assign(theme, font)


export default theme
