import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import { propIsInputType, propTypeFieldMeta, propIsBrand, propIsSize } from '../../utils'

import { makeInputStyles } from '../../mixins'


const Input = styled('input', makeInputStyles)

Input.propTypes = {
  type: propIsInputType.isRequired, // has default

  brand: propIsBrand,
  size: propIsSize,

  hasIconLeft: PropTypes.bool,
  hasIconRight: PropTypes.bool,

  fieldMeta: propTypeFieldMeta,
}

Input.defaultProps = {
  type: 'text',
}


export default canConnectField(Input, 'id', false)
