import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import BrandBackground from '../BrandBackground'

import Close from '../Close'

import { expandStyles, propIsBrand } from '../../utils'


const DismissableClose = styled(Close, expandStyles(
  'absolute',
  't/0.5em',
  'r/0.5em',
))


const BaseDiv = styled(BrandBackground, ({ hasClose }) => expandStyles(
  'relative',
  'pTop/~alertPaddingY',
  `pRight/~alertPaddingX${hasClose ? 'Close' : ''}`,
  'pBottom/~alertPaddingY',
  'pLeft/~alertPaddingX',
  'mBottom/~alertMarginBottom',
  '!radius/~alertBorderRadius',
  'lh/~alertLineHeight',
))

BaseDiv.propTypes = {
  hasClose: PropTypes.bool,
  // ...other BrandBackground props
}


export default function Alert({ brand, bold, onClose, children }) {
  if (!children) {
    return null
  }

  return (
    <BaseDiv brand={brand} bold={bold} hasClose={Boolean(onClose)}>
      {children}
      {onClose && <DismissableClose onClick={onClose} size="normal" />}
    </BaseDiv>
  )
}

Alert.propTypes = {
  brand: propIsBrand.isRequired, // has default
  bold: PropTypes.bool,
  onClose: PropTypes.func,

  children: PropTypes.node,
}

Alert.defaultProps = {
  brand: 'light',
}
