import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, condSpread, propIsBrand } from '../../utils'
import { brandValue } from '../../mixins'


const makeBaseStyles = ({ pilled, brand }) => ({
  ...expandStyles(
    'd/inline-block',
    'lh/1',
    'align/center',
    'nowrap',
    'vAlign/baseline',
    'c/~badgeColor',
    `bgc/${brandValue(brand)}`,
    'p/~badgePaddingY/~badgePaddingX',
    'ff/~badgeFontFamily',
    'fs/~badgeFontSize',
    'fw/~badgeFontWeight',
    'radius/~badgeBorderRadius', // non-pilled (actually just a subtle pilling)
  ),

  // hide empty badges
  ':empty': expandStyles('d/none'),

  // if pilled, use a greater border radius and paddingX
  ...condSpread(pilled, expandStyles(
    'radius/~badgePilledBorderRadius',
    'p/~badgePaddingY/~badgePilledPaddingX',
  )),
})

const baseSpan = styled('span', makeBaseStyles)

export default function Badge({ pilled, brand, children }) {
  return React.createElement(baseSpan, { pilled, brand }, children)
}

Badge.propTypes = {
  pilled: React.PropTypes.bool,
  brand: propIsBrand,
  children: React.PropTypes.node.isRequired,
}

Badge.defaultProps = {
  pilled: false,
  brand: 'primary',
}
