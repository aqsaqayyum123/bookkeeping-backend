const { options } = require('joi');
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Groups);
      this.hasMany(models.Friends);
      this.hasMany(models.Expenses);
    }
  }
  Users.init(
    {
      uuid: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
      },
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      mobile: DataTypes.INTEGER,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Users',
      // hooks: {
      //   beforeValidate: (Users, options) => {
      //     Users.name = "i am hook";
      //   },
      // },
    }
  );
  // Users.addHook("beforeValidate", "cutomName", (Users, options) => {
  //   Users.name = "new hook";
  // });
  // Users.afterValidate("myHook", (Users, options) => {
  //   Users.name = "new hook after";
  // });
  return Users;
};
