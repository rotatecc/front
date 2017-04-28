/**
 * Structure
 *
 * Presentational logic for Field happens here
 */

import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import Label from '../Label'

import {
  FlexGrow,
  Marginal,
  HorizontalWrapper,
  HorizontalLeft,
  HorizontalRight,
} from './supportComponents'


//
// Transformations on Field children
//


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

  const { label, restChildren } = children.reduce((acc, child) => {
    if (child.type === Label) {
      invariant(
        acc.label === null,
        'Horizontal Fields cannot have more than one Label as a direct child',
      )

      return { ...acc, label: child }
    }

    return { ...acc, restChildren: [...acc.restChildren, child] }
  }, { label: null, restChildren: [] })

  const left = !label ? null : <HorizontalLeft>{label}</HorizontalLeft>

  const right = restChildren.length === 0 ? null : <HorizontalRight>{restChildren}</HorizontalRight>

  return (
    <HorizontalWrapper>
      {left}
      {right}
    </HorizontalWrapper>
  )
}


export const handleMarginBottom = (children, { isRootField, noMargin }) =>
  <Marginal hasMarginBottom={isRootField && !noMargin}>{children}</Marginal>


//
// Structure component
//


export const Structure = (props) => {
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

  // Run series of transformations on children
  const finalChildren = transformations.reduce(
    (acc, t) => t(React.Children.toArray(acc), props),
    children,
  )

  return (
    <FlexGrow>
      {finalChildren}
    </FlexGrow>
  )
}

Structure.propTypes = {
  isRootField: PropTypes.bool.isRequired,
  // ...many more, already validated by Field!
}


export default Structure
