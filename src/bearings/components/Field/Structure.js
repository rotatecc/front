/**
 * Structure
 *
 * Presentational logic for Field happens here
 */

import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'
import get from 'lodash.get'

import Label from '../Label'

import {
  FlexGrow,
  Marginal,
  GroupedRow,
  GroupedColumn,
  AddonsRow,
  AddonsColumn,
  HorizontalWrapper,
  HorizontalLeft,
  HorizontalRight,
} from './supportComponents'


// Helpers


/**
 * Separate single child Label from other children
 * @param  {array} children array of children
 * @return {object}         shape: { label: ..., restChildren: [...] }
 */
export const separateChildLabel = (children) =>
  children.reduce((acc, child) => {
    if (child.type === Label) {
      invariant(
        acc.label === null,
        'Fields cannot have more than one Label as a direct child',
      )

      return { ...acc, label: child }
    }

    return { ...acc, restChildren: [...acc.restChildren, child] }
  }, { label: null, restChildren: [] })


//
// Transformations on Field children
//


export const handleAddons = (children, { addons }) => {
  if (!addons) {
    return children
  }

  const { label, restChildren } = separateChildLabel(children)

  const columns = restChildren.map((child, i) => (
    <AddonsColumn
      key={get(child, 'key', i)}
      expanded={get(child, 'props.expanded', false)}
    >
      {child}
    </AddonsColumn>
  ))

  return [
    label,
    <AddonsRow>
      {columns}
    </AddonsRow>,
  ]
}


export const handleGrouped = (children, { grouped }) => {
  if (!grouped) {
    return children
  }

  // bool true defaults to tablet
  const breakpoint = grouped === true ? 'tablet' : grouped

  const { label, restChildren } = separateChildLabel(children)

  const columns = restChildren.map((child, i) => (
    <GroupedColumn
      key={get(child, 'key', i)}
      breakpoint={breakpoint}
      expanded={get(child, 'props.expanded', false)}
    >
      {child}
    </GroupedColumn>
  ))

  return [
    label,
    <GroupedRow breakpoint={breakpoint}>
      {columns}
    </GroupedRow>,
  ]
}


export const handleHorizontal = (children, { horizontal }) => {
  if (!horizontal) {
    return children
  }

  const { label, restChildren } = separateChildLabel(children)

  // bool true defaults to tablet
  const breakpoint = horizontal === true ? 'tablet' : horizontal

  const bkptProp = { breakpoint }

  const left = !label
    ? null
    : <HorizontalLeft {...bkptProp}>{label}</HorizontalLeft>

  const right = restChildren.length === 0
    ? null
    : <HorizontalRight {...bkptProp}>{restChildren}</HorizontalRight>

  return (
    <HorizontalWrapper {...bkptProp}>
      {left}
      {right}
    </HorizontalWrapper>
  )
}


export const handleMarginBottom = (children, { isRootField, noMargin }) =>
  <Marginal hasMarginBottom={isRootField && !noMargin}>{children}</Marginal>


const transformations = [
  handleAddons,
  handleGrouped,
  handleHorizontal,
  handleMarginBottom,


//
// Structure component
//
]

const Structure = (props) => {
  // Run series of transformations on children
  const finalChildren = transformations.reduce(
    (acc, t) => t(React.Children.toArray(acc), props),
    props.children,
  )

  return (
    <FlexGrow>
      {finalChildren}
    </FlexGrow>
  )
}

Structure.propTypes = {
  children: PropTypes.node.isRequired,
  isRootField: PropTypes.bool.isRequired,
  // ...many more, already validated by Field!
}


export default Structure
