import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import { expandStyles, propIsSize } from '../../utils'

import { breakpoint } from '../../mixins'


const sizeMap = {
  normal: 'fs/~fontSizeNormal',
  small: 'fs/~fontSizeSmall',
  large: 'fs/~fontSizeLarge',
}


const Label = styled('label', ({ size, horizontal }) => expandStyles(
  'd/inline-block',
  'mBottom/~labelMarginBottom',

  'fw/~fontWeightBold',

  // Horizontal
  horizontal && breakpoint(horizontal === true ? 'tablet' : horizontal, expandStyles('pTop/~inputPaddingY')),

  // Size
  sizeMap[size],
))

Label.propTypes = {
  size: propIsSize.isRequired, // has default
}

Label.defaultProps = {
  size: 'normal',
}


// Since there is only one Label per Field, we can safely
// set alwaysId=true (always attach htmlFor if descendent of Field)
export default canConnectField(Label, 'htmlFor', true)
