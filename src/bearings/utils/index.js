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
  p: (value) => {
    const { palette } = theme
    return palette[value] || null
  },
  // TODO spacing (s)
  // TODO fonts (f)
}


/**
 * Expand a (possibly) shorthand theme value
 */
export function expandThemeValue(s) {
  // s = p~primary (palette)
  if (typeof s !== 'string' || !s.includes('~')) {
    return s
  }

  const [type, value] = s.split('~')

  const expansion = themeValueExpansions[type]

  if (!expansion) {
    return s
  }

  const expanded = expansion(value)

  if (!expanded) {
    console.warn(`shorthand theme value '${s}' was not expanded`) // eslint-disable-line no-console
    return s
  }

  return expanded
}


/**
 * Shorthand properties (static)
 *
 * NOTE See below object literal definition for more
 * properties set with dependencies on the others
 */
export const shorthandPropertiesStatic = {
  absolute: mixins.positionAbsolute(),
  relative: mixins.positionRelative(),
  static: mixins.positionStatic(),

  atTop: mixins.top(0),
  atLeft: mixins.left(0),
  atBottom: mixins.bottom(0),
  atRight: mixins.right(0),

  fullHeight: mixins.height(mixins.percentValue(100)),
  fullWidth: mixins.width(mixins.percentValue(100)),
}

shorthandPropertiesStatic.atTopLeft = expandStyles('atTop', 'atLeft') // eslint-disable-line no-use-before-define

shorthandPropertiesStatic.absoluteCover = expandStyles('absolute', 'fullHeight', 'fullWidth', 'atTopLeft') // eslint-disable-line no-use-before-define


export const shorthandPropertiesValued = {
  w: 'width',
  h: 'height',
  size: mixins.size,
  square: mixins.square,
  mh: mixins.maxHeight,
  mw: mixins.maxWidth,

  fs: 'fontSize',

  bgc: compose(expandThemeValue, mixins.backgroundColor),
  c: compose(expandThemeValue, mixins.color),

  d: 'display',

  m: mixins.margin,
  p: mixins.padding,
}

/**
 * Expand shorthand styles
 * @return {obj}
 */
export function expandStyles(...args) {
  const styleMaps = args.map((arg) => {
    if (typeof arg !== 'string') {
      console.warn('shorthand attribute must be string') // eslint-disable-line no-console
      return {}
    }

    if (arg.includes('/')) {
      const [shortAttr, ...attrArgs] = arg.split('/')
      const lookup = shorthandPropertiesValued[shortAttr]

      if (!lookup) {
        console.warn(`[valued] shorthand attribute '${shortAttr}' does not exist (was not applied)`) // eslint-disable-line no-console
        return {}
      }

      const propFn = (typeof lookup === 'string')
        ? (x) => ({ [lookup]: x })
        : lookup

      return propFn(...attrArgs)
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


/**
 * Capitalize first letter of string
 */
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
