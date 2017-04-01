import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('li', {
  ...expandStyles(
    'relative',
    'd/flex',
    'fullWidth',
    'h/3em',
    'fAlign/center',
  ),
  borderTop: '1px solid #eee',

  ':first-child': {
    borderTop: 'none',
  },
})
