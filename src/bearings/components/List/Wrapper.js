import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const Wrapper = styled('div', {
  ...expandStyles(
    'fullWidth',
    'm/0',
    'p/0',
    'bgc/p~white',
  ),

  overflow: 'hidden',
  border: '1px solid #ccc',
})


export default Wrapper
