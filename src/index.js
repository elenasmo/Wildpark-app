import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/App'
import GlobalStyles from './components/GlobalStyles'
import * as serviceWorker from './serviceWorker'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  rootElement
)

serviceWorker.unregister()
