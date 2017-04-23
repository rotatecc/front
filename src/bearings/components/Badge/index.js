import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, condSpread, propIsBrand } from '../../utils'

import { brandValue } from '../../mixins'

import Close from '../Close'


const makeBaseStyles = ({ pilled, brand }) => expandStyles(
  'd/inline-block',
  'lh/1',
  'tAlign/center',
  'nowrap',
  'vAlign/baseline',
  'c/~badgeColor',
  `bgc/${brandValue(brand)}`,
  'p/~badgePaddingY/~badgePaddingX',
  'ff/~badgeFontFamily',
  'fs/~badgeFontSize',
  'fw/~badgeFontWeight',
  '!radius/~badgeBorderRadius', // non-pilled (actually just a subtle pilling)

  // hide empty badges
  { ':empty': expandStyles('d/none') },

  // if pilled, use a greater border radius and paddingX
  condSpread(pilled, expandStyles(
    '!radius/~badgePilledBorderRadius',
    'p/~badgePaddingY/~badgePilledPaddingX',
  )),
)

const baseSpan = styled('span', makeBaseStyles)


const BadgeClose = styled(Close, expandStyles(
  'mLeft/0.25rem',
))


export default function Badge({ pilled, brand, onClose, children }) {
  const childrenArray = React.Children.toArray(children)

  const closeMaybe = !onClose
    ? []
    : [<BadgeClose key="close" size="small" onClick={onClose} />]

  return React.createElement(
    baseSpan,
    { pilled, brand },
    [...childrenArray, ...closeMaybe],
  )
}

Badge.propTypes = {
  pilled: PropTypes.bool,
  brand: propIsBrand,
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Badge.defaultProps = {
  pilled: false,
  brand: 'primary',
}
