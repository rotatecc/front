/*
 *
 * ThemeProvider
 *
 * This component makes the theme object available to styled-components
 */

import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import defaultTheme from 'styles/theme-default';


export class ThemeProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyledThemeProvider theme={defaultTheme}>
        {React.Children.only(this.props.children)}
      </StyledThemeProvider>
    );
  }
}

ThemeProvider.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default ThemeProvider;
