import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const Wrapper = styled('div', {
  ...expandStyles(
    'fullWidth',
    'm/0',
    'p/0',
    'bgc/p~white',
    'bord/1px/solid/#cccccc',
  ),
})


export default Wrapper
