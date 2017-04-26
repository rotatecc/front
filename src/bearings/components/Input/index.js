import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import canConnectFieldId from '../Field/canConnectFieldId'

import { propIsInputType } from '../../utils'

import { field } from '../../mixins'


const StyledBaseInput = styled('input', ({ hasIconLeft, hasIconRight }) =>
  field({ hasIconLeft, hasIconRight }))


const GroupableInput = canConnectFieldId(StyledBaseInput, 'id', false)


export default function Input(props) {
  return React.createElement(GroupableInput, props)
}

Input.propTypes = {
  type: propIsInputType,
  hasIconLeft: PropTypes.bool,
  hasIconRight: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  hasIconLeft: false,
  hasIconRight: false,
}
