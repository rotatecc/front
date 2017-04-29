import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import Close from '../Close'

import { expandStyles, propIsBrand } from '../../utils'
import { brandValue } from '../../mixins'


const DismissableClose = styled(Close, expandStyles(
  'relative',
  't/~alertPaddingY~negate',
  'r/~alertPaddingX~negate',
  'p/~alertPaddingY/~alertPaddingX',
  'c/inherit',
))


// TODO restyle using BrandBackground
const BaseDiv = styled('div', ({ brand }) => expandStyles(
  'p/~alertPaddingY/~alertPaddingX',
  'mBottom/~alertMarginBottom',
  'c/~white',
  `bgc/${brandValue(brand)}`,
  `bordC/${brandValue(brand)}`,
  'bordS/solid',
  'bordW/~alertBorderWidth',
  '!radius/~alertBorderRadius',
  'lh/~alertLineHeight',
))


export default function Alert({ brand, onClose, children }) {
  return (
    <BaseDiv brand={brand}>
      {children}
      {onClose && <DismissableClose onClick={onClose} />}
    </BaseDiv>
  )
}

Alert.propTypes = {
  brand: propIsBrand.isRequired, // has default
  onClose: PropTypes.func,

  children: PropTypes.node.isRequired,
}

Alert.defaultProps = {
  brand: 'success',
}
