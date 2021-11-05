const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expenses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.hasOne(models.User);
      this.belongsTo(models.Users);
      this.belongsTo(models.Friends);
      this.belongsTo(models.Groups);
      this.hasOne(models.Expensebreakdown);
    }
  }
  Expenses.init(
    {
      description: DataTypes.STRING,
      email: DataTypes.ARRAY(DataTypes.STRING),
      totalamount: DataTypes.INTEGER,
      date: DataTypes.DATE,
      isgroup: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      group_id: DataTypes.INTEGER,
      friend_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Expenses',
    }
  );
  return Expenses;
};
