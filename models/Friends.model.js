const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friends extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Users);
      this.hasMany(models.Expenses);
      this.belongsToMany(models.Groups, {
        through: 'Friends_Groups',
      });
    }
  }
  Friends.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      invitestatus: DataTypes.ENUM('invited', 'active', 'inactive'),
      user_id: DataTypes.INTEGER,
      group_id: DataTypes.INTEGER,
      expense_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Friends',
    }
  );
  return Friends;
};
