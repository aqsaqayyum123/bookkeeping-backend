module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Expensebreakdown', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      category: {
        type: Sequelize.ENUM(
          'entertainment',
          'food',
          'home',
          'life',
          'utilities',
          'transportation',
          'general'
        ),
      },
      splittype: {
        type: Sequelize.ENUM('equally', 'exactamount', 'shares', 'adjustment'),
      },
      reminder: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      repeates: {
        type: Sequelize.ENUM(
          'once',
          'weekly',
          'fortnightly',
          'monthly',
          'yearly'
        ),
      },
      notes: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('Expensebreakdown');
  },
};
