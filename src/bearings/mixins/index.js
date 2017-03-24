/**
 * bearings Mixins
 */

import theme from '../theme'


// CSS Attribute Values
// Convert values or attribute maps to CSS attribute value strings


export function integerValue(x) {
  return `${x}`
}

export function pixelValue(x) {
  return `${x}px`
}


export function emValue(x) {
  return `${x}em`
}


export function remValue(x) {
  return `${x}rem`
}

export function millisecondsValue(x) {
  return `${x}ms`
}

export function secondsValue(x) {
  return `${x}s`
}

export function rgbValue(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`
}

export function rgbaValue(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function borderValue({ width, style, color } = { width: pixelValue(1), style: 'solid', color: rgbValue(0, 0, 0) }) {
  return `${width} ${style} ${color}`
}

export function animationValue({ name, duration, timingFunction, delay, iterationCount, direction, fillMode, playState } = { name: 'none', duration: secondsValue(0), timingFunction: 'ease', delay: secondsValue(0), iterationCount: integerValue(1), direction: 'normal', fillMode: 'none', playState: 'running' }) {
  return `${name} ${duration} ${timingFunction} ${delay} ${iterationCount} ${direction} ${fillMode} ${playState}`
}

export function transitionValue({ delay, duration, property, timingFunction } = { delay: secondsValue(0), duration: secondsValue(0), property: 'all', timingFunction: 'ease' }) {
  return `${delay} ${duration} ${property} ${timingFunction}`
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
    color: ${theme.palette[color] || rgbValue(0, 0, 0)};
  `
}


export function standardBackgroundColor(color = 'background') {
  return `
    background-color: ${theme.palette[color] || rgbValue(255, 255, 255)};
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
