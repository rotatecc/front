/**
 * Theme
 *
 * NOTE
 * In the future, the theme should
 * probably be hot-swappable
 */

import { makeColorVersions } from '../utils/color'


// Color palette

const palette = makeColorVersions({
  // Standard colors
  black: '#000000',
  white: '#ffffff',
  gray: '#e3e3e3',

  // Theme colors
  background: '#F6F6F3',
  text: '#232C33',
  primary: '#7EB0D3',
  success: '#00A676',
  info: '#AFA2FF',
  warning: '#DB9D47',
  danger: '#A24936',
  moody: '#585563',
  dark: '#2B4141',
})


// Spacing

const spacing = {
  xs: '2px',
  sm: '5px',
  md: '15px',
  lg: '15px',
  xl: '30px',
}


// Fonts

const fonts = {
  base: {
    family: '\'Helvetica Neue\', Helvetica, Arial, sans-serif',
    size: '16px',
  },
  heading: {
    family: '\'Helvetica Neue\', Helvetica, Arial, sans-serif',
  },
}


export default {
  palette,
  spacing,
  fonts,
}
