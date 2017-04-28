import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, propIsCheckableType } from '../../utils'


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


export default function Checkable({ name, type, value, label }) {
  return (
    <StyledCheckGroup>
      <StyledBaseLabel>
        <StyledBaseInput name={name} type={type} value={value} /> {label}
      </StyledBaseLabel>
    </StyledCheckGroup>
  )
}

Checkable.propTypes = {
  name: PropTypes.string,
  type: propIsCheckableType.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired, // has default (blank)
}

Checkable.defaultProps = {
  value: '',
}
