import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('textarea', {
  ...expandStyles(
    'noOutline',
    'bordS/solid',
    'bordW/1px',
    'bordC/p~gray',
    'ff/f~textField~family',
  ),
})
