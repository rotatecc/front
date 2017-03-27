/**
 * bearings utils
 */

import React from 'react'
import { css } from 'aphrodite'
import color from 'color'


export function createElementWithAphrodite(el, styles, props = null, children = null) {
  return React.createElement(
    el,
    {
      ...(props || {}),
      className: css(styles),
    },
    children,
  )
}


export function createComponentWithAphrodite(el, styles) {
  const className = css(styles)

  return (props) =>
    React.createElement(el, { ...props, className })
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
