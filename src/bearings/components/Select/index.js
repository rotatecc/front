import { styled } from 'styletron-react'

import canConnectFieldId from '../Field/canConnectFieldId'

import { expandStyles } from '../../utils'
import { field } from '../../mixins'


const StyledBaseSelect = styled('select', expandStyles(
  field(),
  'h/~selectHeight',
))


export default canConnectFieldId(StyledBaseSelect, 'id', false)
