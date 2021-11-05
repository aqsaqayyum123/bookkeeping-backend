module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expenses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      totalamount: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      isgroup: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      group_id: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      friend_id: {
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
    await queryInterface.dropTable('Expenses');
  },
};
