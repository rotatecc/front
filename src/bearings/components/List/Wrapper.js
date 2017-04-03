import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const Wrapper = styled('div', expandStyles(
  'fullWidth',
  'm/0',
  'p/0',
  'bgc/p~white',
  'bordS/solid',
  'bordW/1px',
  'bordC/p~gray',
))


export default Wrapper
