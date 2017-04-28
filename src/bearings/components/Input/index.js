import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import { propIsInputType } from '../../utils'

import { makeField } from '../../mixins'


const StyledBaseInput = styled('input', makeField)


const GroupableInput = canConnectField(StyledBaseInput, 'id', false)


export default function Input(props) {
  return React.createElement(GroupableInput, props)
}

Input.propTypes = {
  type: propIsInputType.isRequired, // has default
  hasIconLeft: PropTypes.bool,
  hasIconRight: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
}
