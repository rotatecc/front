import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, propIsState } from '../../utils'
import { stateValue } from '../../mixins'


const makeBaseStyles = ({ state }) => ({
  ...expandStyles(
    'p/~alertPaddingY/~alertPaddingX',
    'mBottom/~alertMarginBottom',
    `c/${stateValue(state, 'text')}`,
    `bgc/${stateValue(state, 'bg')}`,
    `bordC/${stateValue(state, 'border')}`,
    'bordS/solid',
    'bordW/~alertBorderWidth',
    'radius/~alertBorderRadius',
  ),
})

const baseDiv = styled('div', makeBaseStyles)

export default function Alert({ state, children }) {
  return React.createElement(baseDiv, { state }, children)
}

Alert.propTypes = {
  state: propIsState,
  children: React.PropTypes.node.isRequired,
}

Alert.defaultProps = {
  state: 'success',
}
