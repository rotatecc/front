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

theme.feedbackSuccessText = '#3C763D'
theme.feedbackSuccessBg = '#DFF0D8'
theme.feedbackSuccessBorder = darken(theme.feedbackSuccessBg, 5)

theme.feedbackInfoText = '#31708f'
theme.feedbackInfoBg = '#d9edf7'
theme.feedbackInfoBorder = darken(theme.feedbackInfoBg, 7)

theme.feedbackWarningText = '#8a6d3b'
theme.feedbackWarningBg = '#fcf8e3'
theme.feedbackWarningBorder = darken(theme.feedbackWarningBg, 5)

theme.feedbackDangerText = '#a94442'
theme.feedbackDangerBg = '#f2dede'
theme.feedbackDangerBorder = darken(theme.feedbackDangerBg, 5)


// Font

theme.fontWeightNormal = 300
theme.fontWeightBold = 700

theme.baseFontFamily = '\'proxima-nova\', \'Helvetica Neue\', Helvetica, Arial, sans-serif'
theme.baseFontSize = '18px'
theme.baseFontWeight = theme.fontWeightNormal
theme.baseLineHeight = 1.5

theme.headingFontFamily = theme.baseFontFamily
theme.textFieldFontFamily = theme.baseFontFamily


// Border

theme.borderWidth = '1px'

theme.borderRadius = '0.25rem'
theme.borderRadiusLg = '0.3rem'
theme.borderRadiusSm = '0.15rem'


// Component: Close


theme.closeColor = theme.black
theme.closeFontSize = '1.5rem'
theme.closeFontWeight = theme.fontWeightBold
theme.closeTextShadow = `0 1px 0 ${theme.white}`


// Component: Badge

theme.badgeColor = theme.white
theme.badgePaddingX = '0.4em'
theme.badgePaddingY = '0.25em'
theme.badgeBorderRadius = theme.borderRadiusSm
// ensure completely rounded edges regardless of font-size
theme.badgePilledBorderRadius = '10rem'
theme.badgePilledPaddingX = '0.6em'
theme.badgeFontFamily = theme.baseFontFamily
theme.badgeFontWeight = theme.fontWeightBold
theme.badgeFontSize = '75%'


// Component: Alert

theme.alertBorderWidth = theme.borderWidth
theme.alertBorderRadius = theme.borderRadius
theme.alertPaddingX = '1.25rem'
theme.alertPaddingY = '0.75rem'
theme.alertMarginBottom = '1rem'
theme.alertLineHeight = theme.baseLineHeight


export default theme
