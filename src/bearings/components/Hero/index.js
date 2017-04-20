/**
 * Hero
 */


import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, propIsSize } from '../../utils'

import Container from '../Container'


const Wrapper = styled('div', expandStyles(
  'd/flex',
  'fAlignItems/center',
))


const Padding = styled('div', ({ amount }) => expandStyles(
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

  children: PropTypes.node,
}

Hero.defaultProps = {
  size: 'normal',
}
