import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('h1', {
  ...expandStyles('fs/2em'),
  marginBottom: '0.25em',
})
