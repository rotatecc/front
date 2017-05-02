import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import VanillaClose from '../Close'


const Close = styled(VanillaClose, expandStyles(
  'fixed',
  'square/40px',
  'bgc/transparent',
  't/20px',
  'r/20px',
  'pointer',
))

Close.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default Close
