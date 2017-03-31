import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const Ul = styled('div', {
  ...expandStyles(
    'fullWidth',
    'm/0',
    'p/0/1em',
    'hMax/30em',
  ),

  listStyle: 'none',
  overflowY: 'auto',
})


export default Ul
