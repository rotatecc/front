import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const StyledCheckGroup = styled('div', expandStyles(
  'relative',
  'd/block',
  'mBottom/~checkableMarginBottom',
))

const StyledBaseLabel = styled('label', expandStyles(
  'd/inline-block',
  'pLeft/~checkableInputGutter',
))

const StyledBaseInput = styled('input', expandStyles(
  'absolute',
  'mTop/~checkableInputMarginY',
  'mLeft/~checkableInputGutter~negate',

  { ':only-child': expandStyles('static') },
))


export default function Checkable({ type, label }) {
  return (
    <StyledCheckGroup>
      <StyledBaseLabel>
        <StyledBaseInput type={type} /> {label}
      </StyledBaseLabel>
    </StyledCheckGroup>
  )
}

Checkable.propTypes = {
  type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
  label: PropTypes.string.isRequired,
}
