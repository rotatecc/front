import { StyleSheet } from 'aphrodite'

import { createComponentWithAphrodite } from '../../utils'


const styles = StyleSheet.create({
  h2: {
    fontSize: '1.5em',
  },
})


export default createComponentWithAphrodite('h2', styles.h2)
