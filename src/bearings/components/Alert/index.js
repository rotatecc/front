import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, propIsPaletteColor } from '../../utils'


const makeBaseStyles = ({ color }) => ({
  ...expandStyles(
    'p/~alertPaddingY/~alertPaddingX',
    'mBottom/~alertMarginBottom',
    // TODO
    // `c/~${color}`,
    // `bgc/~${color}Light`,
    // `bordC/~${color}Dark`,
    'bordS/solid',
    'bordW/~alertBorderWidth',
    'radius/~alertBorderRadius',
  ),
})

const baseDiv = styled('div', makeBaseStyles)

export default function Alert({ c: color, children }) {
  return React.createElement(baseDiv, { color }, children)
}

Alert.propTypes = {
  c: propIsPaletteColor,
  children: React.PropTypes.node.isRequired,
}

Alert.defaultProps = {
  color: 'primary',
}
