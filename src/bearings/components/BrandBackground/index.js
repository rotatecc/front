/**
 * BrandBackground
 */


import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'
import color from 'color'

import {
  expandStyles,
  propIsBrandOrDefaultOrLightOrDark,
} from '../../utils'

import { themeValue } from '../../mixins'


const Wrapper = styled('div', ({ brandStyles }) => expandStyles(...brandStyles))


const generateGradientColor = (baseColor, rotate, saturate, darken) =>
  color(baseColor)
    .rotate(rotate)
    .saturate(saturate)
    .darken(darken)
    .hsl()
    .string()


const boldGradientStyle = (baseThemeColor) => {
  const baseColor = themeValue(baseThemeColor)

  const gradientTopLeft = generateGradientColor(baseColor, -10, 0.1, 0.1)
  const gradientBottomRight = generateGradientColor(baseColor, 10, 0.05, 0.05)

  return `bgi/linear-gradient(141deg, ${gradientTopLeft} 0%, \
${baseColor} 71%, ${gradientBottomRight} 100%)`
}


const normalBrandMap = {
  default: ['bgc/~white', 'c/~textColor'],
  light: ['bgc/~grayLightest', 'c/~textColor'],
  dark: ['bgc/~grayDark', 'c/~white'],
  primary: ['bgc/~brandPrimary', 'c/~white'],
  success: ['bgc/~brandSuccess', 'c/~white'],
  info: ['bgc/~brandInfo', 'c/~white'],
  warning: ['bgc/~brandWarning', 'c/~white'],
  danger: ['bgc/~brandDanger', 'c/~white'],
}


const boldBrandMap = {
  default: [boldGradientStyle('white'), 'c/~textColor'],
  light: [boldGradientStyle('grayLightest'), 'c/~textColor'],
  dark: [boldGradientStyle('gray'), 'c/~white'],
  primary: [boldGradientStyle('brandPrimary'), 'c/~white'],
  success: [boldGradientStyle('brandSuccess'), 'c/~white'],
  info: [boldGradientStyle('brandInfo'), 'c/~white'],
  warning: [boldGradientStyle('brandWarning'), 'c/~white'],
  danger: [boldGradientStyle('brandDanger'), 'c/~white'],
}


export default function BrandBackground({ bold, brand, children, ...restProps }) {
  const brandStyles = bold
    ? boldBrandMap[brand]
    : normalBrandMap[brand]

  return React.createElement(Wrapper, { ...restProps, brandStyles }, children)
}

BrandBackground.propTypes = {
  brand: propIsBrandOrDefaultOrLightOrDark,
  bold: PropTypes.bool,
  children: PropTypes.node,
}

BrandBackground.defaultProps = {
  brand: 'default',
  bold: false,
}
