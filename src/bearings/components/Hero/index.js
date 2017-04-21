/**
 * Hero
 */


import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'
import color from 'color'

import {
  expandStyles,
  propIsSize,
  propIsBrandOrDefaultOrLightOrDark,
} from '../../utils'

import Container from '../Container'

import { themeValue } from '../../mixins'


const Wrapper = styled('div', ({ brandStyles }) => expandStyles(
  'd/flex',
  'fAlignItems/center',
  ...brandStyles,
))


const VerticalPadding = styled('div', ({ amount }) => expandStyles(
  'fullWidth',
  `pTop/${amount}`,
  `pBottom/${amount}`,
))


const sizePaddingMap = {
  normal: '8rem',
  small: '3rem',
  large: '12rem',
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

  return `bgi/linear-gradient(141deg, ${gradientTopLeft} 0%, ` +
    `${baseColor} 71%, ${gradientBottomRight} 100%)`
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


export default function Hero({ size, bold, brand, children }) {
  const padding = sizePaddingMap[size] || 0

  const brandStyles = bold
    ? boldBrandMap[brand]
    : normalBrandMap[brand]

  return (
    <Wrapper brandStyles={brandStyles}>
      <VerticalPadding amount={padding}>
        <Container>
          {children}
        </Container>
      </VerticalPadding>
    </Wrapper>
  )
}

Hero.propTypes = {
  size: propIsSize,
  brand: propIsBrandOrDefaultOrLightOrDark,
  bold: PropTypes.bool,

  children: PropTypes.node,
}

Hero.defaultProps = {
  size: 'normal',
  brand: 'default',
  bold: false,
}
