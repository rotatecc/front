import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'
import { field } from '../../mixins'


export default styled('select', expandStyles(
  field(),
  'h/~selectHeight',
  'bordW/~selectBorderWidth',
))
