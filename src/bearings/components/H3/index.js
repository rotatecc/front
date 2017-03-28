import { StyleSheet } from 'aphrodite'

import { createComponentWithAphrodite } from '../../utils'


const styles = StyleSheet.create({
  h3: {
    fontSize: '1.5em',
  },
})


export default createComponentWithAphrodite('h3', styles.h3)
