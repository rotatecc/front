import React from 'react'
import PropTypes from 'prop-types'
import pick from 'lodash.pick'
import omit from 'lodash.omit'
import invariant from 'invariant'

import { styled } from 'styletron-react'

import {
  expandStyles,
  mapAndMergeBreakpointFn,
  validBreakpoints,
  propTypesForColumnBreakpoints,
} from '../../utils'

import { breakpointOnly } from '../../mixins'

import Column from '../Column'


const makeGutterStylesForBreakpoint = (breakpoint) =>
  breakpointOnly(breakpoint, expandStyles(
    `mLeft/~gridGutters.${breakpoint}~halvePixels~negate`,
    `mRight/~gridGutters.${breakpoint}~halvePixels~negate`,
  ))


const StyledDivGapless = styled('div', expandStyles(
  'd/flex',
  'fWrap/wrap',
  'mLeft/0',
  'mRight/0',
))


const StyledDivGaps = styled(StyledDivGapless, expandStyles(
  mapAndMergeBreakpointFn(makeGutterStylesForBreakpoint),
))


export default function Row({ gapless, children, ...restProps }) {
  const component = gapless ? StyledDivGapless : StyledDivGaps

  React.Children.forEach((child) => {
    // Verify child is a Column
    invariant(
      child.type === Column,
      'All direct children of Row must be a Column',
    )
  })

  const breakpointProps = pick(restProps, validBreakpoints)

  const maybeGaplessProp = gapless ? { gapless: true } : {}

  const moddedChildren = React.Children.map(
    children,
    (child) => React.cloneElement(child, {
      ...breakpointProps,
      ...child.props, // favor the child's existing breakpoint props
      ...maybeGaplessProp, // ...not for gapless, since it's a default Column prop
    }),
  )

  const finalRowProps = omit(restProps, validBreakpoints)

  return React.createElement(component, finalRowProps, moddedChildren)
}

Row.propTypes = {
  children: PropTypes.node,

  gapless: PropTypes.bool,

  // ex. tiny: '...' or tablet: true
  ...propTypesForColumnBreakpoints,
}

Row.defaultProps = {
  gapless: false,
}
