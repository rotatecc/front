import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles, Close as VanillaClose } from '@/bearings'


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

  color: PropTypes.string.isRequired, // has default
}

Close.defaultProps = {
  color: '~white',
}

export default Close
