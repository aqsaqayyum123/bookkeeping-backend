const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //this.hasMany(models.User);
      // this.belongsToMany(models.Friends, {
      //   through: 'Friends_Groups',
      // });
    }
  }
  Groups.init(
    {
      name: DataTypes.STRING,
      members: DataTypes.ARRAY(DataTypes.STRING),
      image: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Groups',
    }
  );
  return Groups;
};
