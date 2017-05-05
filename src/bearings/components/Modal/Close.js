import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import VanillaClose from '../Close'


const Close = styled(VanillaClose, expandStyles(
  'fixed',
  'square/30px',
  'bgc/transparent',
  't/17px',
  'r/17px',
  'pointer',
  'z/~zIndices.modalClose',
))

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Close
