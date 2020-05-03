import express from 'express'
import compression from 'compression'

import routing from './routing'
import { STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'

import epilogue from 'epilogue'
import Home from './models/Home'
import homeMiddleware from './controllers/home-middleware'
import database from './config/database'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

//define db
epilogue.initialize({ app, sequelize: database });

const HomeResource = epilogue.resource({
    model: Home,
    endpoints: ['/home-data'],
})

HomeResource.use(homeMiddleware)

app.listen(WEB_PORT, () => {
    console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development).\nKeep "npm run dev:wds" running in an other terminal'}.`)
})