/**
 * bearings Mixins
 */

import theme from '../theme'

import { capitalize } from '../utils'


// CSS Attribute Values
// Convert values or attribute maps to CSS attribute value strings


export function themeValue(id) {
  return theme[id]
}


export function brandValue(brand) {
  return themeValue(`brand${capitalize(brand)}`)
}


export function feedbackValue(feedback, type) {
  return themeValue(`feedback${capitalize(feedback)}${capitalize(type)}`)
}


export function integerValue(x) {
  return `${x}`
}


export function pixelValue(x) {
  return `${x}px`
}


export function percentValue(x) {
  return `${x}%`
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


export function translateValue(x, y) {
  return `translate(${x}, ${y})`
}


export function translateXValue(x) {
  return `translateX(${x})`
}


export function translateYValue(x) {
  return `translateY(${x})`
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
  return { height: x }
}


export function width(x) {
  return { width: x }
}


export function maxHeight(x) {
  return { maxHeight: x }
}


export function maxWidth(x) {
  return { maxWidth: x }
}


export function minHeight(x) {
  return { minHeight: x }
}


export function minWidth(x) {
  return { minWidth: x }
}


export function size(x, y) {
  return { ...width(x), ...height(y) }
}


export function square(x) {
  return size(x, x)
}


// Color


export function color(x) {
  return { color: x }
}


export function standardColor(color = 'text') {
  return { color: theme.palette[color] || rgbValue(0, 0, 0) }
}


export function standardBackgroundColor(color = 'background') {
  return { backgroundColor: theme.palette[color] || rgbValue(255, 255, 255) }
}


// Background


export function backgroundColor(x) {
  return { backgroundColor: x }
}


// Position


export function position(position = 'static') {
  return { position }
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


// Margin, padding, position*ing


export function margin(...args) {
  return { margin: args.join(' ') }
}


export function marginTop(x) {
  return { marginTop: x }
}


export function marginRight(x) {
  return { marginRight: x }
}


export function marginBottom(x) {
  return { marginBottom: x }
}


export function marginLeft(x) {
  return { marginLeft: x }
}


export function padding(...args) {
  return { padding: args.join(' ') }
}


export function paddingTop(x) {
  return { paddingTop: x }
}


export function paddingRight(x) {
  return { paddingRight: x }
}


export function paddingBottom(x) {
  return { paddingBottom: x }
}


export function paddingLeft(x) {
  return { paddingLeft: x }
}


export function top(x) {
  return { top: x }
}


export function right(x) {
  return { right: x }
}


export function bottom(x) {
  return { bottom: x }
}


export function left(x) {
  return { left: x }
}


// Display


export function display(display = 'block') {
  return { display }
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


// pseudo


export function pseudoBlock(pseudoType, styles) {
  return { [`:${pseudoType}`]: styles }
}


export function pseudoBefore(styles) {
  return pseudoBlock('before', styles)
}


export function pseudoAfter(styles) {
  return pseudoBlock('after', styles)
}


export function pseudoHover(styles) {
  return pseudoBlock('hover', styles)
}


export function pseudoVisited(styles) {
  return pseudoBlock('visited', styles)
}


// Media queries


export function media(query, styles) {
  return { [`@media ${query}`]: styles }
}


export function mediaWidthRange(from, to, styles) {
  const partMin = from ? ` and (min-width: ${from})` : ''
  const partMax = to ? ` and (max-width: ${to})` : ''
  const query = `screen${partMin}${partMax}`

  return media(query, styles)
}


// Clearfix


export function clearfix() {
  return pseudoAfter({
    ...displayBlock(),
    content: '',
    clear: 'both',
  })
}


// Border


export function border(attrs) {
  return { border: borderValue(attrs) }
}


export function borderStyle(x) {
  return { borderStyle: x }
}


export function borderWidth(x) {
  return { borderWidth: x }
}


export function borderColor(x) {
  return { borderColor: x }
}


export function borderSide(position = 'left', attrs) {
  return { [`border${capitalize(position)}`]: borderValue(attrs) }
}


// Border-radius


export function borderRadius(...args) {
  return { borderRadius: args.join(' ') }
}


// Visibility, opacity


export function zIndex(x) {
  return { zIndex: x }
}


export function opacity(x) {
  return { opacity: x }
}


// Flex


export function justifyContent(x) {
  return { justifyContent: x }
}


export function alignItems(x) {
  return { alignItems: x }
}


export function flexDirection(x) {
  return { flexDirection: x }
}


export function flexGrow(x) {
  return { flexGrow: x }
}


// Overflow


export function overflow(x) {
  return { overflow: x }
}


export function overflowX(x) {
  return { overflowX: x }
}


export function overflowY(x) {
  return { overflowY: x }
}


// Font


export function fontFamily(x) {
  return { fontFamily: x }
}


export function fontSize(x) {
  return { fontSize: x }
}


export function fontWeight(x) {
  return { fontWeight: x }
}


// Text (non-font)


export function textDecoration(x) {
  return { textDecoration: x }
}


export function textAlign(x) {
  return { textAlign: x }
}


export function letterSpacing(x) {
  return { letterSpacing: x }
}


export function lineHeight(x) {
  return { lineHeight: x }
}


// Misc


export function cursor(x) {
  return { cursor: x }
}


export function verticalAlign(x) {
  return { verticalAlign: x }
}


// Animations


// TODO
// Probably make the @keyframes definitions elsewhere,
// then just have these mixins refer to them
// Borrow definitions from the Animate.css project?
// https://daneden.github.io/animate.css/


// Transitions


// TODO
// Borrow definitions from the Hover.css project?
// http://ianlunn.github.io/Hover/
