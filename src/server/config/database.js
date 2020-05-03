import Sequelize from 'sequelize'

let database = null

if(process.env.DATABASE_URL){
    database = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres'
    })
}else {
    database = new Sequelize('roselyne-peinture', 'postgres', 'valent12', {
        host: 'localhost',
        dialect: 'postgres',
        operatorsAliases: false,
      
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        },
      });
}
 
module.exports = database
