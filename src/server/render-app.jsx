import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { Helmet } from 'react-helmet'
import { StaticRouter } from 'react-router'
import serialize from "serialize-javascript"

import App from './../shared/app'
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config'
import { isProd } from '../shared/util'

const renderApp = (location, routerContext) => {
  const appHtml = ReactDOMServer.renderToString(
    <StaticRouter location={location} context={routerContext}>
      <App initialData={routerContext}/>
    </StaticRouter>
  )
  const head = Helmet.rewind()

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="icon" type="image/x-icon" href="${STATIC_PATH}/favicon.ico">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
        <script>window.__INITIAL_DATA__ =${serialize(routerContext)}</script>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}</div>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>
    `
  )
}

export default renderApp