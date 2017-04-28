import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles, propIsIconSize } from '../../utils'


const Spinner = styled('div', ({ sizeUnits }) => expandStyles(
  'd/inline-block',
  `square/${sizeUnits}`,
  'radius/~borderRadiusInfinite',
  {
    animation: 'spin 500ms infinite linear',
    border: '2px solid #dbdbdb',
    borderRightColor: 'transparent',
  },
))


const sizeMap = {
  normal: '1em',
  1: '1em',
  2: '2em',
  3: '3em',
  4: '4em',
  5: '5em',
}


export default function ControlSpinner({ size }) {
  return React.createElement(Spinner, { sizeUnits: sizeMap[size] })
}

ControlSpinner.propTypes = {
  size: propIsIconSize.isRequired, // has default
}

ControlSpinner.defaultProps = {
  size: 'normal',
}
