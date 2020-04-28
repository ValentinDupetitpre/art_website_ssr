import {
    homePage,
    collectionPage,
  } from './controller'
  
  import {
    HOME_PAGE_ROUTE,
    COLLECTION_PAGE_ROUTE,
  } from '../shared/routes'
  
  import renderApp from './render-app'
  
  export default (app) => {
    app.get(HOME_PAGE_ROUTE, (req, res) => {
      res.send(renderApp(req.url, homePage()))
    })
  
    app.get(COLLECTION_PAGE_ROUTE, (req, res) => {
      res.send(renderApp(req.url, collectionPage()))
    })
  
    app.get('/500', () => {
      throw Error('Fake Internal Server Error')
    })
  
    app.get('*', (req, res) => {
      res.status(404).send(renderApp(req.url))
    })
  
    app.use((err, req, res, next) => {
      console.error(err.stack)
      res.status(500).send('Something went wrong!')
    })
  }