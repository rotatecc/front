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


const activeStyles = expandStyles('bgc/rgba(10, 10, 10, 0.3)')


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

    `w/${sideLength}`,
    `h/${sideLength}`,

    'radius/290486px',
    'bgc/rgba(10, 10, 10, 0.2)',

    {
      userSelect: 'none',
      appearance: 'none',

      ':before': expandStyles(...beforeAndAfterCommonStyles, 'w/50%', 'h/2px'),
      ':after': expandStyles(...beforeAndAfterCommonStyles, 'w/2px', 'h/50%'),

      ':hover': activeStyles,
      ':active': activeStyles,
      ':focus': activeStyles,
    },
  )
})

Close.propTypes = {
  size: propIsSize.isRequired,
}

Close.defaultProps = {
  size: 'normal',
}

export default Close
