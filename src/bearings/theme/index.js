/**
 * Theme
 *
 * NOTE
 * In the future, the theme should
 * probably be hot-swappable
 */

import { makeColorVersions } from '../utils'


// Color palette

const palette = makeColorVersions({
  // Standard colors
  gray: '#e3e3e3',
  white: '#ffffff',

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


export default {
  palette,
}
