module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        auKtoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      members: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      image: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
        // references: {
        //   // Required field
        //   model: 'Users',
        //   key: 'id',
        // },
        // onDelete: 'cascade',
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
    await queryInterface.dropTable('Groups');
  },
};
