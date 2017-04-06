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
