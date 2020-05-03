import Sequelize from 'sequelize'
import database from '../config/database'

const Collection = database.define('collections', {
    name: Sequelize.STRING,
    detail: Sequelize.TEXT,
    pic: Sequelize.BLOB,
});


module.exports = Collection