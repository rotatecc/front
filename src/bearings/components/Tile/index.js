/**
 * Tile
 */


import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import {
  expandStyles,
  propIsBrandOrDefaultOrLightOrDark,
} from '../../utils'

import BrandBackground from '../BrandBackground'


const WrapperWithBackground = styled(BrandBackground, expandStyles(
  'p/1rem/1.25rem',
  'mBottom/1rem',
))


export default function Tile({ bold, brand, children }) {
  return (
    <WrapperWithBackground bold={bold} brand={brand}>
      {children}
    </WrapperWithBackground>
  )
}

Tile.propTypes = {
  brand: propIsBrandOrDefaultOrLightOrDark,
  bold: PropTypes.bool,

  children: PropTypes.node,
}

Tile.defaultProps = {
  brand: 'default',
  bold: false,
}
