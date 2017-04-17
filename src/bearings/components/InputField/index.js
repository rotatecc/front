import React from 'react'
import { styled } from 'styletron-react'

import makeFieldGroupable from '../FieldGroup/makeFieldGroupable'

import { propIsInputFieldType } from '../../utils'

import { field } from '../../mixins'


const StyledBaseInput = styled('input', field())


const GroupableInput = makeFieldGroupable(StyledBaseInput, 'id')


export default function InputField(props) {
  return React.createElement(GroupableInput, props)
}

InputField.propTypes = {
  type: propIsInputFieldType.isRequired, // required, but also has default, so
}

InputField.defaultProps = {
  type: 'text',
}
