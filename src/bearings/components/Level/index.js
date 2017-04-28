/**
 * Level
 *
 * Allowed children: AtCenter, AtLeft, AtRight
 */


import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import { styled } from 'styletron-react'

import { expandStyles, propIsBreakpoint, propIsAlignItems } from '../../utils'

import * as mixins from '../../mixins'

import AtCenter from '../AtCenter'
import AtLeft from '../AtLeft'
import AtRight from '../AtRight'


const LevelWrapper = styled('div', ({ breakpoint: bkpt, alignItems }) =>
  mixins.breakpoint(bkpt, expandStyles(
    'd/flex',
    'fJustifyContent/space-between',
    `fAlignItems/${alignItems}`,
  )))

LevelWrapper.propTypes = {
  breakpoint: propIsBreakpoint.isRequired,
  alignItems: propIsAlignItems.isRequired,
}


// Vertical spacer under breakpoint, horizontal spacer at/above breakpoint
const LevelSpacer = styled('div', ({ breakpoint: bkpt }) => expandStyles(
  'fGrow/0',
  'fShrink/0',
  'h/1.5rem',
  'w/1px',

  mixins.breakpoint(bkpt, expandStyles(
    'h/1px',
    'w/1.5rem',
  )),
))

LevelSpacer.propTypes = {
  breakpoint: propIsBreakpoint.isRequired,
}


const LevelCenter = styled('div', ({ breakpoint: bkpt }) => expandStyles(
  // 'fBasis/auto',
  // 'fGrow/0',
  // 'fShrink/0',

  mixins.breakpoint(bkpt, expandStyles('d/flex')),

  'fAlignItems/center',

  // overriden by extending components
  'fJustifyContent/center',
))

LevelCenter.propTypes = {
  breakpoint: propIsBreakpoint.isRequired,
}


const LevelLeft = styled(LevelCenter, expandStyles(
  'fJustifyContent/flex-start',
))


const LevelRight = styled(LevelCenter, expandStyles(
  'fJustifyContent/flex-end',
))


const validChildPositions = [AtCenter, AtLeft, AtRight]


const positionReplacements = [LevelCenter, LevelLeft, LevelRight]


export default function Level({ breakpoint, alignItems, children, ...restProps }) {
  // Replace AtCenter/AtLeft/AtRight with Level-specific "implementations"
  const childrenReplaced = React.Children.map(children, (child) => {
    const positionIndex = validChildPositions.indexOf(child.type)

    // Verify children are AtCenter/AtLeft/AtRight
    invariant(
      positionIndex > -1,
      `Level children must be of types {${validChildPositions.map((p) => p.name).join(',')}}`,
    )

    return React.createElement(
      positionReplacements[positionIndex],
      { breakpoint, ...child.props },
    )
  })

  // Intersperse LevelSpacer in children
  const childrenFinal = []
  .concat(
    ...React.Children.toArray(childrenReplaced)
      .map((e, i) =>
        ([<LevelSpacer key={`spacer${i}`} breakpoint={breakpoint} />, e])),
    )
  .slice(1)

  return React.createElement(
    LevelWrapper,
    { breakpoint, alignItems, ...restProps },
    childrenFinal,
  )
}

Level.propTypes = {
  breakpoint: propIsBreakpoint.isRequired, // has default
  alignItems: propIsAlignItems.isRequired, // has default

  children: PropTypes.node,
}

Level.defaultProps = {
  breakpoint: 'tablet',
  alignItems: 'center',
}
