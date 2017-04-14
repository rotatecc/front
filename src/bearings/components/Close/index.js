import React from 'react'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const activeStyles = expandStyles(
  'c/~closeColor',
  'tDecor/none',
  'o/0.75',
)


const styledButton = styled('button', {
  ...expandStyles(
    'pointer',
    'float/right',
    'p/0',
    'bgc/transparent',
    'bordW/0',
    'fs/~closeFontSize',
    'fw/~closeFontWeight',
    'c/~closeColor',
    'tShadow/~closeTextShadow',
    'lh/1',
    'o/0.5',
  ),

  appearance: 'none',

  ':hover': activeStyles,
  ':focus': activeStyles,
})

export default function Close(props) {
  return React.createElement(styledButton, props, '×')
}
