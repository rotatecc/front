import React from 'react'
import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import { expandStyles } from '../../utils'
import { makeInputStyles } from '../../mixins'


const Wrapper = styled('div', ({ hasIconRight }) => expandStyles(
  'relative',

  !hasIconRight && {
    // caret
    ':after': expandStyles(
      'absolute',
      'z/4',
      'mTop/-0.375em',
      't/50%',
      'r/1.125em',
      'd/block',
      'square/0.5em',
      'bordW/1px',
      'bordS/solid',
      'bordC/~brandPrimary',
      {
        borderRight: 0,
        borderTop: 0,
        content: '" "',
        pointerEvents: 'none',
        transform: 'rotate(-45deg)',
      },
    ),
  },
))


const StyledBaseSelect = styled('select', (props) => expandStyles(
  makeInputStyles(props),
  'h/~selectHeight',
))


const ActualSelect = canConnectField(StyledBaseSelect, 'id', false)


export default function Select(props) {
  // Wrap actual select so that we can position a custom caret
  // Force hasIconRight on field since it will always
  // have something there (caret or Icon)
  return <Wrapper {...props}><ActualSelect {...props} hasIconRight /></Wrapper>
}
