import React from 'react'
import Button from '../Button'

import { propIsSize, propIsButtonBrand } from '../../utils'


function ButtonOutlined(props) {
  return <Button {...props} outline />
}


Button.propTypes = {
  size: propIsSize,
  brand: propIsButtonBrand,
  focus: React.PropTypes.bool,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
}


Button.defaultProps = {
  size: 'normal',
  brand: 'primary',
  focus: false,
  active: false,
  disabled: false,
}


export default ButtonOutlined
