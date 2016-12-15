import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  html {
    font-size: 110%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -moz-font-feature-settings: 'liga' on;
  }

  p,
  label {
    line-height: 1.5em;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: sans-serif;
  }

  h1 {
    font-size: 3rem;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 4rem;
    text-transform: uppercase;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 1rem;
  }

  body.fontLoaded {
    font-family: 'adelle-sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 300;

    b,
    strong {
      font-weight: 600;
    }

    h1,
    h2 {
      font-family: 'din-condensed-web', sans-serif;
      font-weight: 400;
    }

    h3,
    h4,
    h5,
    h6 {
      font-family: 'clarendon-text-pro', sans-serif;
      font-weight: 400;
    }
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }
`
