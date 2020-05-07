import Home from './controllers/home'
import Collection from './controllers/collection'
import Article from './controllers/article'
import Contact from './controllers/contact'
import Admin from './controllers/admin'

import {
    HOME_PAGE_ROUTE,
    COLLECTION_PAGE_ROUTE,
    INFORMATION_PAGE_ROUTE,
    CONTACT_PAGE_ROUTE,
    ADMIN_PAGE_ROUTE,
} from '../shared/routes'
  
import renderApp from './render-app'

export default (app) => {
  app.get(HOME_PAGE_ROUTE, Home.getPage)

  app.get(COLLECTION_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, Collection.getPage()))
  })
  
  app.get(INFORMATION_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, Article.getInfoPage()))
  })

  app.get(CONTACT_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, Contact.getPage()))
  })

  app.get(ADMIN_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, Admin.getPage()))
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