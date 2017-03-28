import { StyleSheet } from 'aphrodite'

import { createComponentWithAphrodite } from '../../utils'


const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    width: '100%',
    height: '3em',
    alignItems: 'center',
    position: 'relative',
    borderTop: '1px solid #eee',

    ':first-child': {
      borderTop: 'none',
    },
  },
})

export default createComponentWithAphrodite('li', styles.wrapper)
