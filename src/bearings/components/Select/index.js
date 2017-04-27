import { styled } from 'styletron-react'

import canConnectFieldId from '../Field/canConnectFieldId'

import { expandStyles } from '../../utils'
import { makeField } from '../../mixins'


const StyledBaseSelect = styled('select', expandStyles(
  makeField(),
  'h/~selectHeight',
))


export default canConnectFieldId(StyledBaseSelect, 'id', false)
