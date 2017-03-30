import { styled } from 'styletron-react'

// import theme from '../../theme'

// import { expandStyles } from '../../utils'


export default styled('li', {
  display: 'flex',
  width: '100%',
  height: '3em',
  alignItems: 'center',
  position: 'relative',
  borderTop: '1px solid #eee',

  ':first-child': {
    borderTop: 'none',
  },
})
