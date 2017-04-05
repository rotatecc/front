import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, propIsPaletteColor } from '../../utils'


const makeBaseStyles = ({ color }) => ({
  ...expandStyles(
    'p/d~alertPaddingY/d~alertPaddingX',
    'mBottom/d~alertMarginBottom',
    `bgc/p~${color}Light`,
    `bordC/p~${color}Dark`,
    'bordS/solid',
    'bordW/d~alertBorderWidth',
    'radius/d~alertBorderRadius',
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
