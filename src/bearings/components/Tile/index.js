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


const WrapperWithBackground = styled(BrandBackground, ({ hasRadius, hasShadow }) => expandStyles(
  'p/1rem/1.25rem',
  'mBottom/~gridBaseGutterWidth',
  hasRadius && 'radius/~borderRadius',
  hasShadow && 'bShadow/0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)',
))


export default function Tile({ hasRadius, hasShadow, bold, brand, children }) {
  return (
    <WrapperWithBackground bold={bold} brand={brand} hasRadius={hasRadius} hasShadow={hasShadow}>
      {children}
    </WrapperWithBackground>
  )
}

Tile.propTypes = {
  hasRadius: PropTypes.bool,
  hasShadow: PropTypes.bool,

  brand: propIsBrandOrDefaultOrLightOrDark,
  bold: PropTypes.bool,

  children: PropTypes.node,
}

Tile.defaultProps = {
  hasRadius: false,
  hasShadow: false,

  brand: 'default',
  bold: false,
}
