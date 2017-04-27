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


export default function Control({ children, ...restProps }) {
  // TODO redo all of this with reduce

  let theLeft = null
  let theRight = null
  let theInput = null

  React.Children.forEach(children, (child) => {
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
        { key: validChildPositions[positionIndex].name },
        newIcon,
      )

      if (child.type === AtLeft) {
        theLeft = newPositioned
      } else {
        theRight = newPositioned
      }

      return
    }

    // Verify we don't already have a non-position
    invariant(
      theInput === null,
      'Control must have exactly one child (e.g. Input) other than a position',
    )

    theInput = child
  })

  invariant(
    theInput !== null,
    'Control must have one child (e.g. Input) other than a position',
  )

  const inputFinal = React.cloneElement(theInput, {
    key: 'the-input',
    hasIconLeft: theLeft !== null,
    hasIconRight: theRight !== null,
  })

  return React.createElement(
    ControlWrapper,
    restProps,
    [inputFinal, theLeft, theRight],
  )
}

Control.propTypes = {
  children: PropTypes.node.isRequired,
}
