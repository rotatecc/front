/**
 * Theme
 */

import { lighten, darken, fade } from '../utils/color'


const theme = {}


// Enablers


theme.enableRounded = true
theme.enableShadows = true
theme.enableTransitions = true


// Grid + Breakpoints


theme.gridColumns = 12


theme.gridBaseGutterWidth = '30px'


theme.gridGutters = {
  tiny: theme.gridBaseGutterWidth,
  mobile: theme.gridBaseGutterWidth,
  tablet: theme.gridBaseGutterWidth,
  desktop: theme.gridBaseGutterWidth,
  widescreen: theme.gridBaseGutterWidth,
}


theme.gridBreakpoints = {
  tiny: '0px',
  mobile: '576px',
  tablet: '768px',
  desktop: '992px',
  widescreen: '1200px',
}


// The max widths of Container
// for different screen sizes
theme.gridContainerMaxWidths = {
  mobile: '540px',
  tablet: '720px',
  desktop: '960px',
  widescreen: '1140px',
}


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

theme.fontSize = '1rem'
theme.fontSizeLg = '1.25rem'
theme.fontSizeSm = '0.875rem'
theme.fontSizeXs = '0.75rem'

theme.headingFontFamily = theme.baseFontFamily
theme.textFieldFontFamily = theme.baseFontFamily


// Border


theme.borderWidth = '1px'


// Border radius


theme.borderRadius = '0.25rem'
theme.borderRadiusLg = '0.3rem'
theme.borderRadiusSm = '0.15rem'
theme.borderRadiusInfinite = '290486px'


// Cursor


theme.cursorDisabled = 'not-allowed'


// Link


theme.linkColor = theme.brandPrimary
theme.linkDecoration = 'none'
theme.linkHoverColor = darken(theme.brandPrimary, 15)
theme.linkHoverDecoration = 'underline'


// Base form field styles

theme.inputPaddingX = '1rem'
theme.inputPaddingY = '0.5rem'
theme.inputLineHeight = 1.25
theme.inputSmPaddingX = '0.5rem'
theme.inputSmPaddingY = '0.25rem'
theme.inputSmLineHeight = 1.5
theme.inputLgPaddingX = '1rem'
theme.inputLgPaddingY = '0.5rem'
theme.inputLgLineHeight = 1.5

// NOTE heights are only used for SelectField currently?
// fontSize * lineHeight + inputPaddingY * 2
theme.inputHeight = `${(1 * theme.inputLineHeight) + (0.5 * 2)}rem`
theme.inputSmHeight = `${(0.875 * theme.inputSmLineHeight) + (0.25 * 2)}rem`
theme.inputLgHeight = `${(1.25 * theme.inputLgLineHeight) + (0.5 * 2)}rem`

theme.inputBgc = theme.white
theme.inputBgcFocus = theme.inputBgc
theme.inputBgcDisabled = theme.grayLighter

theme.inputColor = theme.gray
theme.inputColorFocus = theme.inputColor

theme.inputBorderWidth = theme.borderWidth
theme.inputBorderColor = fade(theme.black, 85)
theme.inputBorderColorFocus = lighten(theme.brandPrimary, 25)

theme.inputBorderRadius = theme.borderRadius
theme.inputSmBorderRadius = theme.borderRadiusSm
theme.inputLgBorderRadius = theme.borderRadiusLg

theme.inputBoxShadow = `inset 0 1px 1px ${fade(theme.black, 92.5)}`
theme.inputBoxShadowFocus = `inset 0 1px 1px ${fade(theme.inputBorderColorFocus, 40)}`

theme.inputTransition = 'border-color ease-in-out 150ms, box-shadow ease-in-out 150ms'


// Section


theme.sectionBackgroundColor = theme.white


// Checkable (Checkbox / Radio)


theme.checkableMarginBottom = '0.5rem'
theme.checkableInputGutter = '1.25rem'
theme.checkableInputMarginY = '0.25rem'
theme.checkableInputMarginX = '0.25rem'


// Label


theme.labelMarginBottom = '0.5rem'


// Select


theme.selectHeight = `calc(${theme.inputHeight} + ${theme.inputBorderWidth})`


// Component: Field


theme.fieldMarginBottom = '1rem'

theme.fieldHorizontalGap = '1.75rem'
theme.fieldGroupedGutter = '12px'


// Components: FieldFeedback + FieldHelp


theme.fieldFeedbackMarginTop = '0.25rem'
theme.fieldFeedbackFontWeight = theme.fontWeightBold

theme.fieldHelpMarginTop = '0.25rem'
theme.fieldHelpFontSize = theme.fontSizeSm
theme.fieldHelpColor = theme.grayLight


// Component: Button


theme.buttonFontWeight = theme.fontWeightNormal
theme.buttonBoxShadow = 'inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 1px rgba(0,0,0,.075)'
theme.buttonFocusBoxShadow = `0 0 0 2px ${fade(theme.brandPrimary, 75)}`
theme.buttonActiveBoxShadow = 'inset 0 3px 5px rgba(0,0,0,0.125)'
theme.buttonTransition = 'all .2s ease-in-out'

theme.buttonLinkDisabledColor = theme.grayLight

theme.buttonBorderWidth = theme.inputBorderWidth

theme.buttonBorderRadius = theme.borderRadius
theme.buttonFontSize = theme.baseFontSize

theme.buttonBorderRadiusSm = theme.borderRadiusSm
theme.buttonFontSizeSm = theme.fontSizeSm

theme.buttonBorderRadiusLg = theme.borderRadiusLg
theme.buttonFontSizeLg = theme.fontSizeLg

theme.buttonDefaultColor = theme.grayDark
theme.buttonDefaultBg = theme.white
theme.buttonDefaultBorder = theme.grayLighter
theme.buttonDefaultFocusBoxShadow = `0 0 0 2px ${fade(theme.buttonDefaultBorder, 50)}`

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


theme.badgeHeight = '2em' // relative
theme.badgePaddingX = '0.875em' // relative
theme.badgeLineHeight = '1.5'
theme.badgeBorderRadius = theme.borderRadiusInfinite
theme.badgeFontFamily = theme.baseFontFamily
theme.badgeFontWeight = theme.fontWeightNormal

theme.badgeFontSizeSmall = '0.75rem'
theme.badgeFontSizeNormal = '1rem'
theme.badgeFontSizeLarge = '1.25rem'


// Component: Alert

theme.alertBorderWidth = theme.borderWidth
theme.alertBorderRadius = theme.borderRadius
theme.alertPaddingX = '1.25rem'
theme.alertPaddingY = '0.75rem'
theme.alertMarginBottom = '1rem'
theme.alertLineHeight = theme.baseLineHeight


// Component: Tile

theme.tileBorderRadius = theme.borderRadius // switch-able
theme.tileBoxShadow = '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)' // switch-able
theme.tilePaddingX = '1.25rem'
theme.tilePaddingY = '0.75rem'
theme.tileMarginBottom = '1rem'


export default theme
