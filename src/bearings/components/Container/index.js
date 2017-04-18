import React from 'react'
import PropTypes from 'prop-types'

import { styled } from 'styletron-react'

import { expandStyles, mapAndMergeBreakpointFn } from '../../utils'

import { breakpointOnly } from '../../mixins'


const makeGutterStylesForBreakpoint = (breakpoint) =>
  breakpointOnly(breakpoint, expandStyles(
    `pLeft/~gridGutters.${breakpoint}~halvePixels`,
    `pRight/~gridGutters.${breakpoint}~halvePixels`,
  ))


const makeMaxWidthStylesForBreakpoint = (breakpoint) =>
  breakpointOnly(breakpoint, expandStyles(
    `w/~gridContainerMaxWidths.${breakpoint}`,
    'wMax/100%',
  ))


const StyledDivFluid = styled('div', expandStyles(
  'w/100%',
  'mRight/auto',
  'mLeft/auto',

  // Gutters for each breakpoint
  mapAndMergeBreakpointFn(makeGutterStylesForBreakpoint),
))


const StyledDivStandard = styled(StyledDivFluid, expandStyles(
  'w/auto',

  // Max widths for each breakpoint (except smallest)
  mapAndMergeBreakpointFn(makeMaxWidthStylesForBreakpoint, true),
))


export default function Container({ fluid, children, ...restProps }) {
  return React.createElement(fluid ? StyledDivFluid : StyledDivStandard, restProps, children)
}

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
}

Container.defaultProps = {
  fluid: false,
}
