/**
 * A link to a certain page, an anchor tag
 */

import { StyleSheet } from 'aphrodite'

import { createComponentWithAphrodite } from '../../utils'

import theme from '../../theme'


const styles = StyleSheet.create({
  a: {
    cursor: 'pointer',
    color: theme.palette.primary,

    ':hover': {
      color: theme.palette.primaryDark,
    },
  },
})


export default createComponentWithAphrodite('a', styles.a)
