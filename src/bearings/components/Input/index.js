import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import {
  propIsInputType,
  propTypeFieldMeta,
  propIsBrand,
  propIsSize,
} from '../../utils'

import { makeInputStyles } from '../../mixins'


const Input = styled('input', makeInputStyles)

Input.propTypes = {
  type: propIsInputType.isRequired, // has default

  fieldMeta: propTypeFieldMeta,

  brand: propIsBrand,
  size: propIsSize,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,

  hasIconLeft: PropTypes.bool,
  hasIconRight: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
}


export default canConnectField(Input, 'id', false)
