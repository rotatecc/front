import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 20px;
  }

  body.fontLoaded {
    font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: sans-serif;
  }

  body.fontLoaded h1 {
    font-family: 'Contrail One', sans-serif;
    font-size: 50px;
    font-weight: 400;
  }

  body.fontLoaded h2,
  body.fontLoaded h3,
  body.fontLoaded h4,
  body.fontLoaded h5,
  body.fontLoaded h6 {
    font-family: 'Lora', sans-serif;
    font-weight: 400;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`;
