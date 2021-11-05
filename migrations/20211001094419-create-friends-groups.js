module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Friends_Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      friend_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      group_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Friends_Groups');
  },
};
