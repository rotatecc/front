import React from 'react'
import { styled } from 'styletron-react'

import canConnectFieldId from '../Field/canConnectFieldId'

import { propIsInputType } from '../../utils'

import { field } from '../../mixins'


const StyledBaseInput = styled('input', field())


const GroupableInput = canConnectFieldId(StyledBaseInput, 'id', false)


export default function Input(props) {
  return React.createElement(GroupableInput, props)
}

Input.propTypes = {
  type: propIsInputType.isRequired, // required, but also has default, so
}

Input.defaultProps = {
  type: 'text',
}
