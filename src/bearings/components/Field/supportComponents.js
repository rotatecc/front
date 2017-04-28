import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, propIsBreakpoint } from '../../utils'

import * as mixins from '../../mixins'


export const FlexGrow = styled('div', expandStyles(
  'fGrow/1',
))


export const Marginal = styled('div', ({ hasMarginBottom }) => expandStyles(
  hasMarginBottom && 'mBottom/~fieldMarginBottom',
))

Marginal.propTypes = {
  hasMarginBottom: PropTypes.bool.isRequired,
}


// Horizontal


export const HorizontalWrapper = styled('div', ({ breakpoint }) =>
  mixins.breakpoint(breakpoint, expandStyles(
    'd/flex',
    'fJustifyContent/flex-start',
    'fAlignItems/flex-start',
  )),
)

HorizontalWrapper.propTypes = {
  breakpoint: propIsBreakpoint.isRequired,
}


export const HorizontalLeft = styled('div', ({ breakpoint }) =>
  mixins.breakpoint(breakpoint, expandStyles(
    'fBasis/0',
    'fGrow/1',
    'fShrink/0',

    'mRight/~fieldHorizontalGap',

    'tAlign/right',
  )),
)

HorizontalLeft.propTypes = {
  breakpoint: propIsBreakpoint.isRequired,
}


export const HorizontalRight = styled('div', ({ breakpoint }) =>
  mixins.breakpoint(breakpoint, expandStyles(
    'fBasis/0',
    'fGrow/5',
    'fShrink/1',
  )),
)

HorizontalRight.propTypes = {
  breakpoint: propIsBreakpoint.isRequired,
}


// Grouped


export const GroupedWrapper = styled('div')


export const GroupedRow = styled('div', ({ breakpoint }) =>
  mixins.breakpoint(breakpoint, expandStyles(
    'd/flex',

    'mLeft/~fieldGroupedGutter~halvePixels~negate',
    'mRight/~fieldGroupedGutter~halvePixels~negate',
  )),
)

GroupedRow.propTypes = {
  breakpoint: propIsBreakpoint.isRequired,
}


export const GroupedColumn = styled('div', ({ breakpoint, expanded }) =>
  mixins.breakpoint(breakpoint, expandStyles(
    expanded && expandStyles('fGrow/1', 'fShrink/0'),

    'mLeft/~fieldGroupedGutter~halvePixels',
    'mRight/~fieldGroupedGutter~halvePixels',
  )),
)

GroupedWrapper.propTypes = {
  expanded: PropTypes.bool,
}
