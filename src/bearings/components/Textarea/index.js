import { styled } from 'styletron-react'

import canConnectFieldId from '../Field/canConnectFieldId'

import { makeField } from '../../mixins'


const StyledBaseInput = styled('textarea', makeField())


export default canConnectFieldId(StyledBaseInput, 'id', false)
