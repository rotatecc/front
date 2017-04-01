/**
 * A link to a certain page, an anchor tag
 */

import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


export default styled('a', {
  ...expandStyles('c/p~primary', 'pointer'),

  ':hover': expandStyles('c/p~primaryDark'),
})
