/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Page } from 'hedron';
import styled from 'styled-components';

import Header from 'containers/Header';

import ThemeProvider from 'components/ThemeProvider';
import Footer from 'components/Footer';

import { windowResize, windowScroll } from './actions';


const AppWrapper = styled.div`
  background: ${({ theme }) => theme.palette.background};
  color: ${({ theme }) => theme.palette.text};
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

// Sticky footer
const AppContent = styled.div`
  flex: 1;
`;

class App extends React.PureComponent {
  componentDidMount() {
    // Trigger window listeners manually on mount
    this.props.onWindowResize();
    this.props.onWindowScroll();

    window.addEventListener('resize', this.props.onWindowResize);
    window.addEventListener('scroll', this.props.onWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.onWindowResize);
    window.removeEventListener('scroll', this.props.onWindowScroll);
  }

  // Render

  render() {
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
          <Header />
          <AppContent>
            {React.Children.toArray(this.props.children)}
          </AppContent>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node.isRequired,
  onWindowResize: React.PropTypes.func.isRequired,
  onWindowScroll: React.PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onWindowResize: () => {
      // get size object from window
      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      };

      return dispatch(windowResize(size));
    },
    onWindowScroll: () => {
      // get size object from event target
      const scroll = {
        left: window.pageXOffset || document.documentElement.scrollLeft,
        top: window.pageYOffset || document.documentElement.scrollTop,
      };

      return dispatch(windowScroll(scroll));
    },
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(null, mapDispatchToProps)(App);
