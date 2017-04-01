import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('h4', {
  ...expandStyles('fs/1.3rem'),
  fontWeight: 700,
})
