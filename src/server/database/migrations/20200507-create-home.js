export default {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('home', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        title_bloc1: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        title_bloc2: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        title_bloc3: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        bloc1: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        bloc2: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        bloc3: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: (queryInterface) => {
      return queryInterface.dropTable('home');
    }
  };