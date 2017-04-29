import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'
import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import AtLeft from '../AtLeft'
import AtRight from '../AtRight'

import Icon from '../Icon'
import ControlSpinner from '../ControlSpinner'


const ControlWrapper = styled('div', expandStyles(
  'relative',
))


const ControlLeft = styled('div', expandStyles(
  'absolute',
  'atTop',
  'atLeft',

  'h/100%',
  'w/2.25em',

  'd/flex',
  'fAlignItems/center',
  'fJustifyContent/center',
))

const ControlRight = styled(ControlLeft, expandStyles(
  'l/auto',
  'r/0',
))


const validChildPositions = [AtLeft, AtRight]


const positionReplacements = [ControlLeft, ControlRight]


export default function Control({ loading, expanded, children, ...restProps }) {
  const parts = React.Children.toArray(children).reduce((acc, child) => {
    const positionIndex = validChildPositions.indexOf(child.type)

    if (positionIndex > -1) {
      // This is a position, so replace the component with ours,
      // maintaining props

      const positionChildrenArray = React.Children.toArray(child.props.children)

      // First, verify that there is a single Icon child of this position
      invariant(
        (
          positionChildrenArray.length === 1 &&
          (
            positionChildrenArray[0].type === Icon ||
            positionChildrenArray[0].type === ControlSpinner
          )
        ),
        `Control>${validChildPositions[positionIndex].name} must have a single Icon or ControlSpinner child`,
      )

      const newIcon = React.cloneElement(
        positionChildrenArray[0],
        { inControl: true },
      )

      const newPositioned = React.createElement(
        positionReplacements[positionIndex],
        null,
        newIcon,
      )

      return {
        ...acc,
        [child.type === AtLeft ? 'left' : 'right']: newPositioned,
      }
    }

    // Verify we don't already have a non-position
    invariant(
      acc.input === null,
      'Control must have exactly one child (e.g. Input) (other than positions)',
    )

    return { ...acc, input: child }
  }, {
    left: null,
    right: null,
    input: null,
  })

  invariant(
    parts.input !== null,
    'Control must have one child (e.g. Input) (other than positions)',
  )

  // if loading, set right position to spinner
  const rightFinal = !loading ? parts.right : <ControlRight><ControlSpinner /></ControlRight>

  const inputFinal = React.cloneElement(parts.input, {
    expanded, // forward expanded to input (i.e. used by Select to become full-width)
    hasIconLeft: parts.left !== null,
    hasIconRight: rightFinal !== null,
  })

  return (
    <ControlWrapper {...restProps}>
      {inputFinal}
      {parts.left}
      {rightFinal}
    </ControlWrapper>
  )
}

Control.propTypes = {
  loading: PropTypes.bool,
  expanded: PropTypes.bool,
  children: PropTypes.node.isRequired,
}
