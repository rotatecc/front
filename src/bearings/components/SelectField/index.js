import { styled } from 'styletron-react'

import makeFieldGroupable from '../FieldGroup/makeFieldGroupable'

import { expandStyles } from '../../utils'
import { field } from '../../mixins'


const StyledBaseSelect = styled('select', expandStyles(
  field(),
  'h/~selectHeight',
))


export default makeFieldGroupable(StyledBaseSelect, 'id')
