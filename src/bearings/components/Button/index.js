import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, propIsSize, propIsBrand, capitalize } from '../../utils'


function buttonSizeWithThemeValues(paddingY, paddingX, fontSize, lineHeight, borderRadius) {
  return expandStyles(
    `p/~${paddingY}/~${paddingX}`,
    `fs/~${fontSize}`,
    `lh/~${lineHeight}`,
    `radius/~${borderRadius}`,
  )
}


const sizes = {
  normal: buttonSizeWithThemeValues(
    'buttonInputPaddingY',
    'buttonInputPaddingX',
    'buttonFontSize',
    'buttonInputLineHeight',
    'buttonBorderRadius',
  ),
  small: buttonSizeWithThemeValues(
    'buttonInputPaddingYSm',
    'buttonInputPaddingXSm',
    'buttonFontSizeSm',
    'buttonInputLineHeightSm',
    'buttonBorderRadiusSm',
  ),
  large: buttonSizeWithThemeValues(
    'buttonInputPaddingYLg',
    'buttonInputPaddingXLg',
    'buttonFontSizeLg',
    'buttonInputLineHeightLg',
    'buttonBorderRadiusLg',
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
    `bShadow/~button${brandCapitalized}FocusBoxShadow`,
  )

  const activeStyles = expandStyles(
    'noOutline', // custom outline (below)
    `bgc/~button${brandCapitalized}Bg~dark10`,
    `bordC/~button${brandCapitalized}Border~dark12`,
    'bShadow/~buttonActiveBoxShadow',
  )

  const disabledStyles = expandStyles(
    'cursor/~cursorDisabled',
    'o/0.65',
    'bShadow/none',
    `c/~button${brandCapitalized}Color`,
    `bgc/~button${brandCapitalized}Bg`,
  )

  return {
    ...expandStyles(
      `c/~button${brandCapitalized}Color`,
      `bgc/~button${brandCapitalized}Bg`,
      `bordC/~button${brandCapitalized}Border`,
    ),

    ':hover': hoverStyles,

    ...(focus ? focusStyles : { ':focus': focusStyles }),
    ...(active ? activeStyles : { ':active': activeStyles }),
    ...(disabled ? disabledStyles : { ':disabled': disabledStyles }),
  }
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
    `bShadow/~button${brandCapitalized}FocusBoxShadow`,
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
    'bShadow/none',
    'bgc/transparent',
    `c/~button${brandCapitalized}Bg`,
  )

  return {
    ...expandStyles(
      'bgc/transparent',
      `c/~button${brandCapitalized}Bg`,
      `bordC/~button${brandCapitalized}Bg`,
    ),

    ':hover': hoverStyles,

    ...(focus ? focusStyles : { ':focus': focusStyles }),
    ...(active ? activeStyles : { ':active': activeStyles }),
    ...(disabled ? disabledStyles : { ':disabled': disabledStyles }),
  }
}


const Button = styled('button', ({ size, brand, outline, focus, active, disabled }) => ({
  ...expandStyles(
    'pointer',
    'd/inline-block',
    'fw/~buttonFontWeight',
    'tAlign/center',
    'nowrap',
    'vAlign/middle',
    'bordW/~buttonInputBorderWidth',
    'bordS/solid',
    'bordC/transparent',
    'trans/~buttonTransition',
  ),

  ...sizes[size],

  ...(outline ? buttonBrandOutlined : buttonBrand)(brand, { focus, active, disabled }),

  userSelect: 'none',
}))


Button.propTypes = {
  size: propIsSize,
  brand: propIsBrand,
  outline: React.PropTypes.bool,
  focus: React.PropTypes.bool,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
}


Button.defaultProps = {
  size: 'normal',
  brand: 'primary',
  outline: false,
  focus: false,
  active: false,
  disabled: false,
}


export default Button
