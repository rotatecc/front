/**
 * Structured
 *
 * Presentational logic for Field happens here
 */

import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import { Marginal } from './supportComponents'


export const handleAddons = (children, { addons }) => {
  if (!addons) {
    return children
  }

  // TODO

  return children
}


export const handleGrouped = (children, { grouped }) => {
  if (!grouped) {
    return children
  }

  // TODO

  return children
}


export const handleHorizontal = (children, { horizontal }) => {
  if (!horizontal) {
    return children
  }

  // TODO

  return children
}


export const handleMarginBottom = (children, { isRootField, noMargin }) =>
  <Marginal hasMarginBottom={isRootField && !noMargin}>{children}</Marginal>


export const Structured = (props) => {
  const {
    // Already validated by Field:
    /* eslint-disable react/prop-types */
    children,
    addons,
    grouped,
    /* eslint-enable react/prop-types */
  } = props

  invariant(
    !(addons && grouped),
    'Field cannot be grouped and have addons, try using a nested Field',
  )

  const transformations = [
    handleAddons,
    handleGrouped,
    handleHorizontal,
    handleMarginBottom,
  ].filter((x) => x)

  const finalChildren = transformations.reduce(
    (acc, t) => t(React.Children.toArray(acc), props),
    children,
  )

  return (
    <div>
      {finalChildren}
    </div>
  )
}

Structured.propTypes = {
  isRootField: PropTypes.bool.isRequired,
  // ...many more, already validated by Field!
}


export default Structured
