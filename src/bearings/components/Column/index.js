import React from 'react'
import PropTypes from 'prop-types'
import range from 'lodash.range'
import memoize from 'lodash.memoize'

import { styled } from 'styletron-react'

import {
  expandStyles,
  validBreakpoints,
  validAlignSelf,
  propTypesForColumnBreakpoints,
  aliasWidthMap,
  breakpointsMapAndMerge,
  breakpointsCreateSpecsOnValues,
  breakpointsCreateSpecStringParser,
  breakpointsCreateBreakpointsForPropSpecStrings,
} from '../../utils'

import {
  breakpointOnly,
  gridPercentageValue,
} from '../../mixins'

import theme from '../../theme'


const makeGutterStylesForBreakpoint = memoize((breakpoint) =>
  breakpointOnly(breakpoint, expandStyles(
    `pLeft/~gridGutters.${breakpoint}~halvePixels`,
    `pRight/~gridGutters.${breakpoint}~halvePixels`,
  )))


const specDict = {
  // Width
  // auto
  auto: expandStyles(
    'fBasis/0',
    'wMax/auto',
  ),
  // number
  ...breakpointsCreateSpecsOnValues(range(1, theme.gridColumns + 1), '', (v) => expandStyles(
    `fBasis/${gridPercentageValue(v)}`,
    `wMax/${gridPercentageValue(v)}`,
  )),
  // alias
  ...breakpointsCreateSpecsOnValues(Object.keys(aliasWidthMap), '', (v) => expandStyles(
    `fBasis/${aliasWidthMap[v]}`,
    `wMax/${aliasWidthMap[v]}`,
  )),

  // Offset
  ...breakpointsCreateSpecsOnValues(range(0, theme.gridColumns), 'offset:', (v) => expandStyles(`mLeft/${gridPercentageValue(v)}`)),

  // Align-self
  ...breakpointsCreateSpecsOnValues(validAlignSelf, 'align-self:', (v) => expandStyles(`fAlignSelf/${v}`)),
}


const specStringParser = breakpointsCreateSpecStringParser(specDict)


const StyledDivGapless = styled('div', (props) => expandStyles(
  'fGrow/1',
  'fShrink/1',

  breakpointsCreateBreakpointsForPropSpecStrings(
    props,
    // if a prop is bool true, then default to 'auto'
    (prop) => (prop === true ? 'auto' : prop),
    // our column string parser
    specStringParser,
    // guard parsed results by...
    (parsed) => {
      // check if a flexBasis was set (a.k.a. if a width value (auto|#) was set)
      const isBasisSet = Object.keys(parsed).includes('flexBasis')

      // correct with 'auto' if not set
      return isBasisSet
        ? parsed
        : { ...parsed, ...specDict.auto }
    },
  ),
))


const StyledDivGaps = styled(StyledDivGapless, expandStyles(
  // Gutters
  breakpointsMapAndMerge(makeGutterStylesForBreakpoint),
))


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

Column.propTypes = {
  children: PropTypes.node,

  gapless: PropTypes.bool,

  // ex. tiny: '...' or tablet: true
  ...propTypesForColumnBreakpoints,
}
