import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

import { propIsSize } from '../../utils'


function ButtonLink(props) {
  return <Button {...props} link />
}


Button.propTypes = {
  size: propIsSize,
  focus: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}


Button.defaultProps = {
  size: 'normal',
  focus: false,
  active: false,
  disabled: false,
}


export default ButtonLink
