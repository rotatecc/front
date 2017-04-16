/**
 * Field-specific mixins
 */

import { expandStyles } from '../utils'


export function field() {
  return expandStyles(
    'd/block',
    'fullWidth',
    'p/~inputPaddingY/~inputPaddingX',
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

    // TODO ms fix: waiting for styletron to enable :: pseudo selectors
    // // Unstyle the caret on `<select>`s in IE10+.
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
  )
}
