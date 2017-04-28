import React from 'react'
import { styled } from 'styletron-react'
import PropTypes from 'prop-types'

import { expandStyles, propIsBreakpoint } from '../../utils'

import * as mixins from '../../mixins'


export const Marginal = styled('div', ({ hasMarginBottom }) => expandStyles(
  hasMarginBottom && 'mBottom/~fieldMarginBottom',
))

Marginal.propTypes = {
  hasMarginBottom: PropTypes.bool.isRequired,
}


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


// StructuredField (logic happens here)


export const StructuredField = (props) => {
  const {
    isRootField,

    // Already validated by Field:
    /* eslint-disable react/prop-types */
    children,
    noMargin,
    horizontal,
    addons,
    grouped,
    /* eslint-enable react/prop-types */
  } = props

  return (
    <Marginal hasMarginBottom={!noMargin && isRootField}>
      {children}
    </Marginal>
  )
}

StructuredField.propTypes = {
  isRootField: PropTypes.bool.isRequired,
  // ...many more, already validated by Field!
}
