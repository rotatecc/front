/**
 * Theme
 */

import { darken, fade } from '../utils/color'


const theme = {}


// Color palette

// Basic
theme.black = '#000000'
theme.white = '#ffffff'

// Grayscale
theme.grayDark = '#292b2c'
theme.gray = '#464a4c'
theme.grayLight = '#636c72'
theme.grayLighter = '#eceeef'
theme.grayLightest = '#f7f7f9'

theme.colorMoody = '#585563'
theme.colorDark = '#2B4141'

// Brand
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


theme.backgroundColor = '#F6F6F3'
theme.textColor = '#232C33'


// Font

theme.fontWeightNormal = 300
theme.fontWeightBold = 700

theme.baseFontFamily = '\'proxima-nova\', \'Helvetica Neue\', Helvetica, Arial, sans-serif'
theme.baseFontSize = '16px'
theme.baseFontWeight = theme.fontWeightNormal
theme.baseLineHeight = 1.5

theme.fontSizeLg = '1.25rem'
theme.fontSizeSm = '0.875rem'
theme.fontSizeXs = '0.75rem'

theme.headingFontFamily = theme.baseFontFamily
theme.textFieldFontFamily = theme.baseFontFamily


// Border

theme.borderWidth = '1px'

theme.borderRadius = '0.25rem'
theme.borderRadiusLg = '0.3rem'
theme.borderRadiusSm = '0.15rem'


// Cursor


theme.cursorDisabled = 'not-allowed'


// Link


theme.linkColor = theme.brandPrimary
theme.linkDecoration = 'none'
theme.linkHoverColor = darken(theme.brandPrimary, 15)
theme.linkHoverDecoration = 'underline'


// Component: Button


theme.buttonFontWeight = theme.fontWeightNormal
theme.buttonBoxShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 1px rgba(0,0,0,.075)'
theme.buttonFocusBoxShadow = `0 0 0 2px ${fade(theme.brandPrimary, 25)}`
theme.buttonActiveBoxShadow = 'inset 0 3px 5px rgba(0,0,0,0.125)'
theme.buttonTransition = 'all .2s ease-in-out'

theme.buttonInputBorderWidth = theme.borderWidth

theme.buttonLinkDisabledColor = theme.grayLight

theme.buttonBorderRadius = theme.borderRadius
theme.buttonFontSize = theme.baseFontSize
theme.buttonInputPaddingX = '1rem'
theme.buttonInputPaddingY = '0.5rem'
theme.buttonInputLineHeight = '1.25'

theme.buttonBorderRadiusSm = theme.borderRadiusSm
theme.buttonFontSizeSm = theme.fontSizeSm
theme.buttonInputPaddingXSm = '0.5rem'
theme.buttonInputPaddingYSm = '0.25rem'
theme.buttonInputLineHeightSm = '1.5'

theme.buttonBorderRadiusLg = theme.borderRadiusLg
theme.buttonFontSizeLg = theme.fontSizeLg
theme.buttonInputPaddingXLg = '1rem'
theme.buttonInputPaddingYLg = '0.5rem'
theme.buttonInputLineHeightLg = '1.5'

theme.buttonSecondaryColor = theme.grayDark
theme.buttonSecondaryBg = theme.white
theme.buttonSecondaryBorder = theme.grayLighter
theme.buttonSecondaryFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonSecondaryBorder, 50)}`

theme.buttonPrimaryColor = theme.white
theme.buttonPrimaryBg = theme.brandPrimary
theme.buttonPrimaryBorder = theme.buttonPrimaryBg
theme.buttonPrimaryFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonPrimaryBorder, 50)}`

theme.buttonInfoColor = theme.white
theme.buttonInfoBg = theme.brandInfo
theme.buttonInfoBorder = theme.buttonInfoBg
theme.buttonInfoFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonInfoBorder, 50)}`

theme.buttonSuccessColor = theme.white
theme.buttonSuccessBg = theme.brandSuccess
theme.buttonSuccessBorder = theme.buttonSuccessBg
theme.buttonSuccessFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonSuccessBorder, 50)}`

theme.buttonWarningColor = theme.white
theme.buttonWarningBg = theme.brandWarning
theme.buttonWarningBorder = theme.buttonWarningBg
theme.buttonWarningFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonWarningBorder, 50)}`

theme.buttonDangerColor = theme.white
theme.buttonDangerBg = theme.brandDanger
theme.buttonDangerBorder = theme.buttonDangerBg
theme.buttonDangerFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonDangerBorder, 50)}`


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
