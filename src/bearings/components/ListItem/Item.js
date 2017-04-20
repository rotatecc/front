import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('div', expandStyles(
  'd/flex',
  'fullWidth',
  'fullHeight',
  'fJustifyContent/space-between',
  'fAlignItems/center',
))
