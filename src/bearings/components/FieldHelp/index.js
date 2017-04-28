import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const FieldHelp = styled('div', expandStyles(
  'mTop/0.25rem',

  'fs/~fontSizeSm',
))

FieldHelp.propTypes = {
}

export default FieldHelp
