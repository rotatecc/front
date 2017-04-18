/**
 * bearings utils
 */


import PropTypes from 'prop-types'
import isPlainObject from 'lodash.isplainobject'

import * as mixins from '../mixins'

import { darken, lighten } from './color'


// Re-export color utils
export * from './color'


export const validSizes = ['normal', 'small', 'large']


export const validBrands = ['primary', 'success', 'info', 'warning', 'danger']


export const validButtonBrands = ['secondary', ...validBrands]


export const validFeedbacks = ['success', 'info', 'warning', 'danger']


export const validInputFieldTypes = [
  'text',
  'password',
  'datetime-local',
  'date',
  'month',
  'time',
  'week',
  'number',
  'email',
  'url',
  'search',
  'tel',
  'color',
]


export const validCheckableTypes = ['checkbox', 'radio']


/**
 * React PropType for valid size
 * (no isRequired)
 */
export const propIsSize = PropTypes.oneOf(validSizes)


/**
 * React PropType for valid brand
 * (no isRequired)
 */
export const propIsBrand = PropTypes.oneOf(validBrands)


/**
 * React PropType for valid button brand
 * (no isRequired)
 */
export const propIsButtonBrand = PropTypes.oneOf(validButtonBrands)


/**
 * React PropType for valid feedback
 * (no isRequired)
 */
export const propIsFeedback = PropTypes.oneOf(validFeedbacks)


/**
 * React PropType for valid InputField type
 * (no isRequired)
 */
export const propIsInputFieldType = PropTypes.oneOf(validInputFieldTypes)


/**
 * React PropType for valid Checkable type (checkbox/radio)
 * (no isRequired)
 */
export const propIsCheckableType = PropTypes.oneOf(validCheckableTypes)


export const themeValueModifiers = {
  // Color
  dark: (color) => darken(color, 15),
  dark5: (color) => darken(color, 5),
  dark10: (color) => darken(color, 10),
  dark12: (color) => darken(color, 12),
  dark15: (color) => darken(color, 15),
  dark20: (color) => darken(color, 20),
  dark25: (color) => darken(color, 25),
  light: (color) => lighten(color, 15),
  light5: (color) => lighten(color, 5),
  light15: (color) => lighten(color, 15),
  light20: (color) => lighten(color, 20),
  light25: (color) => lighten(color, 25),

  // Length
  negate: (value) => `-${value}`,
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
    console.warn(`theme value '${s}' does not exist`) // eslint-disable-line no-console
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
  ff: mixins.fontFamily,
  fs: mixins.fontSize,
  fw: mixins.fontWeight,

  // coloring
  bgc: mixins.backgroundColor,
  c: mixins.color,

  // display
  d: mixins.display,

  // relative position
  t: mixins.top,
  r: mixins.right,
  b: mixins.bottom,
  l: mixins.left,

  // margin, padding
  m: mixins.margin,
  mTop: mixins.marginTop,
  mRight: mixins.marginRight,
  mBottom: mixins.marginBottom,
  mLeft: mixins.marginLeft,
  p: mixins.padding,
  pTop: mixins.paddingTop,
  pRight: mixins.paddingRight,
  pBottom: mixins.paddingBottom,
  pLeft: mixins.paddingLeft,

  // visibility
  o: mixins.opacity,
  z: mixins.zIndex,

  // border
  bordS: mixins.borderStyle,
  bordW: mixins.borderWidth,
  bordC: mixins.borderColor,

  // border-radius
  radius: mixins.borderRadius,
  '!radius': mixins.borderRadiusIfEnabled,

  // flex
  fJustify: mixins.justifyContent,
  fAlign: mixins.alignItems,
  fDirection: mixins.flexDirection,
  fGrow: mixins.flexGrow,
  fShrink: mixins.flexShrink,
  fBasis: mixins.flexBasis,

  // overflow
  over: mixins.overflow,
  overX: mixins.overflowX,
  overY: mixins.overflowY,

  // text (non-font)
  tDecor: mixins.textDecoration,
  tAlign: mixins.textAlign,
  tShadow: mixins.textShadow,
  '!tShadow': mixins.textShadowIfEnabled,
  ls: mixins.letterSpacing,
  lh: mixins.lineHeight,

  // misc
  float: mixins.float,
  cursor: mixins.cursor,
  vAlign: mixins.verticalAlign,
  bShadow: mixins.boxShadow,
  '!bShadow': mixins.boxShadowIfEnabled,
  trans: mixins.transition,
  '!trans': mixins.transitionIfEnabled,
  transform: mixins.transform,
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

    // If arg is a plain object, just merge it as-is
    if (isPlainObject(arg)) {
      return arg
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

      // Expand args containing theme values,
      // then spread into prop fn
      const result = propFn(...attrArgs.map(expandThemeValue))

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
