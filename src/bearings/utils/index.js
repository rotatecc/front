/**
 * bearings utils
 */


import React from 'react'

import * as mixins from '../mixins'

import { darken, lighten } from './color'


// Re-export color utils
export * from './color'


export const validBrands = ['primary', 'success', 'info', 'warning', 'danger']


export const validFeedbacks = ['success', 'info', 'warning', 'danger']


/**
 * React PropType for valid brand
 * (no isRequired)
 */
export const propIsBrand = React.PropTypes.oneOf(validBrands)


/**
 * React PropType for valid feedback
 * (no isRequired)
 */
export const propIsFeedback = React.PropTypes.oneOf(validFeedbacks)


export const themeValueModifiers = {
  // Color
  dark: (color) => darken(color, 15),
  dark5: (color) => darken(color, 5),
  dark15: (color) => darken(color, 15),
  dark20: (color) => darken(color, 20),
  dark25: (color) => darken(color, 25),
  light: (color) => lighten(color, 15),
  light5: (color) => lighten(color, 5),
  light15: (color) => lighten(color, 15),
  light20: (color) => lighten(color, 20),
  light25: (color) => lighten(color, 25),
}


/**
 * Expand a (possibly) shorthand theme value
 */
export function expandThemeValue(s) {
  // ex. s = ~brandPrimary
  if (typeof s !== 'string' || !s.startsWith('~')) {
    return s
  }

  const [shortValue, ...modifiers] = s.slice(1).split('~')

  const expanded = mixins.themeValue(shortValue)

  if (expanded === null || expanded === undefined) {
    console.warn(`shorthand theme value '${s}' was not expanded`) // eslint-disable-line no-console
    return s
  }

  const modified = modifiers.reduce(
    (acc, modifierId) => {
      const modifier = themeValueModifiers[modifierId]
      if (!modifier) {
        console.warn(`shorthand theme value modifier '${modifierId}' (on '${s}') does not exist, was not applied'`) // eslint-disable-line no-console
        return acc
      }

      const result = modifier(acc)

      if (result === null || result === undefined) {
        console.warn(`shorthand theme value modifier '${modifierId} could not be applied to '${s}'`) // eslint-disable-line no-console
        return acc
      }

      return result
    },
    expanded,
  )

  return modified
}


export function wrapMixinWithThemeValues(mixin) {
  return (...args) => mixin(...args.map(expandThemeValue))
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
  bgc: wrapMixinWithThemeValues(mixins.backgroundColor),
  c: wrapMixinWithThemeValues(mixins.color),

  // display
  d: mixins.display,

  // relative position
  t: mixins.top,
  r: mixins.right,
  b: mixins.bottom,
  l: mixins.left,

  // margin, padding
  m: wrapMixinWithThemeValues(mixins.margin),
  mTop: wrapMixinWithThemeValues(mixins.marginTop),
  mRight: wrapMixinWithThemeValues(mixins.marginRight),
  mBottom: wrapMixinWithThemeValues(mixins.marginBottom),
  mLeft: wrapMixinWithThemeValues(mixins.marginLeft),
  p: wrapMixinWithThemeValues(mixins.padding),
  pTop: wrapMixinWithThemeValues(mixins.paddingTop),
  pRight: wrapMixinWithThemeValues(mixins.paddingRight),
  pBottom: wrapMixinWithThemeValues(mixins.paddingBottom),
  pLeft: wrapMixinWithThemeValues(mixins.paddingLeft),

  // visibility
  o: mixins.opacity,
  z: mixins.zIndex,

  // border
  bordS: mixins.borderStyle,
  bordW: wrapMixinWithThemeValues(mixins.borderWidth),
  bordC: wrapMixinWithThemeValues(mixins.borderColor),

  // border-radius
  radius: wrapMixinWithThemeValues(mixins.borderRadius),

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
