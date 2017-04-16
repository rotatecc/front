import React from 'react'
import PropTypes from 'prop-types'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'


const StyledBaseLabel = styled('label', expandStyles())


export default function Label({ isGrouped, groupId, ...restProps }) {
  const groupProps = isGrouped ? { htmlFor: groupId } : {}

  return <StyledBaseLabel {...groupProps} {...restProps} />
}


Label.propTypes = {
  isGrouped: PropTypes.bool,
  groupId: PropTypes.string,
  // ...restProps
}

Label.defaultProps = {
  isGrouped: false,
  groupId: '',
}
