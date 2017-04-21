/**
 * Hero
 */


import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import {
  expandStyles,
  propIsSize,
  propIsBrandOrDefaultOrLightOrDark,
} from '../../utils'

import BrandBackground from '../BrandBackground'
import Container from '../Container'


const WrapperWithBackground = styled(BrandBackground, expandStyles(
  'd/flex',
  'fAlignItems/center',
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


export default function Hero({ fluid, size, bold, brand, children }) {
  const padding = sizePaddingMap[size] || 0

  return (
    <WrapperWithBackground bold={bold} brand={brand}>
      <VerticalPadding amount={padding}>
        <Container fluid={fluid}>
          {children}
        </Container>
      </VerticalPadding>
    </WrapperWithBackground>
  )
}

Hero.propTypes = {
  fluid: PropTypes.bool,
  size: propIsSize,
  brand: propIsBrandOrDefaultOrLightOrDark,
  bold: PropTypes.bool,

  children: PropTypes.node,
}

Hero.defaultProps = {
  fluid: false,
  size: 'normal',
  brand: 'default',
  bold: false,
}
