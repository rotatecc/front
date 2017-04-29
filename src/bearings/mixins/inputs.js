/**
 * Field-specific mixins
 */

import once from 'lodash.once'
import merge from 'lodash.merge'

import { expandStyles } from '../utils'


// A bit silly, but we need to once this due to circular deps with expandStyles
const makeBaseInputStyles = once(() => expandStyles(
  'd/block',
  'fullWidth',

  'pTop/~inputPaddingY',
  'pBottom/~inputPaddingY',
  'pLeft/~inputPaddingX',
  'pRight/~inputPaddingX',

  'fs/~baseFontSize',
  'lh/~inputLineHeight',
  'c/~inputColor',
  'bgc/~inputBgc',
  {
    // Reset unusual Firefox-on-Android default style; see https://github.com/necolas/normalize.css/issues/214
    backgroundImage: 'none',
    backgroundClip: 'padding-box',
  },
  'bordS/solid',
  'bordW/~inputBorderWidth',
  'bordC/~inputBorderColor',
  '!radius/~inputBorderRadius', // NOTE if not applied, iOS defaults to border radius

  '!trans/~inputTransition',

  '!bShadow/~inputBoxShadow',

  // Unstyle the caret on `<select>`s
  { appearance: 'none' },
  // TODO ms fix: waiting for styletron to enable :: pseudo selectors
  // &::-ms-expand {
  //   background-color: transparent;
  //   border: 0;
  // }

  // TODO placeholder: waiting for styletron to enable :: pseudo selectors
  // &::placeholder {
  //   color: $input-color-placeholder;
  //   // Override Firefox's unusual default opacity; see https://github.com/twbs/bootstrap/pull/11526.
  //   opacity: 1;
  // }

  {
    ':disabled': expandStyles(
      'bgc/~inputBgcDisabled',
      // iOS fix for unreadable disabled content;
      // see https://github.com/twbs/bootstrap/issues/11655
      'o/1',
    ),

    // Customize the focus state to imitate native WebKit styles
    ':focus': expandStyles(
      'noOutline',
      'c/~inputColorFocus',
      'bgc/~inputBgcFocus',
      'bordC/~inputBorderColorFocus',
      '!bShadow/~inputBoxShadowFocus',
    ),
  },
))


export function makeInputStyles({ hasIconLeft = false, hasIconRight = false } = {}) {
  return merge({}, makeBaseInputStyles(), expandStyles(
    // Icon padding
    // TODO variable-ize; more padding for bigger sizes
    hasIconLeft && 'pLeft/2.25em',
    hasIconRight && 'pRight/2.25em',
  ))
}