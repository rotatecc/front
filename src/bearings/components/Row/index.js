import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import { styled } from 'styletron-react'

import { expandStyles, mapAndMergeBreakpointFn } from '../../utils'

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

  // If gapless, apply gapless=true to all children (Column)
  const moddedChildren = !gapless
    ? children
    : React.Children.map(
      children,
      (child) => {
        // child must be a Column
        invariant(
          child.type === Column,
          'All direct children of Row must be a Column',
        )

        return React.cloneElement(child, { gapless: true })
      },
    )

  return React.createElement(component, restProps, moddedChildren)
}

Row.propTypes = {
  gapless: PropTypes.bool,
  children: PropTypes.node,
}

Row.defaultProps = {
  gapless: false,
}
