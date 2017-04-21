import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'

import { propIsSize, propIsBrandOrDefault } from '../../utils'


function ButtonOutlined(props) {
  return <Button {...props} outline />
}


Button.propTypes = {
  size: propIsSize,
  brand: propIsBrandOrDefault,
  focus: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}


Button.defaultProps = {
  size: 'normal',
  brand: 'primary',
  focus: false,
  active: false,
  disabled: false,
}


export default ButtonOutlined
