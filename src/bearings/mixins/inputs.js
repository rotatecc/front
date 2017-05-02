/**
 * Field-specific mixins
 */

import once from 'lodash.once'
import merge from 'lodash.merge'

import { expandStyles, capitalize } from '../utils'


// A bit silly, but we need to once this due to circular deps with expandStyles
const makeBaseInputStyles = once(() => expandStyles(
  'd/block',
  'fullWidth',
  'wMax/100%', // prevent Select from overflowing if options are long

  'h/~inputHeight',

  'pTop/~inputPaddingY',
  'pBottom/~inputPaddingY',
  'pLeft/~inputPaddingX',
  'pRight/~inputPaddingX',

  'fs/~inputFontSizeNormal', // overridden by size
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

  // NOTE if not applied, iOS defaults to border radius
  '!radius/~inputBorderRadiusNormal', // overridden by size

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
))


export function makeInputStyles({
  focus,
  disabled,
  brand,
  size,

  hasIconLeft = false,
  hasIconRight = false,
} = {}) {
  const disabledStyles = expandStyles(
    'cursor/not-allowed',
    'bgc/~inputBgcDisabled',
    // iOS fix for unreadable disabled content;
    // see https://github.com/twbs/bootstrap/issues/11655
    'o/1',
  )

  // Customize the focus state to imitate native WebKit styles
  const focusStyles = expandStyles(
    'noOutline',
    'c/~inputColorFocus',
    'bgc/~inputBgcFocus',
    'bordC/~inputBorderColorFocus',
    '!bShadow/~inputBoxShadowFocus',
  )

  return merge(
    {},
    makeBaseInputStyles(),
    expandStyles(
      // Disabled and Focus
      disabled && disabledStyles,
      focus && focusStyles,
      { ':disabled': disabledStyles, ':focus': focusStyles },

      // Icon padding
      hasIconLeft && 'pLeft/~inputPaddingXHasIcon',
      hasIconRight && 'pRight/~inputPaddingXHasIcon',
    ),
    expandStyles(
      // Brand
      brand && expandStyles(
        `bordC/~brand${capitalize(brand)}`,
        {
          ':focus': expandStyles(
            `bordC/~brand${capitalize(brand)}`,
          ),
        },
      ),

      // Size
      size && expandStyles(
        `fs/~inputFontSize${capitalize(size)}`,
        `!radius/~inputBorderRadius${capitalize(size)}`,
      ),
    ),
  )
}
