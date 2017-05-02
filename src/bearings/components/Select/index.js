import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import {
  expandStyles,
  propIsBrand,
  propIsSize,
  propTypeFieldMeta,
} from '../../utils'
import { makeInputStyles } from '../../mixins'


const Wrapper = styled('div', ({ hasIconRight }) => expandStyles(
  'relative',

  !hasIconRight && {
    // caret
    ':after': expandStyles(
      'absolute',
      'mTop/-0.375em',
      't/50%',
      'r/1.125em',
      'd/block',
      'square/~selectCaretSize',
      'bordW/1px',
      'bordS/solid',
      'bordC/~selectCaretColor',
      'z/~zIndices.selectCaret',
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
  `w/${props.expanded ? '100%' : 'auto'}`, // override input style maybe (100%)
))


const ActualSelect = canConnectField(StyledBaseSelect, 'id', false)


export default function Select(props) {
  // Wrap actual select so that we can position a custom caret
  // Force hasIconRight on field since it will always
  // have something there (caret or Icon)
  return <Wrapper {...props}><ActualSelect {...props} hasIconRight /></Wrapper>
}

Select.propTypes = {
  expanded: PropTypes.bool,

  brand: propIsBrand,
  size: propIsSize,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,

  hasIconLeft: PropTypes.bool,
  hasIconRight: PropTypes.bool,

  fieldMeta: propTypeFieldMeta,
}
