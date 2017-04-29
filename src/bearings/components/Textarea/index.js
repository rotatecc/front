import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import { makeInputStyles } from '../../mixins'


const StyledBaseInput = styled('textarea', makeInputStyles())


export default canConnectField(StyledBaseInput, 'id', false)
