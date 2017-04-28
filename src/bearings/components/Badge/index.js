import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'
import get from 'lodash.get'

import {
  expandStyles,
  propIsBrandOrDefaultOrLightOrDark,
  propIsSize,
} from '../../utils'

import BrandBackground from '../BrandBackground'

import Close from '../Close'


const baseStyles = expandStyles(
  'd/inline-flex',
  'fAlignItems/center',
  'fJustifyContent/center',

  'h/~badgeHeight',
  'pLeft/~badgePaddingX',
  'pRight/~badgePaddingX',
  'lh/~badgeLineHeight',

  'nowrap',

  '!radius/~badgeBorderRadius',

  'ff/~badgeFontFamily',
  'fw/~badgeFontWeight',

  // hide empty badges
  { ':empty': expandStyles('d/none') },
)

const BaseElement = styled(BrandBackground, baseStyles)

const sizeMap = {
  // size: [font-size, Close-size]
  small: ['~badgeFontSizeSmall', 'small'],
  normal: ['~badgeFontSizeNormal', 'small'],
  large: ['~badgeFontSizeLarge', 'normal'],
}

const SizedElement = styled(BaseElement, ({ size }) => expandStyles(
  `fs/${get(sizeMap, [size, 0], 0)}`,
))


const BadgeClose = styled(Close, expandStyles(
  'mLeft/0.25em',
  'mRight/-0.375em',
))


export default function Badge({ brand, size, onClose, children }) {
  const childrenArray = React.Children.toArray(children)

  const closeMaybe = !onClose
    ? null
    : (
      <BadgeClose
        key="close"
        size={get(sizeMap, [size, 1], 'small')}
        onClick={onClose}
      />
    )

  return React.createElement(
    SizedElement,
    { brand, size, bold: false },
    [...childrenArray, closeMaybe],
  )
}

Badge.propTypes = {
  brand: propIsBrandOrDefaultOrLightOrDark.isRequired,
  size: propIsSize.isRequired,
  onClose: PropTypes.func,

  children: PropTypes.node.isRequired,
}

Badge.defaultProps = {
  brand: 'light',
  size: 'small',
}
