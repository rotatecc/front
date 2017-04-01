import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const Ul = styled('ul', {
  ...expandStyles(
    'fullWidth',
    'm/0',
    'p/0/1em',
    'hMax/30em',
    'noListStyle',
    'overY/auto',
  ),
})


export default Ul
