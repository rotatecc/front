import { styled } from 'styletron-react'
import memoize from 'lodash.memoize'

import { expandStyles, capitalize, propIsFeedback } from '../../utils'


const feedbackToThemeColor = memoize((feedback) => `feedback${capitalize(feedback)}Text`)


const FieldFeedback = styled('div', ({ feedback }) => expandStyles(
  'mTop/~fieldFeedbackMarginTop',

  'fw/~fieldFeedbackFontWeight',
  `c/~${feedbackToThemeColor(feedback)}`,
))

FieldFeedback.propTypes = {
  feedback: propIsFeedback.isRequired,
}

export default FieldFeedback
