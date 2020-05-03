import Sequelize from 'sequelize'
import database from '../config/database'

import Collection from './Collection'

const Paintings = database.define('paintings', {
    name: Sequelize.STRING,
    pic: Sequelize.BLOB,
    smallPic: Sequelize.BLOB,
    detail: Sequelize.TEXT,
    likes: Sequelize.INTEGER,
});

Paintings.belongsTo(Collection);

module.exports = Paintings