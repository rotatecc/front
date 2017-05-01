/**
 * Icon
 *
 * This is an attempt to duplicate the font-awesome sass stylesheets
 * in css-in-js form, to escape having to include a css/sass loader.
 * The font-awesome font still needs to be included.
 */

import PropTypes from 'prop-types'
import { styled } from 'styletron-react'
import memoize from 'lodash.memoize'

import { expandStyles, propIsIconSize } from '../../utils'

import { pseudoBefore } from '../../mixins'

import canConnectField from '../Field/canConnectField'

import nameCharMap from './nameCharMap'


const iconSizeToFontSize = memoize((size, relative) => {
  const num = (!size || size === 'normal') ? 1 : size
  return `${num}${relative ? 'em' : 'rem'}`
})


// Memoize the char lookup, just since the entire map is huge
// NOTE This might not actually help at all
const iconNameToChar = memoize((name) => (nameCharMap[name] || ' '))


const Icon = styled('span', (props) => {
  const {
    name,
    size,
    relative,
    fixedWidth,
    rotate,
    flipHorizontal,
    flipVertical,
    disabled,
  } = props

  const fontSize = iconSizeToFontSize(size, relative)

  return expandStyles(
    // The character
    pseudoBefore({ content: `"${iconNameToChar(name)}"` }),

    // Due to android bug, need 'text-rendering: "auto"' on fa font icons. see:
    // https://github.com/FortAwesome/Font-Awesome/issues/1094
    { textRendering: 'auto' },

    // Display
    'd/inline-block',

    // Font
    'ff/FontAwesome',
    'fw/normal',
    `fs/${fontSize}`,
    { fontStyle: 'normal', fontVariant: 'normal' },

    // Fixed Width (width of largest icons, e.g. cc-discover)
    fixedWidth && expandStyles('w/1.29em', 'tAlign/center'), // 18em/14 = 1.29em

    // Rotate
    rotate && `transform/rotate(${rotate}deg)`,

    // Flip
    flipHorizontal && 'transform/scale(-1, 1)',
    flipVertical && 'transform/scale(1, -1)',

    // Disabled
    disabled && 'o/0.65',
  )
})


Icon.propTypes = {
  name: PropTypes.string.isRequired,

  size: propIsIconSize.isRequired, // has default

  relative: PropTypes.bool,
  fixedWidth: PropTypes.bool,
  flipHorizontal: PropTypes.bool,
  flipVertical: PropTypes.bool,
  rotate: PropTypes.number,
}

Icon.defaultProps = {
  size: 'normal',
}


export default canConnectField(
  Icon,
  undefined,
  undefined,
  ['disabled'],
)
