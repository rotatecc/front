import { styled } from 'styletron-react'

import canConnectField from '../Field/canConnectField'

import { makeField } from '../../mixins'


const StyledBaseInput = styled('textarea', makeField())


export default canConnectField(StyledBaseInput, 'id', false)
