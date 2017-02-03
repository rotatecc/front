import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { BrowserRouter, Match, Miss } from 'react-router'

import FontFaceObserver from 'fontfaceobserver'

// Global store
import { store } from '@/store'

// Support containers/components
import App from '@/containers/App'

// Page components (containers)
import Home from '@/pages/Home'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'


// Import Global Styles
import '@/styles/global-styles'


// Observe loading of fonts
const fontNames = [
  'proxima-nova',
]
Promise.all(fontNames.map((fontName) => new FontFaceObserver(fontName, {}).load()))
.then(() => {
  document.body.classList.add('fontLoaded')
})
.catch(() => {
  document.body.classList.remove('fontLoaded')
})


// Root component
export const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Match exactly pattern="/" component={Home} />
        <Match exactly pattern="/about" component={About} />
        <Miss component={NotFound} />
      </App>
    </BrowserRouter>
  </Provider>
)


// If this is not a hot-reloding environment,
// just do a plain old render
// (otherwise, rendering is handled by /webpack/hotReload)
if (!module.hot) {
  render(<Root />, document.querySelector('react'))
}
