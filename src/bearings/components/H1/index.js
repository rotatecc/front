import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('h1', {
  ...expandStyles('fs/2rem'),
  fontWeight: 800,
  marginBottom: '0.25em',
})
