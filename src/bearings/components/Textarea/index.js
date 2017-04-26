import { styled } from 'styletron-react'

import canConnectFieldId from '../Field/canConnectFieldId'

import { field } from '../../mixins'


const StyledBaseInput = styled('textarea', field())


export default canConnectFieldId(StyledBaseInput, 'id', false)
