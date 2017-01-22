/**
 *
 * theme-default.js
 *
 * This object is provided to all styled-components via ThemeProvider.
 */

import color from 'color'


function standardLighten(colorString) {
  return color(colorString).lighten(0.25).hsl().string()
}


function standardDarken(colorString) {
  return color(colorString).darken(0.25).hsl().string()
}

function makeColorVersions(p) {
  const nu = {}

  Object.keys(p).forEach((k) => {
    nu[k] = p[k]
    nu[`${k}Light`] = standardLighten(p[k])
    nu[`${k}Dark`] = standardDarken(p[k])
  })

  return nu
}

const palette = {
  background: '#F6F6F3',
  gray: '#e3e3e3',
  grayDark: '#535454',
  text: '#232C33',
  primary: '#7EB0D3',
  success: '#00A676',
  info: '#AFA2FF',
  warning: '#DB9D47',
  danger: '#A24936',
  darkMeaning: '#585563',
  whiteAtNight: '#ffffff',
  altDark: '#2B4141',
}


const theme = {
  palette: makeColorVersions(palette),
}

export default theme
