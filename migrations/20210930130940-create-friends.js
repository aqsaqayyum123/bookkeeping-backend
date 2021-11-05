module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Friends', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      mobile: {
        type: Sequelize.INTEGER,
      },
      invitestatus: {
        type: Sequelize.ENUM('invited', 'active', 'inactive'),
      },
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      group_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      expense_id: {
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
    await queryInterface.dropTable('Friends');
  },
};
