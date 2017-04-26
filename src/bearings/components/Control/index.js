import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import AtLeft from '../AtLeft'
import AtRight from '../AtRight'

import Icon from '../Icon'


const ControlWrapper = styled('div', expandStyles()) // TODO


const ControlLeft = styled('div', expandStyles()) // TODO

const ControlRight = styled(ControlLeft, expandStyles()) // TODO


const validChildPositions = [AtLeft, AtRight]


const positionReplacements = [ControlLeft, ControlRight]


export default function Control({ children, ...restProps }) {
  // Replace AtLeft/AtRight with Control-specific "implementations"
  const childrenReplaced = React.Children.map(children, (child) => {
    const positionIndex = validChildPositions.indexOf(child.type)

    if (positionIndex > -1) {
      // This is a position, so replace the component with ours,
      // maintaining props

      const positionChildrenArray = React.Children.toArray(child.props.children)

      // First, verify that there is a single Icon child of this position
      invariant(
        positionChildrenArray.length === 1 && positionChildrenArray[0].type === Icon,
        `Control>${child.name} must have a single child that is an Icon`,
      )

      return React.createElement(
        positionReplacements[positionIndex],
        child.props,
      )
    }

    return child
  })

  return React.createElement(
    ControlWrapper,
    restProps,
    childrenReplaced,
  )
}

Control.propTypes = {
  children: PropTypes.node.isRequired,
}
