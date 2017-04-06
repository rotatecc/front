/**
 * Theme
 */

import { darken } from '../utils/color'


const theme = {}


// Color palette

const palette = {}

palette.black = '#000000'
palette.white = '#ffffff'
palette.gray = '#e3e3e3'

palette.colorMoody = '#585563'
palette.colorDark = '#2B4141'

palette.backgroundColor = '#F6F6F3'
palette.textColor = '#232C33'

palette.brandPrimary = '#7EB0D3'
palette.brandSuccess = '#00A676'
palette.brandInfo = '#AFA2FF'
palette.brandWarning = '#DB9D47'
palette.brandDanger = '#A24936'

palette.stateSuccessText = '#3C763D'
palette.stateSuccessBg = '#DFF0D8'
palette.stateSuccessBorder = darken(palette.stateSuccessBg, 5)

palette.stateInfoText = '#31708f'
palette.stateInfoBg = '#d9edf7'
palette.stateInfoBorder = darken(palette.stateInfoBg, 7)

palette.stateWarningText = '#8a6d3b'
palette.stateWarningBg = '#fcf8e3'
palette.stateWarningBorder = darken(palette.stateWarningBg, 5)

palette.stateDangerText = '#a94442'
palette.stateDangerBg = '#f2dede'
palette.stateDangerBorder = darken(palette.stateDangerBg, 5)

Object.assign(theme, palette)


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

Object.assign(theme, {
  // Component: Badge
  badgeColor: palette.white,
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
