import React from 'react'
import Button from '../Button'

import { propIsSize } from '../../utils'


function ButtonLink(props) {
  return <Button {...props} link />
}


Button.propTypes = {
  size: propIsSize,
  focus: React.PropTypes.bool,
  active: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
}


Button.defaultProps = {
  size: 'normal',
  focus: false,
  active: false,
  disabled: false,
}


export default ButtonLink
