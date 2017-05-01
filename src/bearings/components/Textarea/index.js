import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import {
  propIsBrand,
  propIsSize,
  propTypeFieldMeta,
} from '../../utils'
import { makeInputStyles } from '../../mixins'


const Textarea = styled('textarea', makeInputStyles)

Textarea.propTypes = {
  brand: propIsBrand,
  size: propIsSize,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,

  fieldMeta: propTypeFieldMeta,
}


export default canConnectField(Textarea, 'id', false)
