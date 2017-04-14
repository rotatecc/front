/**
 * Color utilities
 */

import color from 'color'


/**
 * Lighten a color string by an amount (0-100; defaults to 15)
 */
export function lighten(colorString, amount = 15) {
  return color(colorString).lighten(amount / 100).hsl().string()
}


/**
 * Darken a color string by an amount (0-100; defaults to 20)
 */
export function darken(colorString, amount = 20) {
  return color(colorString).darken(amount / 100).hsl().string()
}


/**
 * Fade/transparentize a color string by an amount (0-100; defaults to 15)
 */
export function fade(colorString, amount = 15) {
  return color(colorString).fade(amount / 100).hsl().string()
}


/**
 * Opaquer a color string by an amount (0-100; defaults to 15)
 */
export function opaquer(colorString, amount = 15) {
  return color(colorString).opaquer(amount / 100).hsl().string()
}
