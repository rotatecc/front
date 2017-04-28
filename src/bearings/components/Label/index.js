import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import { expandStyles } from '../../utils'


const StyledBaseLabel = styled('label', expandStyles(
  'd/inline-block',
  'mBottom/~labelMarginBottom',
))


// Since there is only one Label per Field, we can safely
// set always=true (always attach htmlFor if descendent of Field)
export default canConnectField(StyledBaseLabel, 'htmlFor', true)
