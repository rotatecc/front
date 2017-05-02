import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import { breakpoint } from '../../mixins'


const ModalContent = styled('div', expandStyles(
  'relative',
  'm/80px/20px/20px',
  'hMax/calc(100vh - 100px)',
  'overY/auto',
  'overX/auto',

  breakpoint('tablet', expandStyles(
    'm/0',
    'hMax/calc(100vh - 40px)',
    'w/640px',
  )),
))

export default ModalContent
