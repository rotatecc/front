/**
 * Color utilities
 */

import color from 'color'


/**
 * Lighten a color string by an amount (0-100; defaults to 25)
 */
export function lighten(colorString, amount = 15) {
  return color(colorString).lighten(amount / 100).hsl().string()
}


/**
 * Darken a color string by an amount (0-100; defaults to 35)
 */
export function darken(colorString, amount = 20) {
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
