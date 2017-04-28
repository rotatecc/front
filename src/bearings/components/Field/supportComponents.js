import { styled } from 'styletron-react'
import PropTypes from 'prop-types'

import { expandStyles, breakpoint, propIsBreakpoint } from '../../utils'


export const Marginal = styled('div', ({ hasMarginBottom }) => expandStyles(
  hasMarginBottom && 'mBottom/~fieldMarginBottom',
))


// Horizontal


export const HorizontalWrapper = styled('div', expandStyles(
  'd/flex',
  'fJustifyContent/flex-start',
  'fAlignItems/flex-start',
))


export const HorizontalLeft = styled('div', expandStyles(
  'fBasis/0',
  'fGrow/1',
  'fShrink/0',

  'mRight/1.5rem',

  'tAlign/right',
))


export const HorizontalRight = styled('div', expandStyles(
  'fBasis/0',
  'fGrow/5',
  'fShrink/1',

  'd/flex',
))


// Grouped


// TODO column spacing

export const GroupedWrapper = styled('div', ({ breakpoint: bkpt }) => expandStyles(
  breakpoint(bkpt, expandStyles(
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
