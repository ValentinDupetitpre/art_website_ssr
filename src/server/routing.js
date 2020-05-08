import Controllers from './database/controllers'

import {
    HOME_PAGE_ROUTE,
    HOME_PAGE_ROUTE_MANAGEMENT,
    homePageEndpointRoute,
    COLLECTION_PAGE_ROUTE,
    INFORMATION_PAGE_ROUTE,
    CONTACT_PAGE_ROUTE,
    ADMIN_PAGE_ROUTE,
} from '../shared/routes'
  
import renderApp from './render-app'

export default (app) => {
  app.get(HOME_PAGE_ROUTE, Controllers.Home.getPage)
  app.get(HOME_PAGE_ROUTE_MANAGEMENT, Controllers.Home.get)
  app.post(HOME_PAGE_ROUTE_MANAGEMENT, Controllers.Home.create)
  app.put(homePageEndpointRoute(), Controllers.Home.update)

  app.get(COLLECTION_PAGE_ROUTE, Controllers.Collection.getPage)

  app.get(INFORMATION_PAGE_ROUTE, Controllers.Article.getInfoPage)

  app.get(CONTACT_PAGE_ROUTE, Controllers.Contact.getPage)

  app.get(ADMIN_PAGE_ROUTE, Controllers.Admin.getPage)

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