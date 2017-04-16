import { styled } from 'styletron-react'

import makeFieldGroupable from '../FieldGroup/makeFieldGroupable'

import { field } from '../../mixins'


const StyledBaseInput = styled('input', field())


export default makeFieldGroupable(StyledBaseInput, 'id')
