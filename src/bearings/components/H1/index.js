import { StyleSheet } from 'aphrodite'

import { createComponentWithAphrodite } from '../../utils'


const styles = StyleSheet.create({
  h1: {
    fontSize: '2em',
    marginBottom: '0.25em',
  },
})


export default createComponentWithAphrodite('h1', styles.h1)
