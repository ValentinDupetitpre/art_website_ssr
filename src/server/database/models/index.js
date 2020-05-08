import Sequelize from 'sequelize'
import configJSON from '../config/config.js'

const env = process.env.NODE_ENV || 'development'
const config = configJSON[env]

let sequelize
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL)
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config)
}

const database = {
  home: sequelize.import('./home')
}
 
Object.keys(database).forEach(modelName => {
  if ('associate' in database[modelName]) {
    database[modelName].associate(database)
  }
})

database.sequelize = sequelize
database.Sequelize = Sequelize

export default database
