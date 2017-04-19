import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'
import range from 'lodash.range'
import memoize from 'lodash.memoize'

import { styled } from 'styletron-react'

import {
  expandStyles,
  mapAndMergeBreakpointFn,
  validBreakpoints,
  validAlignSelf,
} from '../../utils'

import {
  breakpoint,
  breakpointOnly,
  gridPercentageValue,
} from '../../mixins'


const makeGutterStylesForBreakpoint = memoize((breakpoint) =>
  breakpointOnly(breakpoint, expandStyles(
    `pLeft/~gridGutters.${breakpoint}~halvePixels`,
    `pRight/~gridGutters.${breakpoint}~halvePixels`,
  )))

const createSpecsOnValues = (values, pre, actualFn) =>
  (Object.assign({}, ...values.map((v) => {
    const [name, value] = Array.isArray(v) ? v : [v, v]

    return { [`${pre}${name}`]: actualFn(value) }
  })))

const specLookup = {
  // width
  auto: expandStyles(
    'fBasis/0',
    'wMax/auto',
  ),
  ...createSpecsOnValues(range(1, 13), '', (v) => expandStyles(
    `fBasis/${gridPercentageValue(v)}`,
    `wMax/${gridPercentageValue(v)}`,
  )),

  // offset
  ...createSpecsOnValues(range(0, 12), 'offset:', (v) => expandStyles(`mLeft/${gridPercentageValue(v)}`)),

  // align[-self]
  ...createSpecsOnValues(validAlignSelf, 'align:', (v) => expandStyles(`fAlignSelf/${v}`)),
}

const parseColumnSpecString = memoize((s) => {
  const specs = s.split('/')

  const resolvedSpecs = specs.map((m) => specLookup[m] || m)

  // verify
  resolvedSpecs.forEach((rs) => {
    invariant(
      typeof rs === 'object',
      `Column spec '${rs}' does not exist`,
    )
  })

  const resolvedSpecMap = Object.assign({}, ...resolvedSpecs)

  // check if a flexBasis was set (if a width value (auto|#) was set)
  const isBasisSet = Object.keys(resolvedSpecMap).includes('flexBasis')

  // correct with 'auto' if not set
  const correctedSpecMap = isBasisSet
    ? resolvedSpecMap
    : { ...resolvedSpecMap, ...specLookup.auto }

  return correctedSpecMap
})


const StyledDivGapless = styled('div', (props) => expandStyles(
  'fGrow/1',
  'fShrink/1',

  Object.assign({}, ...validBreakpoints.map((breakpointName) => {
    const propMaybe = props[breakpointName]

    // If the prop is bool true, then default to 'auto'
    const propMaybeTrueGuarded = propMaybe === true ? 'auto' : propMaybe

    if (typeof propMaybeTrueGuarded === 'string' && propMaybeTrueGuarded.length) {
      const parsed = parseColumnSpecString(propMaybeTrueGuarded)

      return breakpoint(breakpointName, parsed)
    }

    return {}
  })),
))

const StyledDivGaps = styled(StyledDivGapless, expandStyles(
  // Gutters
  mapAndMergeBreakpointFn(makeGutterStylesForBreakpoint),
))


/**
 * Column needs to determine if any of the five breakpoints
 * have been set (bool true or string), if not, default to { tablet: true }
 */


export default function Column({ gapless, children, ...restProps }) {
  const component = gapless ? StyledDivGapless : StyledDivGaps

  // test if restProps includes at least one valid breakpoint
  const propsIncludeSomeBreakpoint = Object.keys(restProps).some((x) =>
    validBreakpoints.includes(x))

  // default to tablet=auto if no breakpoint was included in props
  const realProps = propsIncludeSomeBreakpoint
    ? restProps
    : { tablet: 'auto', ...restProps }

  return React.createElement(component, realProps, children)
}

const columnBreakpointPropType = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.oneOf([true]), // allow bool true
])

Column.propTypes = {
  children: PropTypes.node,

  gapless: PropTypes.bool,

  // create breakpoint prop types for each breakpoint
  // ex. tablet: columnBreakpointPropType, desktop: columnBreakpointPropType, etc
  ...Object.assign({}, ...validBreakpoints.map((bkpt) => ({ [bkpt]: columnBreakpointPropType }))),
}

Column.defaultProps = {
  gapless: false,
}
