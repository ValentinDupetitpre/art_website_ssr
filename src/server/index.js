import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'

import routing from './routing'
import { STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'

import database from './database/models'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))
app.use(bodyParser.json({limit: '50mb'}))

routing(app)

database.sequelize.sync().then(() => {
  app.listen(WEB_PORT, () => {
      console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
      '(development).\nKeep "npm run dev:wds" running in an other terminal'}.`)
  })
})