/**
 * FieldFeedbackSet
 *
 * Helper component to make FieldFeedback components
 * based on state
 * ex.
 * <FieldFeedbackSet
 *   state="info"
 *   success="It worked!"
 *   info="You might try this."
 *   danger="Bad!"
 * />
 * would result in one FieldFeedback-info.
 * You can also supply multiple states in an array (states={["success", "info"]})
 */

import React from 'react'
import PropTypes from 'prop-types'
import uniq from 'lodash.uniq'

import { warn, propIsFeedback } from '../../utils'

import FieldFeedback from '../FieldFeedback'


export default function FieldFeedbackSet({ state, states, ...texts }) {
  const finalStates = uniq([state, ...states])

  const feedbackElements = finalStates.map((s) => {
    const text = texts[s]

    if (!text) {
      warn(`FieldFeedbackSet was given state ${s}, but no text was supplied`)
      return null
    }

    return React.createElement(FieldFeedback, { key: s, feedback: s }, text)
  })

  return React.createElement('div', null, feedbackElements)
}

FieldFeedbackSet.propTypes = {
  state: propIsFeedback,
  states: PropTypes.arrayOf(propIsFeedback),
  success: PropTypes.string,
  info: PropTypes.string,
  warning: PropTypes.string,
  danger: PropTypes.string,
}

FieldFeedbackSet.defaultProps = {
  states: [],
}
