import { styled } from 'styletron-react'

import makeFieldGroupable from '../FieldGroup/makeFieldGroupable'

import { expandStyles } from '../../utils'


const StyledBaseLabel = styled('label', expandStyles(
  // TODO
))


export default makeFieldGroupable(StyledBaseLabel, 'htmlFor')
