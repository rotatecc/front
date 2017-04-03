import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('input', {
  ...expandStyles(
    'bordS/solid',
    'bordW/1px',
    'bordC/p~gray',
  ),

  ':hover': expandStyles(),
})
