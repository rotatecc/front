import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash.omit'
import invariant from 'invariant'

import { styled } from 'styletron-react'

import {
  expandStyles,
  breakpointsMapAndMerge,
  validBreakpoints,
  validJustifyContent,
  validAlignItems,
  validAlignContent,
  propTypesForRowBreakpoints,
  propTypesForColumnsPassBreakpoints,
  breakpointNameToColumnsPassBreakpointName,
  breakpointsCreateSpecStringParser,
  breakpointsCreateBreakpointsForPropSpecStrings,
  breakpointsCreateSpecsOnValues,
} from '../../utils'

import { breakpointOnly } from '../../mixins'

import Column from '../Column'


const makeGutterStylesForBreakpoint = (breakpoint) =>
  breakpointOnly(breakpoint, expandStyles(
    `mLeft/~gridGutters.${breakpoint}~halvePixels~negate`,
    `mRight/~gridGutters.${breakpoint}~halvePixels~negate`,
  ))


const columnPassBreakpoints = validBreakpoints.map((bkpt) =>
  breakpointNameToColumnsPassBreakpointName(bkpt))


const specDict = {
  // justify-content
  ...breakpointsCreateSpecsOnValues(
    validJustifyContent,
    'justify-content:',
    (v) => expandStyles(`fJustifyContent/${v}`),
  ),

  // align-items
  ...breakpointsCreateSpecsOnValues(
    validAlignItems,
    'align-items:',
    (v) => expandStyles(`fAlignItems/${v}`),
  ),

  // align-content
  ...breakpointsCreateSpecsOnValues(
    validAlignContent,
    'align-content:',
    (v) => expandStyles(`fAlignContent/${v}`),
  ),

  // direction (flex-direction) (with normal=>row, reverse=>row-reverse)
  ...breakpointsCreateSpecsOnValues(
    [['normal', 'row'], ['reverse', 'row-reverse']],
    'direction:',
    (v) => expandStyles(`fDirection/${v}`),
  ),
}


const propGuardFn = (prop) => prop // pass


const specStringParser = breakpointsCreateSpecStringParser(specDict)


const parsedGuardFn = (parsed) => parsed // pass


const StyledDivGapless = styled('div', (props) => expandStyles(
  'd/flex',
  'fWrap/wrap',
  'mLeft/0',
  'mRight/0',

  breakpointsCreateBreakpointsForPropSpecStrings(
    props,
    propGuardFn, // pass
    specStringParser, // our row breakpoint spec string parser
    parsedGuardFn, // pass
  ),
))


const StyledDivGaps = styled(StyledDivGapless, expandStyles(
  breakpointsMapAndMerge(makeGutterStylesForBreakpoint),
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

  const columnPassBreakpointProps = breakpointsMapAndMerge((bkpt) => {
    const result = restProps[breakpointNameToColumnsPassBreakpointName(bkpt)]
    return result ? { [bkpt]: result } : {}
  })

  const maybeGaplessProp = (typeof gapless === 'boolean') ? { gapless } : {}

  const moddedChildren = React.Children.map(
    children,
    (child) => React.cloneElement(child, {
      ...columnPassBreakpointProps,
      ...maybeGaplessProp,
      ...child.props, // favor the child's existing breakpoint and gapless props
    }),
  )

  const finalRowProps = omit(restProps, columnPassBreakpoints)

  return React.createElement(component, finalRowProps, moddedChildren)
}

Row.propTypes = {
  children: PropTypes.node,

  gapless: PropTypes.bool,

  ...propTypesForRowBreakpoints,
  ...propTypesForColumnsPassBreakpoints,
}
