import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, propIsFeedback } from '../../utils'
import { feedbackValue } from '../../mixins'


const makeBaseStyles = ({ feedback }) => ({
  ...expandStyles(
    'p/~alertPaddingY/~alertPaddingX',
    'mBottom/~alertMarginBottom',
    `c/${feedbackValue(feedback, 'text')}`,
    `bgc/${feedbackValue(feedback, 'bg')}`,
    `bordC/${feedbackValue(feedback, 'border')}`,
    'bordS/solid',
    'bordW/~alertBorderWidth',
    'radius/~alertBorderRadius',
  ),
})

const baseDiv = styled('div', makeBaseStyles)

export default function Alert({ feedback, children }) {
  return React.createElement(baseDiv, { feedback }, children)
}

Alert.propTypes = {
  feedback: propIsFeedback,
  children: React.PropTypes.node.isRequired,
}

Alert.defaultProps = {
  brand: 'success',
}
