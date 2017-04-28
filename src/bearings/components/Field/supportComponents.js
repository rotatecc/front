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


export const HorizontalLeft = styled('div', ({ breakpoint }) =>
  mixins.breakpoint(breakpoint, expandStyles(
    'fBasis/0',
    'fGrow/1',
    'fShrink/0',

    'mRight/1.5rem',

    'tAlign/right',
  )),
)


export const HorizontalRight = styled('div', ({ breakpoint }) =>
  mixins.breakpoint(breakpoint, expandStyles(
    'fBasis/0',
    'fGrow/5',
    'fShrink/1',
  )),
)


// Grouped


// TODO column spacing

export const GroupedWrapper = styled('div', ({ breakpoint }) => expandStyles(
  mixins.breakpoint(breakpoint, expandStyles(
    'd/flex',
  )),
))

GroupedWrapper.propTypes = {
  breakpoint: propIsBreakpoint.isRequired,
}


export const GroupedColumn = styled('div', ({ expanded }) => expandStyles(
  expanded && expandStyles('fGrow/1', 'fShrink/0'),
))

GroupedWrapper.propTypes = {
  expanded: PropTypes.bool,
}
