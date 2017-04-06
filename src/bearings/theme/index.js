/**
 * Theme
 */

import { darken } from '../utils/color'


const theme = {}


// Color palette

theme.black = '#000000'
theme.white = '#ffffff'
theme.gray = '#e3e3e3'

theme.colorMoody = '#585563'
theme.colorDark = '#2B4141'

theme.backgroundColor = '#F6F6F3'
theme.textColor = '#232C33'

theme.brandPrimary = '#7EB0D3'
theme.brandSuccess = '#00A676'
theme.brandInfo = '#AFA2FF'
theme.brandWarning = '#DB9D47'
theme.brandDanger = '#A24936'

theme.stateSuccessText = '#3C763D'
theme.stateSuccessBg = '#DFF0D8'
theme.stateSuccessBorder = darken(theme.stateSuccessBg, 5)

theme.stateInfoText = '#31708f'
theme.stateInfoBg = '#d9edf7'
theme.stateInfoBorder = darken(theme.stateInfoBg, 7)

theme.stateWarningText = '#8a6d3b'
theme.stateWarningBg = '#fcf8e3'
theme.stateWarningBorder = darken(theme.stateWarningBg, 5)

theme.stateDangerText = '#a94442'
theme.stateDangerBg = '#f2dede'
theme.stateDangerBorder = darken(theme.stateDangerBg, 5)


// Font

const fontFamilyProximaNova = '\'proxima-nova\', \'Helvetica Neue\', Helvetica, Arial, sans-serif'

const fontWeightNormal = 300
const fontWeightBold = 700

theme.baseFontFamily = fontFamilyProximaNova
theme.baseFontSize = '16px'
theme.baseFontWeight = fontWeightNormal

theme.headingFontFamily = fontFamilyProximaNova
theme.textFieldFontFamily = fontFamilyProximaNova

theme.badgeFontFamily = fontFamilyProximaNova
theme.badgeFontWeight = fontWeightBold
theme.badgeFontSize = '75%'


// Border

theme.borderWidth = '1px'

theme.borderRadius = '0.25rem'
theme.borderRadiusLg = '0.3rem'
theme.borderRadiusSm = '0.15rem'


// Component: Badge

theme.badgeColor = theme.white
theme.badgePaddingX = '0.4em'
theme.badgePaddingY = '0.25em'
theme.badgeBorderRadius = theme.borderRadiusSm
// ensure completely rounded edges regardless of font-size
theme.badgePilledBorderRadius = '10rem'
theme.badgePilledPaddingX = '0.6em'


// Component: Alert

theme.alertBorderWidth = theme.borderWidth
theme.alertBorderRadius = theme.borderRadius
theme.alertPaddingX = '1.25rem'
theme.alertPaddingY = '0.75rem'
theme.alertMarginBottom = '1rem'


export default theme
