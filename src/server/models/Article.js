import Sequelize from 'sequelize'
import database from '../config/database'

const Article = database.define('articles', {
    name: Sequelize.STRING,
    detail: Sequelize.TEXT,
    type: Sequelize.TEXT,
    pic: Sequelize.BLOB,
});


module.exports = Article