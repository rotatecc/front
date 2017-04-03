/**
 * bearings utils
 */


import * as mixins from '../mixins'

import theme from '../theme'


// Re-export color utils
export * from './color'


/**
 * Generic compose fns
 */
export function compose(...fns) {
  return (input) =>
    fns.reduce(
      (acc, fn) =>
        fn(acc),
      input)
}


const themeValueExpansions = {
  // palette
  p: (color) => (theme.palette[color] || null),
  // font
  f: (type, attr = 'family') => (theme.fonts[type][attr]),
  // TODO spacing (s)
}


/**
 * Expand a (possibly) shorthand theme value
 */
export function expandThemeValue(s) {
  // s = p~primary (palette)
  if (typeof s !== 'string' || !s.includes('~')) {
    return s
  }

  const [type, ...args] = s.split('~')

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
}

export const shorthandPropertiesValued = {
  // sizing
  w: 'width',
  h: 'height',
  size: mixins.size,
  square: mixins.square,
  hMax: mixins.maxHeight,
  wMax: mixins.maxWidth,
  hMin: mixins.minHeight,
  wMin: mixins.minWidth,

  // font
  ff: compose(expandThemeValue, mixins.fontFamily),
  fs: compose(expandThemeValue, mixins.fontSize),
  fw: mixins.fontWeight,

  // coloring
  bgc: compose(expandThemeValue, mixins.backgroundColor),
  c: compose(expandThemeValue, mixins.color),

  // display
  d: 'display',

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
  bordS: compose(expandThemeValue, mixins.borderStyle),
  bordW: compose(expandThemeValue, mixins.borderWidth),
  bordC: compose(expandThemeValue, mixins.borderColor),

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

  // misc
  cursor: mixins.cursor,
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
      const lookup = shorthandPropertiesValued[shortAttr]

      if (!lookup) {
        console.warn(`[valued] shorthand attribute '${shortAttr}' does not exist (was not applied)`) // eslint-disable-line no-console
        return {}
      }

      const propFn = (typeof lookup === 'string')
        ? (x) => ({ [lookup]: x })
        : lookup

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
