/**
 * bearings utils
 */


import React from 'react'

import * as mixins from '../mixins'

import theme from '../theme'


// Re-export color utils
export * from './color'


/**
 * React PropType for valid theme palette color
 * (no isRequired)
 */
export const propIsPaletteColor = React.PropTypes.oneOf(Object.keys(theme.palette))


const themeValueExpansions = {
  // palette
  p: mixins.themePaletteValue,
  // font
  f: mixins.themeFontValue,
  // distance
  d: mixins.themeDistanceValue,
}


/**
 * Expand a (possibly) shorthand theme value
 */
export function expandThemeValue(s, enforceType = null) {
  // s = p~primary (palette)
  if (typeof s !== 'string' || !s.includes('~')) {
    return s
  }

  const [type, ...args] = s.split('~')

  if (enforceType && enforceType !== type) {
    console.warn(`Theme value '${s}' does not match enforced type '${enforceType}'. Was not expanded.`) // eslint-disable-line no-console
    return s
  }

  const expansion = themeValueExpansions[type]

  if (!expansion) {
    return s
  }

  const expanded = expansion(...args)

  if (!expanded) {
    console.warn(`shorthand theme value '${s}' was not expanded`) // eslint-disable-line no-console
    return s
  }

  return expanded
}


export function wrapMixinWithThemeValues(mixin, enforceType = null) {
  return (...args) => mixin(...args.map((arg) => expandThemeValue(arg, enforceType)))
}


/**
 * Shorthand properties (static)
 *
 * NOTE See below expandStyles definition for more
 * properties set with dependencies on the others
 */
export const shorthandPropertiesStatic = {
  absolute: mixins.positionAbsolute(),
  relative: mixins.positionRelative(),
  static: mixins.positionStatic(),
  fixed: mixins.positionFixed(),

  atTop: mixins.top(0),
  atLeft: mixins.left(0),
  atBottom: mixins.bottom(0),
  atRight: mixins.right(0),

  fullHeight: mixins.height(mixins.percentValue(100)),
  fullWidth: mixins.width(mixins.percentValue(100)),

  pointer: mixins.cursor('pointer'),

  noListStyle: { listStyleType: 'none' },

  noOutline: { outline: 0 },

  nowrap: { whiteSpace: 'nowrap' },
}

export const shorthandPropertiesValued = {
  // sizing
  w: mixins.width,
  h: mixins.height,
  size: mixins.size,
  square: mixins.square,
  hMax: mixins.maxHeight,
  wMax: mixins.maxWidth,
  hMin: mixins.minHeight,
  wMin: mixins.minWidth,

  // font
  ff: wrapMixinWithThemeValues(mixins.fontFamily),
  fs: wrapMixinWithThemeValues(mixins.fontSize),
  fw: mixins.fontWeight,

  // coloring
  bgc: wrapMixinWithThemeValues(mixins.backgroundColor, 'p'),
  c: wrapMixinWithThemeValues(mixins.color, 'p'),

  // display
  d: mixins.display,

  // relative position
  t: mixins.top,
  r: mixins.right,
  b: mixins.bottom,
  l: mixins.left,

  // margin, padding
  m: wrapMixinWithThemeValues(mixins.margin, 'd'),
  mTop: wrapMixinWithThemeValues(mixins.marginTop, 'd'),
  mRight: wrapMixinWithThemeValues(mixins.marginRight, 'd'),
  mBottom: wrapMixinWithThemeValues(mixins.marginBottom, 'd'),
  mLeft: wrapMixinWithThemeValues(mixins.marginLeft, 'd'),
  p: wrapMixinWithThemeValues(mixins.padding, 'd'),
  pTop: wrapMixinWithThemeValues(mixins.paddingTop, 'd'),
  pRight: wrapMixinWithThemeValues(mixins.paddingRight, 'd'),
  pBottom: wrapMixinWithThemeValues(mixins.paddingBottom, 'd'),
  pLeft: wrapMixinWithThemeValues(mixins.paddingLeft, 'd'),

  // visibility
  o: mixins.opacity,
  z: mixins.zIndex,

  // border
  bordS: mixins.borderStyle,
  bordW: mixins.borderWidth,
  bordC: wrapMixinWithThemeValues(mixins.borderColor, 'p'),

  // border-radius
  radius: wrapMixinWithThemeValues(mixins.borderRadius, 'd'),

  // flex
  fJustify: mixins.justifyContent,
  fAlign: mixins.alignItems,
  fDirection: mixins.flexDirection,
  fGrow: mixins.flexGrow,

  // overflow
  over: mixins.overflow,
  overX: mixins.overflowX,
  overY: mixins.overflowY,

  // text (non-font)
  decor: mixins.textDecoration,
  align: mixins.textAlign,
  ls: mixins.letterSpacing,
  lh: mixins.lineHeight,

  // misc
  cursor: mixins.cursor,
  vAlign: mixins.verticalAlign,
}

const shorthandPropertiesValuedCached = {}

/**
 * Expand shorthand styles
 * @return {obj}
 */
export function expandStyles(...args) {
  const styleMaps = args.map((arg) => {
    if (!arg) {
      return {}
    }

    if (typeof arg !== 'string') {
      console.warn('shorthand attribute must be string') // eslint-disable-line no-console
      return {}
    }

    if (arg.includes('/')) {
      // look up cached value
      const cached = shorthandPropertiesValuedCached[arg]
      if (cached) {
        return cached
      }

      const [shortAttr, ...attrArgs] = arg.split('/')
      const propFn = shorthandPropertiesValued[shortAttr]

      if (!propFn) {
        console.warn(`[valued] shorthand attribute '${shortAttr}' does not exist (was not applied)`) // eslint-disable-line no-console
        return {}
      }

      const result = propFn(...attrArgs)

      // cache it
      shorthandPropertiesValuedCached[arg] = result

      return result
    }

    const prop = shorthandPropertiesStatic[arg]

    if (!prop) {
      console.warn(`[static] shorthand attribute '${arg}' does not exist (was not applied)`) // eslint-disable-line no-console
      return {}
    }

    return prop
  }, {})

  return Object.assign({}, ...styleMaps)
}


// Further shorthandPropertiesStatic (with dependencies)

shorthandPropertiesStatic.atTopLeft = expandStyles('atTop', 'atLeft')

shorthandPropertiesStatic.absoluteCover = expandStyles('absolute', 'fullHeight', 'fullWidth', 'atTopLeft')

shorthandPropertiesStatic.absoluteVerticalCenter = {
  ...expandStyles('absolute', 'l/50%'),
  transform: mixins.translateXValue(mixins.percentValue(-50)),
}

shorthandPropertiesStatic.flexCenter = expandStyles('fJustify/center', 'fAlign/center')


/**
 * Capitalize first letter of string
 */
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}


/**
 * Spread-able conditional obj
 * @example { a: 1, ...condSpread(true, { b: 1 }) } === { a: 1, b: 2 }
 * @example { a: 1, ...condSpread(false, { b: 1 }) } === { a: 1 }
 */
export function condSpread(pred, obj) {
  return pred ? obj : {}
}
