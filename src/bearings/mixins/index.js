/**
 * bearings Mixins
 */

import theme from '../theme'


// Basic


export function pixel(x) {
  return `${x}px`
}


export function em(x) {
  return `${x}em`
}


export function rem(x) {
  return `${x}rem`
}


export function borderValue({ width, style, color } = { width: pixel(1), style: 'solid', color: '#000' }) {
  return `${width} ${style} ${color}`
}


// Size

export function height(x) {
  return `
    height: ${x};
  `
}


export function width(x) {
  return `
    width: ${x};
  `
}

export function size(x, y) {
  return `
    ${width(x)}
    ${height(y)}
  `
}


export function square(x) {
  return `
    ${size(x, x)}
  `
}


export function standardSquare(size = 'md') {
  return square(theme.spacing[size] || 0)
}


// Color


export function standardColor(color = 'text') {
  return `
    color: ${theme.palette[color] || '#000'};
  `
}


export function standardBackgroundColor(color = 'background') {
  return `
    background-color: ${theme.palette[color] || '#fff'};
  `
}


// Position


export function position(position = 'static') {
  return `
    position: ${position};
  `
}


export function positionStatic() {
  return position('static')
}


export function positionAbsolute() {
  return position('absolute')
}


export function positionRelative() {
  return position('relative')
}


export function positionFixed() {
  return position('fixed')
}


// Display


export function display(display = 'block') {
  return `
    display: ${display};
  `
}


export function displayBlock() {
  return display('block')
}


export function displayNone() {
  return display('none')
}


export function displayFlex() {
  return display('flex')
}


export function displayInline() {
  return display('inline')
}


export function displayInlineBlock() {
  return display('inline-block')
}


// Clearfix


export function clearfixPsuedo() {
  return `
    &::after {
      ${displayBlock()}
      content: '';
      clear: both;
    }
  `
}


// Border


export function border(attrs) {
  return `
    border: ${borderValue(attrs)};
  `
}


export function borderSide(position = 'left', attrs) {
  return `
    border-${position}: ${borderValue(attrs)};
  `
}


// Border-radius


export function borderRadius(...args) {
  return `
    border-radius: ${args.join(' ')};
  `
}


// Animations

// TODO


// Transitions

// TODO
