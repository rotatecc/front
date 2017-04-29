/**
 * bearings utils
 */


import React from 'react'
import PropTypes from 'prop-types'
import isPlainObject from 'lodash.isplainobject'
import memoize from 'lodash.memoize'
import invariant from 'invariant'

import * as mixins from '../mixins'

import { darken, lighten, saturate, rotate, fade } from './color'


// Re-export color utils
export * from './color'


// environment-safe console warn
export const warn = (typeof console === 'object' && console.warn) // eslint-disable-line no-console
  ? console.warn // eslint-disable-line no-console
  : () => undefined


export const validBreakpoints = ['tiny', 'mobile', 'tablet', 'desktop', 'widescreen']


export const validSizes = ['normal', 'small', 'large']


export const validBrands = ['primary', 'success', 'info', 'warning', 'danger']


export const validBrandsOrDefault = ['default', ...validBrands]


export const validBrandsOrDefaultOrLightOrDark = [
  'light',
  'dark',
  ...validBrandsOrDefault,
]


export const validInputTypes = [
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


export const validJustifyContent = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
]


export const validAlignItems = [
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch',
]


export const validAlignSelf = [
  'auto',
  'flex-start',
  'flex-end',
  'center',
  'baseline',
  'stretch',
]


export const validAlignContent = [
  'stretch',
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
]


export const aliasWidthMap = {
  'three-quarters': mixins.percentValue(100 * (3 / 4)),
  'two-thirds': mixins.percentValue(100 * (2 / 3)),
  'one-half': mixins.percentValue(100 * (1 / 2)),
  'one-third': mixins.percentValue(100 * (1 / 3)),
  'one-quarter': mixins.percentValue(100 * (1 / 4)),
}


export const validIconSizes = ['normal', 1, 2, 3, 4, 5]


/**
 * React PropType for valid breakpoint/device
 * (no isRequired)
 */
export const propIsBreakpoint = PropTypes.oneOf(validBreakpoints)


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
 * React PropType for valid brand or 'default'
 * (no isRequired)
 */
export const propIsBrandOrDefault = PropTypes.oneOf(validBrandsOrDefault)


/**
 * React PropType for valid brand or 'default' or 'light' or 'dark'
 * (no isRequired)
 */
export const propIsBrandOrDefaultOrLightOrDark = PropTypes.oneOf(validBrandsOrDefaultOrLightOrDark)


/**
 * React PropType for valid Input type
 * (no isRequired)
 */
export const propIsInputType = PropTypes.oneOf(validInputTypes)


/**
 * React PropType for valid Checkable type (checkbox/radio)
 * (no isRequired)
 */
export const propIsCheckableType = PropTypes.oneOf(validCheckableTypes)


/**
 * React PropType for valid align-items value
 * (no isRequired)
 */
export const propIsAlignItems = PropTypes.oneOf(validAlignItems)


/**
 * React PropType for valid Icon size
 * (no isRequired)
 */
export const propIsIconSize = PropTypes.oneOf(validIconSizes)


