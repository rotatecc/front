/**
 * FieldFeedbackSet
 *
 * Helper component to make FieldFeedback components
 * based on state
 * ex.
 * <FieldFeedbackSet
 *   brand="info"
 *   success="It worked!"
 *   info="You might try this."
 *   danger="Bad!"
 * />
 * would result in one FieldFeedback-info.
 * You can also supply multiple brands in an array (brands={["success", "info"]})
 */

import React from 'react'
import PropTypes from 'prop-types'
import get from 'lodash.get'
import uniq from 'lodash.uniq'

import { warn, propTypeFieldMeta, propIsBrand } from '../../utils'

import canConnectField from '../Field/canConnectField'

import FieldFeedback from '../FieldFeedback'


const FieldFeedbackSet = ({ fieldMeta, brand, brands, ...texts }) => {
  const finalStates = uniq([
    brand, // first priority to single direct brand
    ...(brands || []), // second priority to multiple direct brand
    get(fieldMeta, 'brand'), // third priority to field brand
  ])

  const feedbackElements = finalStates.filter((s) => s).map((s) => {
    const text = texts[s]

    if (!text) {
      warn(`FieldFeedbackSet was given brand '${s}', but no matching text was supplied`)
      return null
    }

    return React.createElement(FieldFeedback, { key: s, brand: s }, text)
  })

  return feedbackElements.length === 0 ? null : React.createElement('div', null, feedbackElements)
}

FieldFeedbackSet.propTypes = {
  fieldMeta: propTypeFieldMeta,
  brand: propIsBrand,
  brands: PropTypes.arrayOf(propIsBrand),
  success: PropTypes.string,
  info: PropTypes.string,
  warning: PropTypes.string,
  danger: PropTypes.string,
}

export default canConnectField(FieldFeedbackSet)
