import React from 'react'
import { styled } from 'styletron-react'

import Close from '../Close'

import { expandStyles, propIsFeedback } from '../../utils'
import { feedbackValue } from '../../mixins'


const DismissableClose = styled(Close, expandStyles(
  'relative',
  't/~alertPaddingY~negate',
  'r/~alertPaddingX~negate',
  'p/~alertPaddingY/~alertPaddingX',
  'c/inherit',
))


const BaseDiv = styled('div', ({ feedback }) => expandStyles(
  'p/~alertPaddingY/~alertPaddingX',
  'mBottom/~alertMarginBottom',
  `c/${feedbackValue(feedback, 'text')}`,
  `bgc/${feedbackValue(feedback, 'bg')}`,
  `bordC/${feedbackValue(feedback, 'border')}`,
  'bordS/solid',
  'bordW/~alertBorderWidth',
  'radius/~alertBorderRadius',
  'lh/~alertLineHeight',
))


export default function Alert({ feedback, onClose, children }) {
  return (
    <BaseDiv feedback={feedback}>
      {children}
      {onClose && <DismissableClose onClick={onClose} />}
    </BaseDiv>
  )
}

Alert.propTypes = {
  feedback: propIsFeedback,
  onClose: React.PropTypes.func,
  children: React.PropTypes.node.isRequired,
}

Alert.defaultProps = {
  brand: 'success',
}
