/**
 * bearings utils
 */

import color from 'color'

import * as mixins from '../mixins'

import theme from '../theme'


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
    console.error(`shorthand theme value '${s}' was not expanded`) // eslint-disable-line no-console
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
  size: (w, h) => ({ width: w, height: h }),
  square: (x) => ({ width: x, height: x }),

  fs: 'fontSize',

  c: (c) => ({ color: expandThemeValue(c) }),
}

/**
 * Expand shorthand styles
 * @return {obj}
 */
export function expandStyles(...args) {
  const styleMaps = args.map((arg) => {
    if (typeof arg !== 'string') {
      console.error('shorthand attribute must be string') // eslint-disable-line no-console
      return {}
    }

    if (arg.includes('/')) {
      const [shortAttr, ...attrArgs] = arg.split('/')
      const lookup = shorthandPropertiesValued[shortAttr]

      if (!lookup) {
        console.error(`[valued] shorthand attribute '${shortAttr}' does not exist (was not applied)`) // eslint-disable-line no-console
        return {}
      }

      const propFn = (typeof lookup === 'string')
        ? (x) => ({ [lookup]: x })
        : lookup

      return propFn(...attrArgs)
    }

    const prop = shorthandPropertiesStatic[arg]

    if (!prop) {
      console.error(`[static] shorthand attribute '${arg}' does not exist (was not applied)`) // eslint-disable-line no-console
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


/**
 * Lighten a color string by an amount (0-100; defaults to 25)
 */
export function lighten(colorString, amount = 25) {
  return color(colorString).lighten(amount / 100).hsl().string()
}


/**
 * Darken a color string by an amount (0-100; defaults to 35)
 */
export function darken(colorString, amount = 35) {
  return color(colorString).darken(amount / 100).hsl().string()
}


/**
 * Given a color map, make xDark and xLight versions
 * using standard amounts (35 and 25 respectively)
 * (returns new object; does not mutate)
 */
export function makeColorVersions(p) {
  const nu = {}

  Object.keys(p).forEach((k) => {
    nu[k] = p[k]
    nu[`${k}Light`] = lighten(p[k])
    nu[`${k}Dark`] = darken(p[k])
  })

  return nu
}
