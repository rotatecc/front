import { StyleSheet } from 'aphrodite'

import { createComponentWithAphrodite } from '../../utils'


const styles = StyleSheet.create({
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
})

export default createComponentWithAphrodite('div', styles.item)
