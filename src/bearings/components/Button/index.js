import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import {
  expandStyles,
  propIsSize,
  propIsBrandOrDefault,
  capitalize,
} from '../../utils'

import canConnectField from '../Field/canConnectField'


function buttonSizeWithThemeValues(fontSize, borderRadius) {
  return expandStyles(
    `fs/~${fontSize}`,
    `!radius/~${borderRadius}`,
  )
}


const sizes = {
  normal: buttonSizeWithThemeValues(
    'buttonFontSizeNormal',
    'buttonBorderRadiusNormal',
  ),
  small: buttonSizeWithThemeValues(
    'buttonFontSizeSmall',
    'buttonBorderRadiusSmall',
  ),
  large: buttonSizeWithThemeValues(
    'buttonFontSizeLarge',
    'buttonBorderRadiusLarge',
  ),
}


function buttonBrand(brand, { focus, active, disabled }) {
  const brandCapitalized = capitalize(brand)

  const hoverStyles = expandStyles(
    'tDecor/none',
    `bgc/~button${brandCapitalized}Bg~dark10`,
    `bordC/~button${brandCapitalized}Border~dark12`,
  )

  const focusStyles = expandStyles(
    'noOutline', // custom outline (below)
    'tDecor/none',
    `!bShadow/~button${brandCapitalized}FocusBoxShadow`,
  )

  const activeStyles = expandStyles(
    'noOutline', // custom outline (below)
    `bgc/~button${brandCapitalized}Bg~dark10`,
    `bordC/~button${brandCapitalized}Border~dark12`,
    '!bShadow/~buttonActiveBoxShadow',
  )

  const disabledStyles = expandStyles(
    'cursor/~cursorDisabled',
    'o/0.65',
    '!bShadow/none',
    `c/~button${brandCapitalized}Color`,
    `bgc/~button${brandCapitalized}Bg`,
  )

  return expandStyles(
    `c/~button${brandCapitalized}Color`,
    `bgc/~button${brandCapitalized}Bg`,
    `bordC/~button${brandCapitalized}Border`,

    focus && focusStyles,
    active && activeStyles,
    disabled && disabledStyles,

    {
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles,
      ':disabled': disabledStyles,
    },
  )
}


function buttonBrandOutlined(brand, { focus, active, disabled }) {
  const brandCapitalized = capitalize(brand)

  const hoverStyles = expandStyles(
    'tDecor/none',
    `c/~button${brandCapitalized}Color`,
    `bgc/~button${brandCapitalized}Bg`,
    `bordC/~button${brandCapitalized}Bg`,
  )

  const focusStyles = expandStyles(
    'noOutline', // custom outline (below)
    'tDecor/none',
    `!bShadow/~button${brandCapitalized}FocusBoxShadow`,
  )

  const activeStyles = expandStyles(
    'tDecor/none',
    `c/~button${brandCapitalized}Color`,
    `bgc/~button${brandCapitalized}Bg`,
    `bordC/~button${brandCapitalized}Bg`,
  )

  const disabledStyles = expandStyles(
    'cursor/~cursorDisabled',
    'o/0.65',
    '!bShadow/none',
    'bgc/transparent',
    `c/~button${brandCapitalized}Bg`,
  )

  return expandStyles(
    'bgc/transparent',
    `c/~button${brandCapitalized}Bg`,
    `bordC/~button${brandCapitalized}Bg`,

    focus && focusStyles,
    active && activeStyles,
    disabled && disabledStyles,

    {
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles,
      ':disabled': disabledStyles,
    },
  )
}


function makeButtonLinkStyles({ focus, active, disabled }) {
  const borderAndBg = expandStyles(
    'bordC/transparent',
    'bgc/transparent',
  )

  const baseStyles = expandStyles(
    borderAndBg,
    'c/~linkColor',
    'tDecor/~linkDecoration',
    '!bShadow/none',
  )

  const activeStyles = expandStyles(
    borderAndBg,
    '!bShadow/none',
  )

  const focusStyles = expandStyles(
    borderAndBg,
    'noOutline',
    'c/~linkHoverColor',
    'tDecor/~linkHoverDecoration',
    '!bShadow/~buttonFocusBoxShadow',
  )

  const hoverStyles = expandStyles(
    borderAndBg,
    'c/~linkHoverColor',
    'tDecor/~linkHoverDecoration',
  )

  const disabledStyles = expandStyles(
    'cursor/~cursorDisabled',
    'tDecor/~linkDecoration',
    'o/0.65',
    '!bShadow/none',
    'c/~buttonLinkDisabledColor',

    // TODO FIXME currently these can't be combined
    // (they are merged into normal :hover and :focus)
    // ':hover': expandStyles(
    //   'tDecor/~linkDecoration',
    //   'c/~buttonLinkDisabledColor',
    // ),
    // ':focus': expandStyles(
    //   'noOutline',
    //   'tDecor/~linkDecoration',
    //   'c/~buttonLinkDisabledColor',
    //   '!bShadow/none',
    // ),
  )

  return expandStyles(
    baseStyles,

    focus && focusStyles,
    active && activeStyles,
    disabled && disabledStyles,

    {
      ':hover': hoverStyles,
      ':focus': focusStyles,
      ':active': activeStyles,
      ':disabled': disabledStyles,
    },
  )
}

const StyledButton = styled('button', ({ size, brand, link, outline, focus, active, disabled }) => {
  const branding = link
    ? makeButtonLinkStyles({ focus, active, disabled })
    : (outline ? buttonBrandOutlined : buttonBrand)(brand, { focus, active, disabled })

  return expandStyles(
    'pointer',
    'd/inline-block',
    'fw/~buttonFontWeight',
    'tAlign/center',
    'nowrap',
    'vAlign/middle',
    'bordW/~buttonBorderWidth',
    'bordS/solid',
    'bordC/transparent',
    '!trans/~buttonTransition',

    'pTop/~buttonPaddingY',
    'pBottom/~buttonPaddingY',
    'pLeft/~buttonPaddingX',
    'pRight/~buttonPaddingX',

    { userSelect: 'none' },

    sizes[size],

    branding,
  )
})


const ButtonInGroup = styled(StyledButton, ({ isFirstInGroup, isLastInGroup }) =>
  expandStyles(
    'relative',

    'fGrow/0',
    'fShrink/1',
    'fBasis/auto',

    'mBottom/0',

    // Prevent double borders and radius when buttons are next to each other
    !isFirstInGroup && 'mLeft/~buttonBorderWidth~negate',
    !isFirstInGroup && !isLastInGroup && 'radius/0',
    isFirstInGroup && { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
    isLastInGroup && { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
  ))


function Button({ isInButtonGroup, ...restProps }) {
  const component = isInButtonGroup ? ButtonInGroup : StyledButton
  return React.createElement(component, restProps)
}

Button.propTypes = {
  size: propIsSize.isRequired, // has default
  brand: propIsBrandOrDefault.isRequired, // has default

  link: PropTypes.bool,
  outline: PropTypes.bool,

  focus: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,

  isInButtonGroup: PropTypes.bool,
  isFirstInGroup: PropTypes.bool,
  isLastInGroup: PropTypes.bool,
}


Button.defaultProps = {
  size: 'normal',
  brand: 'primary',
}


export default canConnectField(Button)
