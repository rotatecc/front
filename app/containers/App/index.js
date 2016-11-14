/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import { Page } from 'hedron';
import styled from 'styled-components';

import ThemeProvider from 'components/ThemeProvider';
import Header from 'components/Header';
import Footer from 'components/Footer';


const AppWrapper = styled.div`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;


function App(props) {
  return (
    <ThemeProvider>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - rotate.cc"
          defaultTitle="rotate.cc"
          meta={[
            { name: 'description', content: 'rotate.cc : TODO' },
          ]}
        />
        <Page fluid>
          <Header />
          {React.Children.toArray(props.children)}
          <Footer />
        </Page>
      </AppWrapper>
    </ThemeProvider>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
