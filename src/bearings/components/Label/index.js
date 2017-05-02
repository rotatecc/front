import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import { expandStyles, propIsSize, propIsColumnBreakpoint } from '../../utils'

import { breakpoint } from '../../mixins'


const sizeMap = {
  normal: 'fs/~inputFontSizeNormal',
  small: 'fs/~inputFontSizeSmall',
  large: 'fs/~inputFontSizeLarge',
}


const Label = styled('label', ({ size, horizontal, disabled }) => expandStyles(
  'd/inline-block',
  'mBottom/~labelMarginBottom',

  'fw/~fontWeightBold',

  // Size
  sizeMap[size],

  // Horizontal
  // Add padding-top sized to match input font size
  horizontal && breakpoint(horizontal === true ? 'tablet' : horizontal, expandStyles('pTop/~inputPaddingY')),

  // Disabled
  disabled && 'c/~grayLight',
))

Label.propTypes = {
  size: propIsSize.isRequired, // has default

  horizontal: propIsColumnBreakpoint,
  disabled: PropTypes.bool,
}

Label.defaultProps = {
  size: 'normal',
}


// Since there is only one Label per Field, we can safely
// set alwaysId=true (always attach htmlFor if descendent of Field)
export default canConnectField(Label, 'htmlFor', true)
