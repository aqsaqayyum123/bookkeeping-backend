const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friends_Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Friends_Groups.init(
    {
      friend_id: DataTypes.INTEGER,
      group_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Friends_Groups',
    }
  );
  return Friends_Groups;
};
