/**
 * Media
 *
 * Allowed children: AtCenter, AtLeft, AtRight
 */


import React from 'react'
import PropTypes from 'prop-types'
import invariant from 'invariant'

import { styled } from 'styletron-react'

import { expandStyles } from '../../utils'

import AtCenter from '../AtCenter'
import AtLeft from '../AtLeft'
import AtRight from '../AtRight'


const MediaWrapper = styled('div', expandStyles(
  'd/flex',
  'fJustifyContent/space-between',
  'fAlignItems/flex-start',
))


const MediaSpacer = styled('div', expandStyles(
  'fGrow/0',
  'fShrink/0',
  'h/1px',
  'w/1.5rem',
))


const MediaCenter = styled('div', expandStyles(
  'fBasis/auto',
  'fGrow/1',
  'fShrink/1',
))


const MediaLeft = styled('div', expandStyles(
  'fBasis/auto',
  'fGrow/0',
  'fShrink/0',
))


const MediaRight = styled(MediaLeft)


const validChildPositions = [AtCenter, AtLeft, AtRight]


const positionReplacements = [MediaCenter, MediaLeft, MediaRight]


export default function Media({ children, ...restProps }) {
  // Replace AtCenter/AtLeft/AtRight with Media-specific "implementations"
  const childrenReplaced = React.Children.map(children, (child) => {
    const positionIndex = validChildPositions.indexOf(child.type)

    // Verify children are AtCenter/AtLeft/AtRight
    invariant(
      positionIndex > -1,
      `Media children must be of types {${validChildPositions.map((p) => p.name).join(',')}}`,
    )

    return React.createElement(
      positionReplacements[positionIndex],
      child.props,
    )
  })

  // Intersperse MediaSpacer in children
  const childrenFinal = []
  .concat(
    ...React.Children.toArray(childrenReplaced)
      .map((e, i) =>
        ([<MediaSpacer key={`spacer${i}`} />, e])),
    )
  .slice(1)

  return React.createElement(
    MediaWrapper,
    restProps,
    childrenFinal,
  )
}

Media.propTypes = {
  children: PropTypes.node,
}
