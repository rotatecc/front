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
  background: '#f7f7f7',
  gray: '#e3e3e3',
  grayDark: '#535454',
  text: '#000000',
  primary: '#334ea7',
  success: '#33a754',
  info: '#49b4f5',
  warning: '#ffc300',
  danger: '#bc2929',
}


const theme = {
  palette: makeColorVersions(palette),
}

export default theme