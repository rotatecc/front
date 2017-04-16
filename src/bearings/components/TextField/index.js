import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

// import { expandStyles } from '../../utils'
import { field } from '../../mixins'


const StyledBaseInput = styled('input', field())


export default function TextField({ isGrouped, groupId, ...restProps }) {
  const groupProps = isGrouped ? { id: groupId } : {}

  return <StyledBaseInput {...groupProps} {...restProps} />
}


TextField.propTypes = {
  isGrouped: PropTypes.bool,
  groupId: PropTypes.string,
  // ...restProps
}

TextField.defaultProps = {
  isGrouped: false,
  groupId: '',
}
