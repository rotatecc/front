import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, propIsCheckableType } from '../../utils'

import makeFieldGroupable from '../FieldGroup/makeFieldGroupable'


const StyledCheckGroup = styled('div', expandStyles(
  'relative',
  'd/block',
  'mBottom/~checkableMarginBottom',
))

const StyledBaseLabel = styled('label', expandStyles(
  'pointer',
  'd/inline-block',
  'pLeft/~checkableInputGutter',
))

const StyledBaseInput = styled('input', expandStyles(
  'pointer',
  'absolute',
  'mTop/~checkableInputMarginY',
  'mLeft/~checkableInputGutter~negate',

  { ':only-child': expandStyles('static') },
))

const GroupedInput = makeFieldGroupable(StyledBaseInput, 'name')


export default function Checkable({ type, value, label }) {
  return (
    <StyledCheckGroup>
      <StyledBaseLabel>
        <GroupedInput type={type} value={value} /> {label}
      </StyledBaseLabel>
    </StyledCheckGroup>
  )
}

Checkable.propTypes = {
  type: propIsCheckableType.isRequired,
  value: PropTypes.string,
  label: PropTypes.string.isRequired,
}

Checkable.defaultProps = {
  value: '',
}
