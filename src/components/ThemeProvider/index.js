/*
 *
 * ThemeProvider
 *
 * This component makes the theme object available to styled-components
 */

import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import defaultTheme from '@/styles/theme-default'


const ThemeProvider = ({ children }) => (
  <StyledThemeProvider theme={defaultTheme}>
    {React.Children.only(children)}
  </StyledThemeProvider>
)

ThemeProvider.propTypes = {
  children: React.PropTypes.element.isRequired,
}

export default ThemeProvider
