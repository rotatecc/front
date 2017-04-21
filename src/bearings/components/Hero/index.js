/**
 * Hero
 */


import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import {
  expandStyles,
  propIsSize,
  propIsBrand,
} from '../../utils'

import Container from '../Container'


const Wrapper = styled('div', expandStyles(
  'd/flex',
  'fAlignItems/center',
  'bgi/linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%)',
))


const Padding = styled('div', ({ amount }) => expandStyles(
  'fullWidth',
  `pTop/${amount}`,
  `pBottom/${amount}`,
))


const sizePaddingMap = {
  normal: '8rem',
  small: '3rem',
  large: '12rem',
}


export default function Hero({ size, children }) {
  const padding = sizePaddingMap[size] || 0

  return (
    <Wrapper>
      <Padding amount={padding}>
        <Container>
          {children}
        </Container>
      </Padding>
    </Wrapper>
  )
}

Hero.propTypes = {
  size: propIsSize,
  brand: propIsBrand,
  bold: PropTypes.bool,

  children: PropTypes.node,
}

Hero.defaultProps = {
  size: 'normal',
  brand: 'primary',
  bold: false,
}