// NOTE additional prop types near bottom


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
  light10: (color) => lighten(color, 10),
  light12: (color) => lighten(color, 12),
  light15: (color) => lighten(color, 15),
  light20: (color) => lighten(color, 20),
  light25: (color) => lighten(color, 25),
  saturate5: (color) => saturate(color, 5),
  saturate10: (color) => saturate(color, 10),
  rotate10: (color) => rotate(color, 10),
  rotateNeg10: (color) => rotate(color, -10),
  fade25: (color) => fade(color, 25),

  // Length
  negate: (value) => `-${value}`,
  halvePixels: (value) => `${parseFloat(value) / 2}px`,
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
    warn(`theme value '${shortValue}' (in '${s}') does not exist`)
    return s
  }

  const modified = modifiers.reduce(
    (acc, modifierId) => {
      const modifier = themeValueModifiers[modifierId]
      if (!modifier) {
        warn(`shorthand theme value modifier '${modifierId}' (in '${s}') does not exist, was not applied'`)
        return acc
      }

      const result = modifier(acc)

      if (result === null || result === undefined) {
        warn(`shorthand theme value modifier '${modifierId} (in '${s}') could not be applied`)
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

  // background
  bgc: mixins.backgroundColor,
  bgi: mixins.backgroundImage,

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
  fJustifyContent: mixins.justifyContent,
  fAlignItems: mixins.alignItems,
  fAlignSelf: mixins.alignSelf,
  fAlignContent: mixins.alignContent,
  fDirection: mixins.flexDirection,
  fGrow: mixins.flexGrow,
  fShrink: mixins.flexShrink,
  fBasis: mixins.flexBasis,
  fWrap: mixins.flexWrap,

  // overflow
  over: mixins.overflow,
  overX: mixins.overflowX,
  overY: mixins.overflowY,

  // text (non-font)
  c: mixins.color,
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
      warn('shorthand attribute must be string')
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
        warn(`[valued] shorthand attribute '${shortAttr}' does not exist (was not applied)`)
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
      warn(`[static] shorthand attribute '${arg}' does not exist (was not applied)`)
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

shorthandPropertiesStatic.flexCenter = expandStyles('fJustifyContent/center', 'fAlignItems/center')


/**
 * Capitalize first letter of string
 */
export function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}


/**
 * Spread-able conditional obj
 * @example { a: 1, ...condSpread(true, { b: 1 }) } === { a: 1, b: 2 }
 * @example { a: 1, ...condSpread(false, { b: 1 }) } === { a: 1 }
 */
export function condSpread(pred, obj) {
  return pred ? obj : {}
}


/**
 * HOC for a component with props pre-applied
 * @param  {string}                 New component display name
 * @param  {React.Component} component
 * @param  {Object} [afterProps={}] Spread after the actual props
 *                                  (will override any collisions)
 * @param  {Object} [preProps={}]   Spread before the actual props
 *                                  (e.g. defaultProps)
 *                                  (can be overriden by collisions)
 * @return {React.Component}
 */
export function componentWithProps(displayName, component, afterProps = {}, preProps = {}) {
  const c = (inProps) => {
    const props = { ...preProps, ...inProps, ...afterProps }
    return React.createElement(component, props)
  }

  c.displayName = displayName

  return c
}


/**
 *
 * Breakpoint helpers
 *
 */


/**
 * Map fn to breakpoint names, then merge results
 * @param  {Function} fn
 * @param  {Boolean}  [exceptSmallest=false]
 * @return {obj}
 */
export function breakpointsMapAndMerge(fn, exceptSmallest = false) {
  const bkpts = exceptSmallest ? validBreakpoints.slice(1) : validBreakpoints
  return Object.assign({}, ...bkpts.map(fn))
}


/**
 * Create a spec-string->style-object map based on an array
 * of values, a spec-string prefix, and a style-object generator (styleFn)
 * @param  {array} values     list of values, which can either be strings or
 *                            a sub-array of [name, value] where name
 *                            is placed as the suffix in the spec-string
 *                            and value is given to styleFn
 * @param  {string} prefix    prefix for each spec-string
 *                            (e.g. 'justify-content:')
 * @param  {function} styleFn turns each value into a style object
 * @return {object}           map of spec-strings to style-objects
 */
export function breakpointsCreateSpecsOnValues(values, prefix, styleFn) {
  return Object.assign({}, ...values.map((v) => {
    const [name, value] = Array.isArray(v) ? v : [v, v]

    return { [`${prefix}${name}`]: styleFn(value) }
  }))
}


/**
 * Create a memoized parsing function for spec strings
 * @param  {object}   dict map of single-spec strings to style objects
 * @return {function} parser that turns full spec strings into style objects
 */
export function breakpointsCreateSpecStringParser(dict) {
  return memoize((s) => {
    const specs = s.split('/')

    const resolvedSpecs = specs.map((m) => dict[m] || m)

    // verify
    resolvedSpecs.forEach((rs) => {
      invariant(
        typeof rs === 'object',
        `Spec '${rs}' does not exist`,
      )
    })

    return Object.assign({}, ...resolvedSpecs)
  })
}


/**
 * Create styles under breakpoints for all spec strings
 * in props with breakpoint names.
 * e.g. { tiny: '4/align-self:center' }
 *        => { '@media ...': { width: '33.3%', ... } }
 * @param  {object}   props         props which may contain breakpoint names as keys
 * @param  {function} propGuardFn   applied to all props[breakpointName] lookups
 *                                  e.g. can default bool true into
 *                                  a parse-able string
 * @param  {function} parser        turns spec strings into style objects
 * @param  {function} parsedGuardFn applied to parser result
 * @return {object}                 some (or none) breakpoint media queries
 *                                  with child style objects
 */
export function breakpointsCreateBreakpointsForPropSpecStrings(
  props,
  propGuardFn,
  parser,
  parsedGuardFn) {
  return breakpointsMapAndMerge((breakpointName) => {
    const propMaybe = props[breakpointName]

    const propGuarded = propGuardFn(propMaybe)

    if (typeof propGuarded === 'string' && propGuarded.length) {
      const parsed = parser(propGuarded)

      const parsedGuarded = parsedGuardFn(parsed)

      return mixins.breakpoint(breakpointName, parsedGuarded)
    }

    return {}
  })
}


/**
 * Convert breakpoint name to row columns pass breakpoint name (memoized)
 * e.g. 'tablet' => 'columnsTablet'
 */
export const breakpointNameToColumnsPassBreakpointName = memoize((bkpt) =>
  `columns${capitalize(bkpt)}`)


/**
 * React PropType for valid Column breakpoint
 * (no isRequired)
 */
export const propIsColumnBreakpoint = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.oneOf([true]), // allow bool true
])


/**
 * Helper: map of breakpoints to propIsColumnBreakpoint
 */
export const propTypesForColumnBreakpoints = breakpointsMapAndMerge((bkpt) =>
  ({ [bkpt]: propIsColumnBreakpoint }))


/**
 * Helper: map of breakpoints to PropTypes.string
 */
export const propTypesForRowBreakpoints = breakpointsMapAndMerge((bkpt) =>
  ({ [bkpt]: PropTypes.string }))


/**
 * Helper: map of `columns${bkpt}`s to propIsColumnBreakpoint
 */
export const propTypesForColumnsPassBreakpoints = breakpointsMapAndMerge((bkpt) =>
  ({ [breakpointNameToColumnsPassBreakpointName(bkpt)]: propIsColumnBreakpoint }))


// Field prop types


export const propTypeFieldId = PropTypes.string


export const propTypeFieldMeta = PropTypes.shape({
  id: propTypeFieldId.isRequired,

  size: propIsSize,
  brand: propIsBrand,
  disabled: PropTypes.bool,

  horizontal: propIsColumnBreakpoint,
  grouped: propIsColumnBreakpoint,
  addons: PropTypes.bool,
})


/**
 * React PropType for field context object
 * (no isRequired)
 */
export const propTypeFieldContext = PropTypes.shape({
  meta: propTypeFieldMeta.isRequired,
  rootMeta: propTypeFieldMeta.isRequired,
  idHierarchy: PropTypes.arrayOf(propTypeFieldId).isRequired,
})
