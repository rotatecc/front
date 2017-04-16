import { styled } from 'styletron-react'

import makeFieldGroupable from '../FieldGroup/makeFieldGroupable'

import { expandStyles } from '../../utils'


const StyledBaseLabel = styled('label', expandStyles(
  'd/inline-block',
  'mBottom/~labelMarginBottom',
))


export default makeFieldGroupable(StyledBaseLabel, 'htmlFor')
