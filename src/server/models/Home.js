import Sequelize from 'sequelize'
import database from '../config/database'

const Home = database.define('home', {
    title: Sequelize.STRING,
    title_bloc1: Sequelize.STRING,
    title_bloc2: Sequelize.STRING,
    title_bloc3: Sequelize.STRING,
    bloc1: Sequelize.TEXT,
    bloc2: Sequelize.TEXT,
    bloc3: Sequelize.TEXT,
    pic1: Sequelize.BLOB,
    pic2: Sequelize.BLOB,
    pic3: Sequelize.BLOB,
})

// If no row init a first one with id and mandatory fields (createdAt and modifiedAt)
Home.sync().then(() => {
    // Table created
    return Home.findOrCreate({
        where: {id: 1}, defaults: {}
    });
});

module.exports = Home 