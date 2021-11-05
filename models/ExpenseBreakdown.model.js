const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Expensebreakdown extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Expenses);
    }
  }
  Expensebreakdown.init(
    {
      category: DataTypes.ENUM(
        'entertainment',
        'food',
        'home',
        'life',
        'utilities',
        'transportation',
        'general'
      ),
      splittype: DataTypes.ENUM(
        'equally',
        'exactamount',
        'shares',
        'adjustment'
      ),
      reminder: DataTypes.ARRAY(DataTypes.STRING),
      repeates: DataTypes.ENUM(
        'once',
        'weekly',
        'fortnightly',
        'monthly',
        'yearly'
      ),
      notes: DataTypes.STRING,
      expense_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Expensebreakdown',
    }
  );
  return Expensebreakdown;
};
