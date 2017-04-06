import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, propIsPaletteColor, condSpread } from '../../utils'


const makeBaseStyles = ({ pilled, color }) => ({
  ...expandStyles(
    'd/inline-block',
    'lh/1',
    'align/center',
    'nowrap',
    'vAlign/baseline',
    'c/~badgeColor',
    // TODO
    // `bgc/~${color}`,
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

export default function Badge({ pilled, c: color, children }) {
  return React.createElement(baseSpan, { pilled, color }, children)
}

Badge.propTypes = {
  pilled: React.PropTypes.bool,
  c: propIsPaletteColor,
  children: React.PropTypes.node.isRequired,
}

Badge.defaultProps = {
  pilled: false,
  color: 'primary',
}
