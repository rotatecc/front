/**
 * FieldFeedbackSet
 *
 * Helper component to make FieldFeedback components
 * based on state
 * ex.
 * <FieldFeedbackSet
 *   feedback="info"
 *   success="It worked!"
 *   info="You might try this."
 *   danger="Bad!"
 * />
 * would result in one FieldFeedback-info.
 * You can also supply multiple feedbacks in an array (feedbacks={["success", "info"]})
 */

import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import uniq from 'lodash.uniq'

import { warn, propTypeFieldMeta, propIsFeedback } from '../../utils'

import canConnectField from '../Field/canConnectField'

import FieldFeedback from '../FieldFeedback'


const FieldFeedbackSet = ({ fieldMeta, feedback, feedbacks, ...texts }) => {
  const finalStates = uniq([
    feedback, // first priority to single direct feedback
    ...(feedbacks || []), // second priority to multiple direct feedback
    get(fieldMeta, 'feedback'), // third priority to field feedback
  ])

  const feedbackElements = finalStates.filter((s) => s).map((s) => {
    const text = texts[s]

    if (!text) {
      warn(`FieldFeedbackSet was given feedback '${s}', but no matching text was supplied`)
      return null
    }

    return React.createElement(FieldFeedback, { key: s, feedback: s }, text)
  })

  return feedbackElements.length <= 0 ? null : React.createElement('div', null, feedbackElements)
}

FieldFeedbackSet.propTypes = {
  fieldMeta: propTypeFieldMeta,
  feedback: propIsFeedback,
  feedbacks: PropTypes.arrayOf(propIsFeedback),
  success: PropTypes.string,
  info: PropTypes.string,
  warning: PropTypes.string,
  danger: PropTypes.string,
}

export default canConnectField(FieldFeedbackSet)
