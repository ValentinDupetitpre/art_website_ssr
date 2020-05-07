import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'

import App from '../shared/app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

const wrapApp = (AppComponent) =>
    <BrowserRouter>
        <AppContainer>
            <AppComponent initialData={window.__INITIAL_DATA__} />
        </AppContainer>
    </BrowserRouter>

ReactDOM.render(wrapApp(App), rootEl)

if (module.hot) {
  module.hot.accept('../shared/app', () => {
    const NextApp = require('../shared/app').default
    ReactDOM.render(wrapApp(NextApp), rootEl)
  })
}