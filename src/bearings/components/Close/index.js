import { styled } from 'styletron-react'

import { expandStyles, propIsSize } from '../../utils'


const beforeAndAfterCommonStyles = [
  'absolute',
  'd/block',
  't/50%',
  'l/50%',

  'bgc/~white',

  {
    content: '""',
    transform: 'translateX(-50%) translateY(-50%) rotate(45deg)',
    transformOrigin: 'center center',
  },
]


const sizeLookup = {
  small: '16px',
  normal: '20px',
  large: '32px',
}


const hoverStyles = expandStyles('bgc/rgba(10, 10, 10, 0.3)')
const activeStyles = expandStyles('bgc/rgba(10, 10, 10, 0.4)')


const Close = styled('button', ({ size }) => {
  const sideLength = sizeLookup[size] || 0

  return expandStyles(
    'noOutline',
    'pointer',
    'tDecor/none',

    'relative',
    'd/inline-block',
    'bordW/0',
    'fs/1rem',
    'vAlign/top',

    `square/${sideLength}`,

    'radius/~borderRadiusInfinite',
    'bgc/rgba(10, 10, 10, 0.2)',

    {
      userSelect: 'none',
      appearance: 'none',

      ':before': expandStyles(...beforeAndAfterCommonStyles, 'w/50%', 'h/2px'),
      ':after': expandStyles(...beforeAndAfterCommonStyles, 'w/2px', 'h/50%'),

      ':hover': hoverStyles,
      ':focus': hoverStyles,
      ':active': activeStyles,
    },
  )
})

Close.propTypes = {
  size: propIsSize.isRequired, // has default
}

Close.defaultProps = {
  size: 'normal',
}

export default Close
