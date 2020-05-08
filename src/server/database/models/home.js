export default (sequelize, DataTypes) => {
    const Home = sequelize.define('home', {
        title: DataTypes.STRING,
        title_bloc1: DataTypes.STRING,
        title_bloc2: DataTypes.STRING,
        title_bloc3: DataTypes.STRING,
        bloc1: DataTypes.TEXT,
        bloc2: DataTypes.TEXT,
        bloc3: DataTypes.TEXT,
        pic1: DataTypes.BLOB,
        pic2: DataTypes.BLOB,
        pic3: DataTypes.BLOB,
    })

    // If no row init a first one with id and mandatory fields (createdAt and modifiedAt)
    Home.sync().then(() => {
        // Table created
        return Home.findOrCreate({
            where: {id: 1}, defaults: {}
        })
    })
    return Home
}