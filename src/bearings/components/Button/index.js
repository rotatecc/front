import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('button', expandStyles(
  'noOutline',
  'bordS/solid',
  'bordW/1px',
  'bordC/~gray',
  'ff/~textFieldFontFamily',
))
