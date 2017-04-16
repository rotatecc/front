import 'babel-polyfill'

import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import FontFaceObserver from 'fontfaceobserver'

// Styletron
import Styletron from 'styletron'
import { StyletronProvider } from 'styletron-react'

// Global store
import { store } from '@/store'

// Support containers/components
import App from '@/containers/App'

// Page components (containers)
import Home from '@/pages/Home'
import About from '@/pages/About'
import NotFound from '@/pages/NotFound'


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


// Styletron
const styletron = new Styletron()


// Root component
export const Root = () => (
  <Provider store={store}>
    <StyletronProvider styletron={styletron}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </App>
      </Router>
    </StyletronProvider>
  </Provider>
)


// If this is not a hot-reloding environment,
// just do a plain old render
// (otherwise, rendering is handled by /webpack/hotReload)
if (!module.hot) {
  render(<Root />, document.querySelector('react'))
}
